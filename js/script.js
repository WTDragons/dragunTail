

$(document).scroll(function () {
  let y = $(this).scrollTop();
  if (y > 200) {
      $('.goTopBtn').fadeIn();
  } else {
      $('.goTopBtn').fadeOut();
  }
});
