$(function () {

	/*----- scroll ------*/

	var	menuLinks = $('.menu').find('a');

	menuLinks.on('click', function(event){
		event.preventDefault();
		var id = this.hash;
		$('html, body').animate({scrollTop: $(id).offset().top}, 600, function(){
			window.location.hash = id;
		});
	});


	/*----- lightbox -----*/

	var gallery = $(".post");
	var overlay = $("<div>", { id:"overlay" });

		overlay.appendTo("body").hide();

	gallery.find("a").on("click", function(event){

		var href = $(this).attr("href");
		var image = $("<img>", { src = href });

		event.preventDefault();
		overlay.html(href).show();
	});

	overlay.on("click", function(event){
		overlay.html(image).hide();
	});

	$(document).on("keyup", function(event){
		if (event === 27)overlay.hide();
	});

});


