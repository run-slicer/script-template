import { readFile } from "node:fs/promises";
import { defineConfig } from "rolldown";
import { replacePlugin } from "rolldown/plugins";

const { version } = JSON.parse(await readFile("./package.json", "utf8"));

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "esm",
    },
    plugins: [
        replacePlugin(
            {
                __SCRIPT_VERSION__: JSON.stringify(version),
            },
            {
                preventAssignment: false,
            }
        ),
    ],
});
