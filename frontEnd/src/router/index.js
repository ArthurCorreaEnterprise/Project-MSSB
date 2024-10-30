import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/to-schedule',
      name: 'to-schedule',
      component: () => import('../views/ToScheduleView.vue'),
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/LocationView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
  ],
})

export default router
