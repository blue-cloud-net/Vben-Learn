import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';

// 引入全局样式
import 'ant-design-vue/dist/reset.css';
import './style.css';

import { router } from './routes';

const app = createApp(App);

app.use(Antd);

app.use(router);

app.mount('#app');
