/*
 * @Descripttion: 
 * @version: 
 * @Author: taocy
 * @Date: 2022-02-23 15:20:18
 * @LastEditors: taocy
 * @LastEditTime: 2022-03-02 17:11:48
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'example'
    }, {
      path: '/example',
      component: resolve => require(['@/components/page/example/index.vue'], resolve),
    }, {
      path: '/HelloWorld',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve),
    }, {
      path: '/mergeTable',
      component: resolve => require(['@/components/page/mergeTable/index.vue'], resolve),
    }, {
      path: '/elTable',
      component: resolve => require(['@/components/page/elTable/index.vue'], resolve),
    }, {
      path: '/gojs',
      component: resolve => require(['@/components/page/gojs/index.vue'], resolve),
    }
  ]
})
