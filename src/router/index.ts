import {
	createRouter,
	createWebHashHistory,
	RouteRecordRaw
} from 'vue-router' //引入vue-router
import Home from "../views/home/home.vue"

const routes: RouteRecordRaw[] = [
	{
		path: '',
		redirect: "home"
	},
	{
		path: '/home',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */'../views/home/home.vue'),
		meta: {
			title: '首页'
		},
	},
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */'../views/login/login.vue'),
		meta: {
			title: '登录'
		}
	},

];

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
/* router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		next();
	} else {
		let token = localStorage.getItem('Authorization');
		if (token === null || token === '') {
			next('/login');
		} else {
			next();
		}
	}
}); */



const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router;