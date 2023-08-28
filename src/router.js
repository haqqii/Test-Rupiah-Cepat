import { createRouter, createWebHistory } from 'vue-router';
import Slider from './components/Slider';
import Question from './Components/Question';
import Index from './views/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Question,
  },
  {
    path: '/vuejs',
    name: 'VueJs',
    component: Slider,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
