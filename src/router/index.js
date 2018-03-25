import Vue from 'vue'
import Router from 'vue-router'
import SelectCard from '@/components/SelectCard'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelectCard',
      component: SelectCard
    }, {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
