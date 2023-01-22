// zoom
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
          
// modal
$(document).ready(function(){
  $('img').on('click', function(){
    var img = $(this).data('img');
    $('#modal-img').attr('src', img);
  });
});

// go top
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




// local nav
document.querySelectorAll('.local_nav .square').forEach(square => {
  square.addEventListener('click', event => {
    event.preventDefault();
    const link = event.target.closest('a');
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
}); 

// smooth moving, not that good anyway
$(document).ready(function(){
  $("a.smooth").click(function(event){
      event.preventDefault();
      var id = $(this).attr("href");
      $('html, body').animate({
          scrollTop: $(id).offset().top
      }, 800);
  });
});



// copy text
const copyBtn = document.getElementById('copy-btn');
const textToCopy = document.getElementById('text-to-copy');

copyBtn.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().addRange(range);
    try {
        document.execCommand("copy");
    } catch (err) {
        console.log("Oops, unable to copy");
    }
    window.getSelection().removeAllRanges();
    alert("Text copied to clipboard!");
});


// $('.image-container img').click(function() {
//   $(this).toggleClass('active');
// });
