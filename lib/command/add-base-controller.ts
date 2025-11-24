import { Command } from "commander";
import BaseController from "../service/BaseController";
import Util from "../service/Util";

export default new Command("add-base-controller")
    .description(Util.getCommandDescription(
        "Adds the built-in UI5 Ultima BaseController class into the webapp/controller directory.\n" +
        "WARNING: This action will override the webapp/controller/BaseController.ts file if exists!"
    ))
    .action(async () => {
        const base = new BaseController();
        await base.add();
    });