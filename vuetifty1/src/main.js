import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import Register from '@/components/Register'
import Hello from '@/components/HelloWorld'


Vue.config.productionTip = false
Vue.use(vueRouter)

const router =  new vueRouter({
	mode:'history',
	base: __dirname,
	routes : [
		{
		path: '/register',
		name:'Register',
		component: Register
	},
	{
		path: '/Hello',
		name:'HelloWorld',
		component: Hello,App
	}
	]
}
)

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	template :`<div id= "app">
	<router-link> </router-link>
	<router-view> </router-view>
	</div>`
  }).$mount('#app')
