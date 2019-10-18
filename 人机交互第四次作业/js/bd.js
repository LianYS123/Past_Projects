$(function(){
	$(".moreDiv").hover(function(){
		$(".more li:not(:first-child)").show();
		$(".moreDiv").addClass("toggleColor");
		$(".more li:first-child").css("background-color","whitesmoke");
		$(".more li:first-child>a").css("color","black");
		var h=parseInt($(document).height())-15;
		console.log(h);
		$(this).height(h);
	},function(){
		$(".more li:not(:first-child)").hide();
		$(".moreDiv").removeClass("toggleColor");
		$(".more li:first-child").css("background-color","blue");
		$(".more li:first-child>a").css("color","white");
		$(this).height(25);
	});
	$(".SJContent ul.SJNav>li").click(function(){
		$(".SJContent ul.SJNav>li").removeClass("SJNav_Select");
		$(this).addClass("SJNav_Select");
	});
})