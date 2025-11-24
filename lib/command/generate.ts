import { Command } from "commander";
import Generator from "../service/Generator";
import Util from "../service/Util";

export default new Command("generate")
    .description(Util.getCommandDescription("Generates a free-style SAPUI5 application with TypeScript."))
    .action(async () => {
        const generator = new Generator();
        await generator.generate();
    });