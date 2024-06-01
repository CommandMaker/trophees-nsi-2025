import './bootstrap';
import '../css/app.scss';

import { createApp } from 'vue';
import HelloWorld from '~/HelloWorld.vue';

const app = createApp({});

app.component('hello-world', HelloWorld);

app.mount('#app');
