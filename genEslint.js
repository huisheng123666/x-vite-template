 import fs from 'fs'

const tem = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: './',
    extraFileExtensions: [".vue"]
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0,
    'space-before-function-paren': 0,
    semi: 0,
    'vue/singleline-html-element-content-newline': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

 console.log(process.env.NODE_ENV)

fs.writeFile('./.eslintrc.cjs', `module.exports = ${JSON.stringify(tem, null, 2)}`, () => {})
