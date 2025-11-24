import consola from "consola";
import Manifest from "./Manifest";
import path from "path";
import Util from "./Util";
import { mkdir, readFile, writeFile } from "fs/promises";

export default class BaseController {
    private manifest = new Manifest();
    private namespace: string;
    private ui5Path: string;

    public async add() {
        try {
            this.namespace = await this.manifest.getNamespace();
            this.ui5Path = this.manifest.getUI5Path(this.namespace);

            consola.start("Generating the BaseController...");
            await this.addBaseController();
            consola.success("UI5 Ultima has successfully generated the Base class!");
        } catch (error) {
            consola.error(error);
        }
    }

    public async addBaseController() {
        const targetDirectory = path.join(process.cwd(), "webapp", "controller");
        const targetPath = path.join(targetDirectory, "BaseController.ts");
        const directoryExists = await Util.pathExists(targetDirectory);
        const templatePath = path.join(__dirname, "..", "..", "template", "controller", "BaseController.ts.tpl");
        const template = await readFile(templatePath, "utf-8");
        const content = this.replaceContent(template);

        if (!directoryExists) {
            consola.info("Generating controller directory...");
            await mkdir(targetDirectory, { recursive: true });
        }

        consola.info("Generating BaseController.ts file...");
        await writeFile(targetPath, content);
    }

    private replaceContent(rawContent: string) {
        return rawContent
            .replaceAll("{{NAMESPACE}}", this.namespace)
            .replaceAll("{{UI5_PATH}}", this.ui5Path);
    }
}