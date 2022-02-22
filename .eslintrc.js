module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["vue", "prettier", "@typescript-eslint", "import", "cypress"],
  env: {
    browser: true,
    node: true,
    "cypress/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
    "plugin:vue/vue3-recommended",
    // "prettier",
    // "@vue/prettier",
    // "@vue/prettier/@typescript-eslint",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
    "import/first": "warn",
    "import/default": "warn",
    "import/newline-after-import": "warn",
    "import/namespace": "off",
    "import/no-unresolved": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    alias: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
    },
  },
}
