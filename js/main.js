import animation from './modules/animation';
import modal from './modules/modal';
import slider from './modules/slider';

$(function() {
  console.log('jws');
  animation();
  slider('.swiper-container');
  modal('.inline');
});
