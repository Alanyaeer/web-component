import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/button',
      component: ()=> import('@/components/button-t.vue')
    },
    {
      path: '/radio',
      component: ()=> import('@/components/radio-t.vue')
    }
  ]
})

export default router
