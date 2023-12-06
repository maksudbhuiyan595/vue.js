
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes=[
    {
        path: '/',
        name: 'home',
        componet: Home
    },
    {
        path: '/about',
        name: 'about',
        componet: About
    },
    {
        path: '/contact',
        name: 'contact',
        componet: Contact
    },

]

const router= createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})
export default router