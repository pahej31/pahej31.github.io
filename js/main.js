// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
	// $('header').css('filter', 'blur(5px)');
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	$('header').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('header').css('filter', 'none');
	}
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('header').css('filter', 'none');
	}
});


// // открыть по таймеру 
// $(window).on('load', function () { 
// 	setTimeout(function(){
// 		if($('.js-overlay-campaign').hasClass('disabled')) {
// 			return false;
// 		} else {
			
// 			$(".js-overlay-campaign").fadeIn();
// 		}
// 	}, 5000);
// });


// // Отправка на e-mail // //

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, мы свяжемся с Вами в ближайшее время!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function() {

$('.servises').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 1000,
});

$('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: true,
   focusOnSelect: true,
    loop: true,
    margin:10,
    autoplay:true,
    autoplayTimeout:500,
    autoplayHoverPause:true
 });

});

$(document).ready(function(){
	pageOperation.inIt();
});

var pageOperation = {
	inIt: function(){
		//inIt will call all the page functions
		$(".galleryphoto").on("click", pageOperation.openPopup);
		$(".popup").on("click", pageOperation.closePopup);
	  $(".previous").on("click", pageOperation.previousImage);
    $(".next").on("click", pageOperation.nextImage);
  },
	openPopup: function(){
		$(".popup").fadeIn("slow");
		var imageSrc = $(this).attr("src");
		$("#popupImage").attr("src",imageSrc);
	},
  
	closePopup: function(event){
		var tagName = event.target.tagName;
		if (tagName.toLowerCase()!== "img" && tagName.toLowerCase()!== "figure" && tagName.toLowerCase()!== "span") {
			$(".popup").fadeOut("slow");
		}
	},
  previousImage: function(){
    var currentImageSrc = $("#popupImage").attr("src");
    // find the img in the list that has this src
    var list = $(".gallery li img");
    for(var i = 0, len = list.length; i < len; i++){
      if(list[i].src == currentImageSrc){
        var previous = list[i-1].src;
        $("#popupImage").attr("src", previous);
      }
    }
  },
   nextImage: function(){
    var currentImageSrc = $("#popupImage").attr("src");
    // find the img in the list that has this src
    var list = $(".gallery li img");
    for(var i = 0, len = list.length; i < len; i++){
      if(list[i].src == currentImageSrc){
     // get the src of the img previous to that
        var previous = list[i+1].src;
     // replace img src w/previous img's src
        $("#popupImage").attr("src", previous);
        }
     };  
   }  
}u7y