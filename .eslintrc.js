// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    "comma-dangle": ["error", "never"],
    'eqeqeq': ["error", "smart"],
    'max-len': 0,
    'linebreak-style': 0,
    'arrow-body-style': 0,
    'no-else-return': 0,
    "object-shorthand": 0,
    'semicolon': 0,
    'prefer-template': 0,
    'operator-assignment': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'global-require': 0,
    'object-curly-spacing': 0,
    'prefer-arrow-callback': 0,
    'no-trailing-spaces': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    "quotes": [0, "single"],
    'semi': 0,
    "no-irregular-whitespace":"off", // 这禁止掉 空格报错检查
    "no-sequences": 0, // 禁用逗号关闭
    "no-unused-vars": 0, // 定义变量可以不使用
    "space-before-function-paren": 0, // 方法名后面可以不加空格
    "spaced-comment": 0 // 注释的//后面可以不加空格
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
}
