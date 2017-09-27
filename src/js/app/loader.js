var loadingPage = $(".fullLoader"),
		loader = loadingPage.find(".preloader");

loader.hide();
$(document).ready(function(){
	loader.show();
});

$(window).on("load", function(){
	$(".fullLoader").fadeTo("slow", 0, function() {
		$(this).hide();
  });
});