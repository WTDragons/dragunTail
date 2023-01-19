var zoom = 1;
            function zoomIn() {
              zoom += 1;
              document.getElementById("myImg").style.transform = "scale(" + zoom + ")";
            }
            function zoomOut() {
              if (zoom > 1) {
                zoom -= 1;
                document.getElementById("myImg").style.transform = "scale(" + zoom + ")";
                return false;
              } 
            }
            
$(document).ready(function(){
  $('img').on('click', function(){
    var img = $(this).data('img');
    $('#modal-img').attr('src', img);
  });
});


$(document).ready(function(){
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('#go-top-btn').fadeIn();
      } else {
          $('#go-top-btn').fadeOut();
      }
  });
  
  $('#go-top-btn').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });
});

//Filter function
$('.filter-btns button').click(function(){
    //Remove active class from all buttons
    $('.filter-btns button').removeClass('active');
    //Add active class to clicked button
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $('.card').show();
    $('.card').not('[data-category="'+filterValue+'"]').hide();
    if(filterValue=='all'){
        $('.card').show();
    }
});

