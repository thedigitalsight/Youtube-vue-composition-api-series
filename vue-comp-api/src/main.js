import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/tag-input-1', component: () => import('@/TagInput1.vue') },
  { path: '/tag-input-2', component: () => import('@/TagInput2.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App)

app.use(router)

app.mount('#app')
