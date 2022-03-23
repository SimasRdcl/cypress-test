module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/display-name': 0,
    'global-require': 0,
    'react/no-children-prop': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    '@typescript-eslint/no-empty-interface': 0,
  },
};
