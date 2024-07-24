const eslintFactory = require('@backstage/cli/config/eslint-factory')(__dirname);

module.exports = eslintFactory(__dirname, {
  rules: {
    'no-console': 'off', // no-console 규칙 비활성화, console.log 찍기 위해서.
  },
})
