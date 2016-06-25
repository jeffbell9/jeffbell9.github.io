$("#contact").click(function() {
	$("#contactInfo").fadeIn("slow");
});

$("#aboutContact").click(function() {
	$("#aboutContactInfo").fadeIn("slow");
});

$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 7000,
	  fade: true,
	  arrows: false,
	  dots: true,
});