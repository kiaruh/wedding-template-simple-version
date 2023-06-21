var initialSlide = document.querySelector('.slides-container [data-order="1"]');
var initalSelected = document.querySelector('.slide-navigation__txt [data-order="1"]');
var mq_medium = window.matchMedia('(min-width: 860px)');
var mq_big = window.matchMedia('(min-width: 1200px)');

function activateSlide(order) {
  var unactiveSlide = document.querySelector('.slide.active');
  var activeSlide = document.querySelector('.slides-container [data-order="' + order + '"]');

  if (!activeSlide.classList.contains('active')) {
    slideIn(activeSlide);
    slideOut(unactiveSlide);
  }
}

function slideIn(slide) {
  var _this = slide;

  animationIn(slide);
  _this.classList.add('active');
  TweenMax.to(_this, 1, { autoAlpha: 1 }, '-=1');
}

function slideOut(slide) {
  var _this = slide;

  _this.style.zIndex = '2';
  _this.classList.remove('active');
  TweenMax.to(_this, 1, { autoAlpha: 0, onComplete: removeZ });

  function removeZ() {
    _this.style.zIndex = '1';
  }

  animationOut(slide);
}

function animationIn(slide) {
  var title = slide.querySelector('h1');
  var subtitle = slide.querySelector('h2');
  var text = slide.querySelector('p');
  var button = slide.querySelector('button');
  var image = slide.querySelector('img');

  TweenMax.fromTo(title, 0.6, { autoAlpha: 0, x: 100 }, { autoAlpha: 0.6, x: 0, ease: Power2.easeOut });
  TweenMax.fromTo(subtitle, 0.5, { autoAlpha: 0, x: -200 }, { autoAlpha: 1, x: 0, ease: Power2.easeOut }, '-0.1');
  TweenMax.fromTo(text, 0.8, { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, ease: Power2.easeOut });
  TweenMax.fromTo(button, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
  TweenMax.to(image, 0, { autoAlpha: 1, scale: 1 });
}

function animationOut(slide) {
  var title = slide.querySelector('h1');
  var subtitle = slide.querySelector('h2');
  var text = slide.querySelector('p');
  var button = slide.querySelector('button');
  var image = slide.querySelector('img');

  TweenMax.to(title, 0.6, { autoAlpha: 0, x: 0 });
  TweenMax.to(subtitle, 0.5, { autoAlpha: 0, x: 200 });
  TweenMax.to(text, 0.5, { autoAlpha: 0 });
  TweenMax.to(button, 0.5, { autoAlpha: 0 });
  TweenMax.to(image, 1, { scale: 1.1 });
}

var slideNavigationSpans = document.querySelectorAll('.slide-navigation__txt span');
slideNavigationSpans.forEach(function (span) {
  span.addEventListener('click', function () {
    var _this = this;
    var order = _this.getAttribute('data-order');
    var spans = document.querySelectorAll('.slide-navigation__txt span');
    var current = document.querySelector('.active').getAttribute('data-order');

    spans.forEach(function (span) {
      span.classList.remove('active');
    });
    _this.classList.add('active');
    activateSlide(order);
    staggerSquares(order, current);
  });
});

function staggerSquares(order, current) {
  var mq = 0.7;
  var moveY;
  var squares = document.querySelectorAll('.slide-navigation__squares .square');
  var staggerTime = -0.12;

  if (order < current) {
    staggerTime = staggerTime * -1;
  }

  if (mq_medium.matches) {
    mq = 1;
  }
  if (mq_big.matches) {
    mq = 1.3;
  }

  moveY = (order - 1) * (15 * mq);
  TweenMax.staggerTo(squares, 0.1, { y: moveY }, staggerTime);
}

document.addEventListener('DOMContentLoaded', function () {
  initialSlide.classList.add('active');
  initalSelected.classList.add('active');
  TweenMax.to(initialSlide, 0.5, { autoAlpha: 1 });
});