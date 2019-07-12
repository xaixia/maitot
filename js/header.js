$(function () {
  $('.p-header .has-menu').hover(function () {
    $(this).find('.dropdown-menu').show();
  }).mouseleave(function () {
    $(this).find('.dropdown-menu').hide();
  });
});
