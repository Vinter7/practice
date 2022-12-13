import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useLogin } from '../stores/isLogin'
const { login } = useLogin(createPinia())

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

router.beforeEach((to, from) => {
  if (!login && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
