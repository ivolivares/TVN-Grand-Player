var detectaLugar = function()
{
	if(window.location.href.indexOf("player/envivo") != -1)
	{
		activaBigPlayer("envivo");
	}
	else if(window.location.href.indexOf("player/play") != -1)
	{
		activaBigPlayer("novivo");
	}
};
var activaBigPlayer = function(tipo)
{
	$("#gridHeader").css("position", "relative");

	var button = '<a href="#activarBigPlayer" id="activarBigPlayer" title="Activar Grand Player" style="background:#d61814;color:#FFF;border-radius: 2px; height: 20px; width: 130px;position: absolute;top: 40%;right: 12.5%;padding: 4px 10px 3px 10px;font-size: 0.8em;text-decoration: none;">Activar Grand Player</a>';
	$("#gridHeader").append(button);

	if(tipo == "envivo") $("#activarBigPlayer").on("click", bigPlayerEnVivo);
	if(tipo == "novivo") $("#activarBigPlayer").on("click", bigPlayer);
};
var bigPlayerEnVivo = function(e)
{
	e.preventDefault();

	$("#gridOuter, #gridHeader, #gridFooter, #gridTop, .x480x480, #gridBottom, .video_ppal #Pub_Derecha_1, .plataformas").hide();

	$("#gridAreas, .video_ppal, .x976_config #gridMain").css(
	{
		width: "100%",
		overflow: "hidden",
		height: "650px"
	});

	$("#gridMain, #gridContent").css(
	{
		"background-color": "rgba(0,0,0,1)",
		"background-image": "none",
		"border-radius": "0px"
	});

	$(".progr_video").css(
	{
		width: "100%",
		height: "93%",
		margin: "0px",
		padding: "10px 0px 30px 0px",
		"background-color": "rgba(0,0,0,1)",
		"border-radius": "0px"
	});

	$(".video_player, #player").css(
	{
	    width: '86%',
	    height: '600px',
	    margin: "0px auto"
	});

	$("#gridContent > div").each(function()
	{
		if(!$(this).hasClass("x976_config")) $(this).hide();
	});

	$(".box5_1_txt h2").css("margin", "2px 0px 0px 0px");
	$(".box5_1_txt").css("width", "62%");
	$(".clase1").css("margin-left", "7%");

	$("body").css("overflow", "hidden");

	var button = '<a href="#volverNormal" id="volverNormal" class="clase1" title="Mostrar reproductor normal" style="text-decoration: none;">Ver Normal</a>';
	$(".box5_1_txt" ).after(button);

	$("#volverNormal").on("click", function(e)
	{
		e.preventDefault();

		$(this).remove();
		$("#gridOuter, #gridHeader, #gridFooter, #gridTop, .x480x480, #gridBottom, .video_ppal #Pub_Derecha_1, .plataformas").show();
		
		$("body").css("overflow", "auto");
		
		$("#gridAreas, .video_ppal, .x976_config #gridMain, #gridMain, #gridContent, .progr_video, .video_player, .box5_1_txt h2, .box5_1_txt, .clase1").removeAttr("style");

		$("#gridContent > div").each(function()
		{
			if(!$(this).hasClass("x976_config")) $(this).show();
		});
		
		$("#player").attr('style', 'display: block;width: 640px;height: 360px;');
	});

};
var bigPlayer = function(e)
{
	e.preventDefault();

	$("#gridOuter, #gridHeader, #gridFooter, #gridMain, #gridBottom").hide();
	$("#gridAreas, .video_ppal").css(
	{
		width: "100%",
		overflow: "hidden",
		height: "650px"
	});
	$("#gridTop, .video_bolsa, .carousel").css("width", "100%");
	
	$(".video_player, #player").css(
	{
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

$(document).ready(detectaLugar);

window.onbeforeunload = function (e) {
  var message = "¿Está seguro que desea cerrar? Podría perder la reproducción en curso.", e = e || window.event;
  // For IE and Firefox
  if (e)
  {
    e.returnValue = message;
  }

  // For Safari
  return message;
};