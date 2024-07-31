import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturesPages.vue')
    },
    {
      path: '/precing',
      name: 'precing',
      component: () => import('@/modules/landing/pages/PrecingPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/landing/pages/ContactPage.vue')
    }
  ]
})

export default router
