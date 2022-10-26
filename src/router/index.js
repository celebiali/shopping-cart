import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView},
  { path: '/card', name: 'CardView', component: CardView},
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
