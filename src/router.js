import { createRouter, createMemoryHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'
import SettingsPage from '@/components/SettingsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
