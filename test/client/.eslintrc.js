module.exports = {
  "env": {
    "browser": true,
    "node": true,
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
  },
  "plugins": ["react"],
  "rules": {
    // enable rules
    "react/jsx-key": 2,

    // override default options for rules from base configurations
    "eqeqeq": [2, "smart"],
    "max-len": [2, {"code": 120, "tabWidth": 2, "ignoreUrls": true}],
    "newline-per-chained-call": [2, {"ignoreChainWithDepth": 4}],
    "no-cond-assign": [2, "except-parens"],
    "no-multi-spaces": [2, {"exceptions": {
      "ImportDeclaration": true,
      "Property": true,
      "VariableDeclarator": true
    }}],

    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "react/jsx-closing-bracket-location": [2, { selfClosing: 'after-props', nonEmpty: 'after-props' }],

    // disable rules
    "arrow-parens": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0, // causes error with redux testing
    "jsx-a11y/no-static-element-interactions": 0,
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "no-plusplus": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 0,
  },
};
