import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Carousel from '@/components/Carousel'
import Cards from '@/components/Cards'
import Requestinfo from '@/components/Requestinfo'
import store from "../store"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/carousel',
            name: 'Carousel',
            component: Carousel
        },
        {
            path: '/cards',
            name: 'Cards',
            component: Cards
        },
        {
            path: '/requestinfo',
            name: 'Requestinfo',
            component: Requestinfo
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.path == '/login' || to.path == '/register') {
//       next()
//     } else if (to.matched.length == 0) {
//       next("/")
//     } else if (!store.state.user.email) {
//       next(false)
//     } else {
//       next()
//     }
//   })