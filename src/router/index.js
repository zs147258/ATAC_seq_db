import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import search from '../views/search.vue'
import Layout from '../layout/Layout.vue'
import stastics from '../views/stastics.vue'
import detail from '../views/detail.vue'




const routes = [

  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/stastics',
        name: 'stastics',
        component: stastics
      },
      {
        path: '/search',
        name: 'search',
        component: search,
        
      },
      {
        path: '/detail',
            name: 'detail',
            component: detail,
            redirect: "/Total",
            children: [
              {
                path: '/Total',
                name: 'Total',
                component: () => import("@/views/detail/Total.vue"),
              },
              {
                path: '/Diff_peak',
                name: 'Diff_peak',
                component: () => import("@/views/detail/Diff_peak.vue"),
              },
              {
                path: '/Diff_enrichment',
                name: 'Diff_enrichment',
                component: () => import("@/views/detail/Diff_enrichment.vue"),
              },
              {
                path: '/Diff_motif',
                name: 'Diff_motif',
                component: () => import("@/views/detail/Diff_motif.vue"),
              },
              {
                path: '/Diff_footprint',
                name: 'Diff_footprint',
                component: () => import("@/views/detail/Diff_footprint.vue"),
              },
              {
                path: '/Ctrl',
                name: 'Ctrl',
                component: () => import("@/views/detail/Ctrl.vue"),
              },
              {
                path: '/Treat',
                name: 'Treat',
                component: () => import("@/views/detail/Treat.vue"),
              },
            ]
      },
      {
        path: '/help',
        name: 'help',
        component: () => import("@/views/help"),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import("@/views/about"),
      },
      
    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
