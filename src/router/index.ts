import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/PostList.vue')
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: () => import('@/components/PostForm.vue'),
      children: [
        { path: '/create-post/:id', name: 'update-post', component: () => import('@/components/PostForm.vue') },
      ]
    },
  ]
})

export default router
