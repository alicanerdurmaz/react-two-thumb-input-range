import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"
import typescript from "rollup-plugin-typescript2"
import packageJson from "./package.json"
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
    external: ["react", "@emotion/react"],
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        exclude: "node_modules/**",
        plugins: ["@emotion"],
        presets: ["@babel/preset-typescript", "@babel/preset-react", "@emotion/babel-preset-css-prop"],
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
]
