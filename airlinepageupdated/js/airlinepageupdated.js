$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.pnrBlock').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});

$(document).ready(function(){
	$('.infoTabContents').hide();
	$('.infoTab').click(function(){
		var target = $(this.rel);
		$('.infoTabContents').not(target).hide();
		target.toggle();
		$('.informationToggle > .infoDetailTabs > li.active')
			.removeClass('active');

		$(this).parent().addClass('active');

		$('.informationToggle > .informationContents > div.infoTabContents_active')
			.removeClass('.infoTabContents_active');
	});
});

$(document).ready(function(){

	$('ul.routeTab li').click(function(){
		var route_id = $(this).attr('data-tab');

		$('ul.routeTab li').removeClass('current fa fa-caret-down fa-2x dropdown current');
		$('.routeTabContent').removeClass('current fa fa-caret-down fa-2x dropdown current');
 
		$(this).addClass('current');
		$('#'+route_id).addClass('current');
	});
});


$(document).ready(function(){
    $(".infoTab_1").click(function(){
        $(".infoTab_1").toggleClass("toggle_active");
        $(".infoTab_2").removeClass("toggle_active");
    });
});

$(document).ready(function(){
    $(".infoTab_2").click(function(){
        $(".infoTab_2").toggleClass("toggle_active");
        $(".infoTab_1").removeClass("toggle_active");
    });
});



$(document).ready(function(){
    $(".tabLink_1").click(function(){
        $(".tabLink_1").toggleClass("toggle_active");
        $(".tabLink_2").removeClass("toggle_active");
    });
});

$(document).ready(function(){
    $(".tabLink_2").click(function(){
        $(".tabLink_2").toggleClass("toggle_active");
        $(".tabLink_1").removeClass("toggle_active");
    });
});