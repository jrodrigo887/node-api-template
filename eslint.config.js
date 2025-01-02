module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**', "test/**"], // Ignora estas pastas

  },
  {
    files: ['./src/**/*.ts', './test/**/*.ts'], // Aplica-se a arquivos TypeScript
    languageOptions: {
      // parser: require('@typescript-eslint/parser'), // Parser para TypeScript
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      // '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Plugin TypeScript
      // Adicione outros plugins aqui, se necessário
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-magic-numbers': 'warn',
      eqeqeq: 'error',
      'no-path-concat': 'error',
      curly: 'error',
      'prefer-const': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/member-delimiter-style': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
    },
  },
];
