module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier",
    "plugin:json/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react-hooks", "prettier", "json"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/camelcase": [
      "off",
      { allow: ["__webpack_public_path__"] },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
      },
    ],
    camelcase: ["off", { properties: "never" }],
    "max-len": [
      2,
      {
        code: 300,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "object-curly-spacing": "off",
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
        },
      },
    ],
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    semi: ["error", "never"],
    "no-prototype-builtins": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off", // have type check so disable here
    "react/no-deprecated": "warn",
    "prettier/prettier": ["error", require("../.prettierrc.js")],
    "no-shadow": "error",
    "no-loop-func": "error",
    curly: ["error", "multi-line"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["src/page/todo/individualKyc/**/*"],
      rules: {
        "prettier/prettier": [
          "error",
          {
            ...require("../.prettierrc.js"),
            printWidth: 80,
          },
        ],
      },
    },
  ],
};
