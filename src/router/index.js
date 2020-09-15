import Vue from 'vue'
import VueRouter from 'vue-router'

// hoem
import Home from '@/views/Home';

// details
import Details from "@/views/Details";

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        name: "home",
        component: Home
    },

    {
        path: "/details/:id",
        name: "details",
        component: Details
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
