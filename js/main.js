
$(function() {
  $('.slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    customPaging: function(slider, i) {
      var thumbnail = $(slider.$slides[i]).data('thumbnail');
      return '<a href="javascript:void(0)"><img src="' + thumbnail + '"></a>';
    },
    responsive: [{
      breakpoint: 1152,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 900,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }]
  });
});

$('.prev').click(function() {
  $('.slider').slickPrev();
})
$('.next').click(function() {
  $('.slider').slickNext();
})




