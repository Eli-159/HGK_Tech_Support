import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import GStore from '@/store'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView,
    meta: {
      title: 'Reviews'
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: NotFoundView,
    meta: {
      title: '404'
    }
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

router.beforeEach((to) => {
  GStore.hamburgerOpen = false;
  NProgress.start();
  document.title = `${to.meta.title ? `${to.meta.title} | ` : ''}Hire a Grandkid Tech Support`
});

router.afterEach(() => {
  NProgress.done();
});

export default router
