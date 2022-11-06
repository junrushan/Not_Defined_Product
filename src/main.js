import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import App from './App.vue';
import 'element-plus/dist/index.css';
import router from './router';
import store from './store';

import '@/assets/main.css';
import '@/style/index.less';

createApp(App).use(router).use(store).use(ElementPlus).mount('#app');
