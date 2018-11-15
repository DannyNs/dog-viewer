module.exports = {
  extends: 'airbnb',
  env: {
    jest: true,
    browser: true,
    commonjs: true,
  },
  parser: 'babel-eslint',
  rules: {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
  }
};