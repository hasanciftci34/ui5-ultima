import { Command } from "commander";
import View from "../service/View";
import Util from "../service/Util";

export default new Command("add-view")
    .description(Util.getCommandDescription(
        "Adds a new SAPUI5 view (xml) with controller (ts). Additionally, it adds a new route and target to the manifest.json file.\n" +
        "WARNING: If the View-Controller already exist, this action will override the existing files!"
    ))
    .action(async () => {
        const view = new View();
        await view.add();
    });