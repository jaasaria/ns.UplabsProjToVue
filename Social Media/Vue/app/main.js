import Vue from 'nativescript-vue'
import Home from './components/Home'
import Drawer from './components/Drawer'

Vue.config.silent = true 

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': './fonts/font-awesome.css',
  'ion': './fonts/ionicons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)


new Vue({
	render: h => h('frame', [h(Home)])
	// render: h => h(Home),
	// render: h => h(Drawer),
}).$start()
