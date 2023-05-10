/*
 * @Descripttion: 
 * @version: 
 * @Author: taocy
 * @Date: 2022-02-23 15:20:18
 * @LastEditors: taocy
 * @LastEditTime: 2022-03-03 10:34:10
 */
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import jquery from "jquery";
Vue.prototype.$ = jquery;

import LCharts from '@vislab/LCharts'

Vue.use(LCharts)

import marquee from 'marquee-components'
Vue.use(marquee );

import ringDiagram from '@wide/stibizviscomps-ringdiagram'
Vue.use(ringDiagram)
import bizcharts from '@wide/stibizviscomps-bizcharts'
Vue.use(bizcharts)

import '@vislab/VUI/dist/css/vui.min.css'
import VUIAssets from '@vislab/VUI/assets'
import VUI from '@vislab/VUI'

Vue.use(VUI, { assets: VUIAssets })

import SeachTableList from '@wide/stiviscomponents-searchtablelist'
Vue.use(SeachTableList)
import bizVisScroll from '@wide/stibizviscomps-scroll'
Vue.use(bizVisScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})