import { Command } from "commander";
import Util from "../service/Util";
import FragmentService from "../service/FragmentService";

export default new Command("add-fragment-service")
    .description(Util.getCommandDescription(
        "Adds the built-in UI5 Ultima FragmentService class. The FragmentService class is generated in the webapp/lib/core directory.\n" +
        "WARNING: This action overrides FragmentService class related files if already exist!"
    ))
    .action(async () => {
        const fragment = new FragmentService();
        await fragment.add();
    });