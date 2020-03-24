import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { getUrlParam } from '@/assets/js/util.js'
Vue.use(Router)
const router = new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0, y: 0
			}
		}
	},
	routes
})
router.beforeEach((to, from, next) => {
	if (navigator.onLine) {
		let code = getUrlParam('code')
		let name = to.name
		
		console.log(code)
		if (code == '0') { 
			switch (name) { 
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医体质测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		} else if (code == '1') { 
			switch (name) { 
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医心系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		} else if (code == '2') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医肝系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		}
		else if (code == '3') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医肺系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		} else if (code == '4') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医脾系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		}
		else if (code == '5') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医胃系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		}else if (code == '6') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医肾系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		} else if (code == '7') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医小肠系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		} else if (code == '8') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医大肠系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		} else if (code == '9') {
			switch (name) {
				case "home":
				case "survey":
				case "presentation":
					document.title = "中医胆系证候测评"
					break;
				default:
					document.title = to.meta.title
					break
			}
		}
		next()
	}else {
		Vue.prototype.$toast('网络好像有点问题，请检查后重试！')
		next(false)
	}
})
export default router
