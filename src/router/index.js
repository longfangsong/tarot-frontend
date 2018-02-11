import Vue from 'vue'
import Router from 'vue-router'
import SelectCard from '@/components/SelectCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelectCard',
      component: SelectCard
    }
  ]
})
