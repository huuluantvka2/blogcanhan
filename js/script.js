$(document).ready(function () {
  $('.button-backtoTop').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1400);
  });
});
