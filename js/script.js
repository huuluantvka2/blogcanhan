$(document).ready(function () {
  $('.button-backtoTop').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1400);
  });
  var positionFooter = $('.page-footer').offset().top - 500;
  positionFooter += 'px';
  document.getElementById('pso-relative').style.height = positionFooter;
});
