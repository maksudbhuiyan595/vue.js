import { createRouter, createWebHistory } from "vue-router";
import Add from '../components/student/Add.vue'
import Edit from '../components/student/Edit.vue'
import List from '../components/student/List.vue'
import View from '../components/student/View.vue'
import notFound from '../views/notFound.vue'

const routes=[
    {
        path: '/',
        name: 'list',
        component: List
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    },
    {
        path: '/view',
        name: 'view',
        component: View
    },
    {
        path: '/edit',
        name: 'edit',
        component: Edit
    },
]

const router= createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})

export default router