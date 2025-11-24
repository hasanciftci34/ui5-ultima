import { Command } from "commander";
import Fragment from "../service/Fragment";
import Util from "../service/Util";

export default new Command("add-fragment")
    .description(Util.getCommandDescription(
        "Adds a new XML fragment to your project. \n" +
        "The fragment name can include a relative path from the webapp folder.\n" +
        "For example, 'fragments.employee.NewEmployee' will create: 'webapp/fragments/employee/NewEmployee.fragment.xml'\n" +
        "WARNING: This action overrides the fragment file if already exists in the specified directory."
    ))
    .action(async () => {
        const fragment = new Fragment();
        await fragment.add();
    });