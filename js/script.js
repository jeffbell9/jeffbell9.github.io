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

function getImage(url) {
	return new Promise((resolve, reject) => {
		var img = new Image();

		img.onload = () => {
			resolve();
		}

		img.onerror = () => {
			reject();
		}

		img.src = url;
	})
}

getImage('img/Dogstar Client Info.png').then(() => {
	$('.autoplay').css('visibility', 'visible');
})