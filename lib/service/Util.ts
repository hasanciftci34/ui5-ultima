import { access } from "fs/promises";

export default class Util {
    public static async pathExists(path: string) {
        try {
            await access(path);
            return true;
        } catch {
            return false;
        }
    }

    public static getCommandDescription(description: string) {
        return description.trimEnd() + "\n";
    }
}