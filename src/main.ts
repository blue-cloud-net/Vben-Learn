import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';

// 引入全局样式
import 'ant-design-vue/dist/reset.css';
import './style.css'

const app = createApp(App);

app.use(Antd);

app.mount('#app');
