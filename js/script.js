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

// // smooth moving, not that good anyway
// $(document).ready(function(){
//   $("a.smooth").click(function(event){
//       event.preventDefault();
//       var id = $(this).attr("href");
//       $('html, body').animate({
//           scrollTop: $(id).offset().top
//       }, 800);
//   });
// });



// copy text


function copyText() {
  var textToCopy = '暱稱\n委託類型\n交件期限\n付款方式\n預算\n委託資料\n委託內容\n作品權利\n用途\n規格\n特殊要求\n';
  navigator.clipboard.writeText(textToCopy).then(function() {
    alert("Text copied to clipboard!");
    ;
  }, function(err) {
      console.error("無法複製文本：", err);
  });
}



// $('.image-container img').click(function() {
//   $(this).toggleClass('active');
// });




$(document).scroll(function () {
  let y = $(this).scrollTop();
  if (y > 200) {
      $('.goTopBtn').fadeIn();
  } else {
      $('.goTopBtn').fadeOut();
  }
});
