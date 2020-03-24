import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import '@/assets/style/base.scss'
import '@/assets/js/rem'
import lottie from 'vue-lottie';
import Toast from '@/assets/js/toast'
import { getUrlParam } from '@/assets/js/util.js'
import loading from './assets/js/loading'
Vue.use(Toast, { defaultType: "center", duration: "2000" })
Vue.component('lottie', lottie)
Vue.use(loading);
Vue.config.productionTip = false;
(() => {
    /**
     * @des 处理不同code的静态资源
     * 
     */
	let evaluationCode = getUrlParam('code')
	if(evaluationCode) {
		window.sessionStorage.setItem('evaluationCode',evaluationCode)
	}
    let path = window.sessionStorage.getItem('evaluationCode');
    Vue.filter('PUBLIC_PATH', (str) => {
		if(str.backgroundImage) {
			let url = str.backgroundImage.substring(str.backgroundImage.length-1,-1).substring(4)
			return {
				backgroundImage: `url(${process.env.BASE_URL}${path}/${url})`
			}
		}else {
			return `${process.env.BASE_URL}${path}/${str}`;
		}
    })
})()
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
