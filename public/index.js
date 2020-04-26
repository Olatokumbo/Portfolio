// var hidWidth;
// var scrollBarWidths = 40;

// var widthOfList = function(){
//   var itemsWidth = 0;
//   $('.item').each(function(){
//     var itemWidth = $(this).outerWidth();
//     itemsWidth+=itemWidth;
//   });
//   //alert(itemsWidth);
//   return itemsWidth;
// };

// var widthOfHidden = function(){
//   return (($('.wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
// };

// var getLeftPosi = function(){
//   //return $('.item:first-child').position().left;
//   return $('.list').position().left;
// };

// var reAdjust = function(){
//   if (($('.wrapper').outerWidth()) < widthOfList()) {
//     $('.scroller-right').show();
//   }
//   else {
//     $('.scroller-right').hide();
//    	/*
//     var leftPos = $('.item:first-child').position().left;
// 	$('.item').animate({left:"-="+leftPos+"px"},'slow');
//     */
//   }
  
//   if (getLeftPosi()<0) {
//     $('.scroller-left').show();
//   }
//   else {
//     $('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
//   	$('.scroller-left').hide();
//   }
// }

// reAdjust();

// $(window).on('resize',function(e){  
//   	reAdjust();
// });

// $('.scroller-right').click(function() {
  
//   $('.scroller-left').fadeIn('slow');
//   $('.scroller-right').fadeOut('slow');
  
//   $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){
//   	//reAdjust();
//   });  	
// });

// $('.scroller-left').click(function() {
//   	//var leftPos = $('.item:first-child').position().left;
// 	//$('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
//   	//$('.scroller-left').hide();
  
// 	$('.scroller-right').fadeIn('slow');
// 	$('.scroller-left').fadeOut('slow');
  
//   	$('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){
  	
//   	});
	
// });
// $(function(){
// $(window).scroll(function () {
//   var header = $(".navbarMain");
//   var y = $(this).scrollTop();
//   var z = $('#aboutMain').offset().top -50;

//   if (y >= z) {
//       header.removeClass('navbarMain').addClass('navbarMain-alt');
//   }
//   else{
//       header.removeClass("navbarMain=alt").addClass('navbarMain');
//   }
// });
// });

$(function() {
  var header = $(".navbarMain");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      var z = $('#aboutMain').offset().top -50;

      if (scroll >= z) {
          header.removeClass('navbarMain').addClass("navbarMain-alt");
      } else {
          header.removeClass("navbarMain-alt").addClass('navbarMain');
      }
  });
});

// Smooth Scrolling
$('.navbarMain li a, navbarMain .logo a img').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    console.log("Header button was clicked");
    const hash = this.hash;
console.log(hash);
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 50
      },
      800
    );
  }
});

