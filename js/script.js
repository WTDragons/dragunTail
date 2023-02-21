//go top scroll
$(document).ready(function(){
  $('#go-top-btn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

//go top fade in and out
$(document).scroll(function () {
  let y = $(this).scrollTop();
  if (y > 200) {
    $('.goTopBtn').fadeIn();
  } else {
    $('.goTopBtn').fadeOut();
  }
});

//Filter function
$('.filter-btns button').click(function(){
  //Remove active class from all buttons
  $('.filter-btns button').removeClass('active');
  //Add active class to clicked button
  $(this).addClass('active');
  var filterValue = $(this).attr('data-filter');
  $('.filter-object').show();
  $('.filter-object').not('[data-category="'+filterValue+'"]').hide();
  if(filterValue=='all'){
    $('.filter-object').show();
  }
});
 
// copy text
function copyText(){
  var textToCopy = '暱稱\n委託類型\n截稿期限\n付款方式\n預算\n雙方授權範圍\n用途\n規格\n委託內容\n委託資料\n其他需求\n';
  navigator.clipboard.writeText(textToCopy).then(function() {alert("成功複製了喔！好耶\n其實我覺得跳這個視窗出來滿煩的，要是您也覺得的話可以跟我說一下");
  ;
  }, function(err) {
      console.error("複製失敗嗚嗚嗚", err);
  });
}

//share on sosical media
function sharePageFB() {
  var currentUrl = window.location.href;
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + currentUrl);
}

function sharePageTwitter() {
  var currentUrl = window.location.href;
  window.open("https://twitter.com/share?url=" + currentUrl);
}

// $('.xxxxxxxxxx').click(function() {
//   $(this).toggleClass('active');
// });


// var zoom = 1;
//   function zoomIn() {
//     zoom += 1;
//     document.getElementById("myImg").style.transform = "scale(" + zoom + ")";
//   }
//   function zoomOut() {
//     if (zoom > 1) {
//       zoom -= 1;
//       document.getElementById("myImg").style.transform = "scale(" + zoom + ")";
//       return false;
//     } 
//   }

// $(document).ready(function(){
//   $('img').on('click', function(){
//     var img = $(this).data('img');
//     $('#modal-img').attr('src', img);
//   });
// });