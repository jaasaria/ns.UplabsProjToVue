import Vue from 'nativescript-vue'
import Home from './components/Home'
import Details from './components/Details'

Vue.config.silent = true 

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': './fonts/font-awesome.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);


new Vue({
  render: h => h('frame', [h(Home)])
}).$start()
