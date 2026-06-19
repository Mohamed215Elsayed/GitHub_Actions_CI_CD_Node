import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.node,
        },
    },
    {
        files: ['test/**/*.js'],
        languageOptions: {
            globals: globals.vitest,
        },
    },
    {
        ignores: ['node_modules/**'],
    },
]);
