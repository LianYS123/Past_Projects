$(function(){
	var outer=$(".RotationChart .rcContent");//注意：这个用以增加滚动的盒子是做大盒子外面的那个盒子
	var imgDiv=$(".RotationChart .rcContent ul div.imgDiv").get(0);
	var timer=setInterval(scroll,1);
	var timeo1=null;
	var timeo2=null;
	/*var timeo=null;
	var timeo2=null;*/
	
	$(".RotationChart div.navDot ul>li").click(function(){
		clearInterval(timer);//点击后清除计时器
		clearTimeout(timeo2);//防止存在正在等待中的计时器
		clearTimeout(timeo1);
		//点击后导航点事件
		var i=$(".RotationChart div.navDot ul>li").index(this);
		$(".RotationChart div.navDot ul>li").removeClass("navDotSelected");
		$(this).addClass("navDotSelected");
		//点击后重新定义图片位置
		outer.scrollLeft(i*imgDiv.offsetWidth);
		
		timeo1=setTimeout(function(){
			timer=setInterval(scroll,1);//等待两秒重启计时器
		},1000);
		
	});
	
	function scroll(){
		outer.scrollLeft(outer.scrollLeft()+2);
//					console.log(outer.scrollLeft()%imgDiv.offsetWidth);
		if(outer.scrollLeft()%imgDiv.offsetWidth==0){
//						console.log(outer.scrollLeft()/imgDiv.offsetWidth);
			//导航点同步
			var index=outer.scrollLeft()/imgDiv.offsetWidth;
			$(".RotationChart div.navDot ul>li").removeClass("navDotSelected");
			$(".RotationChart div.navDot ul>li").eq((index+5)%5).addClass("navDotSelected");
			
			//滚动间停
			clearInterval(timer);
			timeo2=setTimeout(function(){
				timer=setInterval(scroll,1);
			},1000);
		}
		if(outer.scrollLeft()>imgDiv.offsetWidth*5){
			outer.scrollLeft(0);
		}
	}
});