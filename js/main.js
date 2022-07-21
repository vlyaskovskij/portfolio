$('.header').each(function () {
  let ths = $(this);
  ths.find('.tabs__content').not(':first').hide();
  ths.find('.header-link').click(function () {
    ths.find('.header-link').removeClass('active').eq($(this).index()).addClass('active');
    ths.find('.tabs__content').hide().eq($(this).index()).fadeIn(600)
  }).eq(0).addClass('active');
});