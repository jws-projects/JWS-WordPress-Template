import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default function() {
  const controller = new ScrollMagic.Controller();

  const testAnimation = new TimelineMax();
  testAnimation
    .set('.test-02 h1', { autoAlpha: 0, y: 50 })
    .to('.test-02 h1', 1, { autoAlpha: 1, y: 0, ease: Power2.easeIn });

  const testScene = new ScrollMagic.Scene({
    triggerElement: '.test-02'
  })
    .setTween(testAnimation)
    .addIndicators()
    .addTo(controller);
}
