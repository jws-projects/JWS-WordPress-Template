import modaal from 'modaal';
export default function(selector) {
  const options = {
    animation_speed: 300,
    background: '#000',
    overlay_opacity: '0.8',
    before_open: () => {
      console.log('Before open');
    },
    after_close: () => {
      console.log('after clone');
    }
  };
  $(selector).modaal(options);
}
