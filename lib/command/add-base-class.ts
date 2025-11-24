import { Command } from "commander";
import BaseClass from "../service/BaseClass";
import Util from "../service/Util";

export default new Command("add-base-class")
    .description(Util.getCommandDescription(
        "Adds the built-in UI5 Ultima Base class extending the ManagedObject class. The Base class is generated in the webapp/lib/core directory.\n" +
        "WARNING: This action overrides Base class related files if already exist!"
    ))
    .action(async () => {
        const base = new BaseClass();
        await base.add();
    });