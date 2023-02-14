var container = document.getElementById('animation');
var anim = lottie.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/lotties/dog.json' ,
});