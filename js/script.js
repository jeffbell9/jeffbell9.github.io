$("#contact").click(function() {
	$("#contactInfo").fadeIn("slow");
	window.location.href = '#aboutContactInfo';
});

$("#aboutContact").click(function() {
	$("#aboutContactInfo").fadeIn("slow");
	window.location.href = '#aboutContactInfo';
});

$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  fade: true,
	  arrows: false,
	  dots: true,
	  pauseOnFocus: false,
	  pauseOnHover: false
});