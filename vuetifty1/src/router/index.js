import Vue from 'vue'
import vueRouter from 'vue-router'
import Register from '@/components/Register'
import Hello from '@/components/HelloWorld'

Vue.use(vueRouter)


export default new vueRouter({
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