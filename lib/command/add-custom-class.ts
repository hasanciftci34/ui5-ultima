import { Command } from "commander";
import Util from "../service/Util";
import CustomClass from "../service/CustomClass";

export default new Command("add-custom-class")
    .description(Util.getCommandDescription(
        "Generates a custom class extending the ManagedObject or built-in UI5 Ultima Base class.\n" +
        "The class name can include a relative path from the webapp folder.\n" +
        "For example, 'lib.employee.NewEmployee' will create: 'webapp/lib/employee/NewEmployee.ts'\n" +
        "WARNING: This action will override the class file if exists!"
    ))
    .action(async () => {
        const custom = new CustomClass();
        await custom.add();
    });