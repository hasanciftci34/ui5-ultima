import consola from "consola";
import Manifest from "./Manifest";
import { confirm, input, select } from "@inquirer/prompts";

export default class CustomClass {
    private manifest = new Manifest();
    private name: string;
    private type: string;
    private extendBase: boolean;
    private namespace: string;
    private ui5Path: string;
    private cancel = false;

    public async add() {
        await this.prompt();

        if (!this.cancel) {

        }
    }

    private async prompt() {
        try {
            this.name = await this.getName();
            this.type = await this.getType();
            this.extendBase = await this.extendBaseClass();
        } catch (error) {
            this.cancel = true;

            if (error instanceof Error && error.name === "ExitPromptError") {
                consola.info("Custom Class generator has been canceled!");
            } else {
                throw error;
            }
        }
    }

    private async getName() {
        return input({
            message: "Enter a name for your custom class. Use dot notation for subfolders from the webapp folder:",
            required: true,
            validate: (value) => {
                const regex = /^([A-Za-z][A-Za-z0-9_]*)(\.[A-Za-z][A-Za-z0-9_]*)*$/;

                if (!regex.test(value)) {
                    return "Invalid class name. Use dot-separated parts starting with letters (e.g., lib.employee.NewEmployee).";
                }

                return true;
            }
        });
    }

    private async getType() {
        return select({
            message: "Select a type for your custom class (default: Final):",
            choices: [{
                name: "Abstract",
                value: "Abstract",
                description: "Abstract Class"
            }, {
                name: "Final",
                value: "Final",
                description: "Final Class"
            }],
            default: "Final"
        });
    }

    private async extendBaseClass() {
        return confirm({
            message: "Would you like to extend the built-in Base class (Base class is also generated if not exists)? (default: Y):",
            default: true
        });
    }
}