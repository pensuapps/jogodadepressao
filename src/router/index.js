import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Início"
    },
    component: HomeView
  },
  {
    path: '/jogar',
    name: 'jogar',
    meta: {
      title: "Jogar"
    },
    component: () => import(/* webpackChunkName: "Jogar" */ '../views/GameView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    meta: {
      title: "sobre"
    },
    component: () => import(/* webpackChunkName: "Sobre" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
