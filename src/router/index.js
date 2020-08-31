import Vue from 'vue'
import VueRouter from 'vue-router'

import Raiz from '@/pages/Raiz'

Vue.use(VueRouter);

const routes = [
    {
        name: 'raiz',
        path: '/',
        component: Raiz,
    }
]

const router = new VueRouter({routes})

export default router