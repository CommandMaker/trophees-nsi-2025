import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.ts'],
            refresh: true,
        }),
        vuePlugin()
    ],
    resolve: {
        alias: {
            '~' : path.join(__dirname, './resources/js'),
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    }
});
