module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  // extends: ["eslint:recommended", "google"],
  // rules: {
  //   quotes: ["error", "double"],
  // },

  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
