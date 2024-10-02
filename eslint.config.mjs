import globals from "globals";
import pluginJs from "@eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

module.exports = {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: { globals: globals.browser },
  extends: [
    pluginJs.configs.recommended,
    pluginReact.configs.recommended
  ],
  rules: {
    // Add rules here to override or disable specific rules
    "react-hooks/exhaustive-deps": "off"
  }
};