import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Carousel from '@/components/Carousel'
import Cards from '@/components/Cards'
import Requestinfo from '@/components/Requestinfo'

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
