(function(){
	var Game = window.Game = Class.extend({
		init:function(){
			this.canvas = document.getElementById("mycanvas");
			this.cxt = this.canvas.getContext("2d");
			this.RtextUrl="../files/imgs.json";
			this.imgsObj = {
				"bg_day":"/canvas/myGameTest/imgs/flappybird/bg_day.png",
				"bg_night":"/canvas/myGameTest/imgs/flappybird/bg_night.png",
			};
			this.R = {};
			this.start();
		},
		/*loadResouce:function(){
			var self = this;
			var count = 0;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				console.log(1);
			}
			xhr.open("get",this.RtextUrl,true);
			xhr.send(null);
		},*/
		start:function(){
			var self = this;
			var count = 0;
			var R = this.R;
			for(var k in self.imgsObj){
				R[k] = new Image();
				R[k].src = self.imgsObj[k];
				R[k].onload = function(){
					count++;
					if(count === Object.keys(self.imgsObj).length){
						//全部加载完成；
						setInterval(function(){
							self.cxt.clearRect(0,0,500,700);
							self.cxt.fillRect(100,100,200,200);
							
						},40);
					}
				}
			}
			
		}
	})
})();
