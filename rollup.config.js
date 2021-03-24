import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"
import typescript from "rollup-plugin-typescript2"
import packageJson from "./package.json"
import commonjs from "@rollup/plugin-commonjs"
import { DEFAULT_EXTENSIONS } from "@babel/core"

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom", "@emotion/react"],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        exclude: /node_modules/,
        plugins: ["@emotion"],
        presets: [
          ["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }],
          "@babel/preset-typescript",
        ],
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      }),
      terser(),
    ],
  },
]
