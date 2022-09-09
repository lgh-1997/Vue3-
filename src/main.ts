import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Import an Svg image plug-in to display Svg images on a page
import 'virtual:svg-icons-register'
import SvgIcon from "./components/SvgIcon/index.vue";
// import router
import router from "./router";
// import wechat-title
import VueWechatTitle from "vue-wechat-title";

createApp(App).use(ElementPlus).use(router).use(VueWechatTitle).component('SvgIcon',SvgIcon).mount('#app')
