$(".btn_mainMenu_toggle").on("click", function(){
	var bodyPosScroll = $(window).scrollTop();

	if(!$("body").hasClass("main_nav_open")){
		$("body").toggleClass("main_nav_open");
	} else {
		$("body").removeClass("main_nav_open")
	}
});