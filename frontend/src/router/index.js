import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forecast from '../views/Forecast.vue'
import Info from '../views/Info.vue'
import login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Forecast',
    name: 'Forecast',
    component: Forecast
  },
  {
    path: '/Info',
    name: 'Info',
    component: Info
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
