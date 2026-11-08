import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["frontend/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: globals.browser
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  {
    files: ["frontend/js/md5.js"],
    languageOptions: {
      globals: {
        module: "readonly"
      }
    }
  }
];

