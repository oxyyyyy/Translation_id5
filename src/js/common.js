if(document.body.clientWidth > 600){
 $(function() {

	$(".calc-input-number").number({
		labels: {
			up: "",
			down: ""
		}
	});
	
	$(".calc-input-select").dropdown();

	$(".reviews-carousel").slick({
		// infinite: false,
		dots: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $(".reviews-carousel-arrows"),
		appendDots: $(".reviews-carousel-dots"),
		autoplay: true,
		autoplaySpeed: 10000,
		adaptiveHeight: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	
	// Response
	var windowWidth = $(window).width();

	$(window).on("resize", function(){
		$.fn.matchHeight._update();
	});

	if( $(window).width() >= "768" ) {
		$(".reviews-item").matchHeight()
	}

	$(".methods-item-content").matchHeight();

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
}
