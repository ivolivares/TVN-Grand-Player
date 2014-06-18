var activaBigPlayer = function()
{
	$("#gridHeader").css("position", "relative");

	var button = '<a href="#activarBigPlayer" id="activarBigPlayer" title="Activar Big Player" style="background:#d61814;color:#FFF;border-radius: 2px; height: 20px; width: 119px;position: absolute;top: 40%;right: 12.5%;padding: 4px 10px 3px 10px;font-size: 0.8em;text-decoration: none;">Activar BIG Player</a>';
	$("#gridHeader").append(button);

	$("#activarBigPlayer").on("click", bigPlayer);
};

var bigPlayer = function(e)
{
	e.preventDefault();

	$("#gridOuter, #gridHeader, #gridFooter, #gridMain, #gridBottom").hide();
	$("#gridAreas").css({
		"width": "100%",
		overflow: "hidden",
		height: "650px"
	});
	$("#gridTop, .video_bolsa, .carousel").css("width", "100%");
	
	$(".video_player, #player").css({
	    width: '900px',
	    height: '500px'
	});
	
	$(".videobox a img").css("margin", "16% 0px 0px 0px");
	$(".scrollable2").css("width", "95%");

	var button = '<a href="#volverNormal" id="volverNormal" class="tooltip" title="Mostrar reproductor normal" style="background:#d61814;color:#FFF;border-radius:20px; height: 10px; width: 10px;position:fixed;top: 2%;right: 1%;padding: 0px 8px 14px 6px;font-size: 1.2em;text-decoration: none;">&times;</a>';
	$("body").append(button);

	$("#volverNormal").on("click", function(e)
	{
		e.preventDefault();

		$(this).remove();
		$("#gridOuter, #gridHeader, #gridFooter, #gridMain, #gridBottom").show();
		$("#gridAreas, #gridTop, .video_bolsa, .carousel, .videobox a img, .scrollable2").removeAttr('style');
		$(".video_player, #player").attr('style', 'background: #999;');
		$("#player").attr('style', 'display: block;width: 640px;height: 360px;');
	});
};

$(document).ready(activaBigPlayer);