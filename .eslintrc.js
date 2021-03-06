module.exports = {
  env: {
    "browser": true,
    "node": true,
    es2022: true
  },
  ignorePatterns: ["node_modules/", "dist"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: ["airbnb", "plugin:import/errors", "plugin:import/warnings", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  rules: {
    '@typescript-eslint/no-var-requires': "off",
    'linebreak-style': "off",
    'import/prefer-default-export': "off",
    'prettier/prettier': "off",
    'import/extensions': "off",
    'no-use-before-define': "off",
    'prefer-template': "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    'import/no-unresolved': "off",
    "import/no-extraneous-dependencies": "off",
    'no-shadow': "off",
    'react/prop-types': "off",
    'react/require-default-props': "off",
    'react/jsx-props-no-spreading': "off",
    'react/jsx-filename-extension': ["warn", {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    'jsx-a11y/no-noninteractive-element-interactions': "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    'import/order': "off",
    "react/button-has-type": "off",
    "react/function-component-definition": "off"
  }
};