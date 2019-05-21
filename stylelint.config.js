module.exports = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-scss",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "declaration-empty-line-before": ["always", {
      ignore: ["after-comment", "after-declaration", "first-nested"],
    }],
    "scss/at-rule-no-unknown": true,
  },
  ignoreFiles: [
    "dist/**/*.css",
  ],
};
