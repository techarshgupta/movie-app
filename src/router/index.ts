import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/appLayout.vue'
import Home from '@/views/HomeView.vue';
import FavouriteView from '@/views/FavouriteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: 'favourite',
          name: 'FavouriteView',
          component: FavouriteView,
        }
      ],
    },
  ]
})

export default router
