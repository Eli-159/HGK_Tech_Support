import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import GStore from '@/store'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ReviewsView from '../views/ReviewsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

NProgress.configure({
  showSpinner: false,
  trickle: true,
  trickleSpeed: 200
});

router.beforeEach(() => {
  GStore.hamburgerOpen = false;
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router
