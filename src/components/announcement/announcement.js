import $ from 'jquery';

$('.announcement__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  asNavFor: '.announcement__slider-preview',
  draggable: false
});

$('.announcement__slider-preview').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  asNavFor: '.announcement__slider',
  focusOnSelect: true,
  draggable: false
});
