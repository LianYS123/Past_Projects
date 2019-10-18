(function(){
	var Game = window.Game = Class.extend({
		init:function(){
			this.canvas = document.getElementById("mycanvas");
			this.cxt = this.canvas.getContext("2d");
			this.RtextUrl="../files/imgs.json";
			this.imgsObj = {
				"bg_day":"imgs/flappybird/bg_day.png",
				"bg_night":"imgs/flappybird/bg_night.png",
				"land":"imgs/flappybird/land.png",
				"pipe_up":"imgs/flappybird/pipe_up.png",
				"pipe_down":"imgs/flappybird/pipe_down.png",
				
				"bird0_0":"imgs/flappybird/bird0_0.png",
				"bird0_1":"imgs/flappybird/bird0_1.png",
				"bird0_2":"imgs/flappybird/bird0_2.png",
				
				"bird1_0":"imgs/flappybird/bird1_0.png",
				"bird1_1":"imgs/flappybird/bird1_1.png",
				"bird1_2":"imgs/flappybird/bird1_2.png",
				
				"bird2_0":"imgs/flappybird/bird2_0.png",
				"bird2_1":"imgs/flappybird/bird2_1.png",
				"bird2_2":"imgs/flappybird/bird2_2.png",
				
				"text_game_over":"imgs/flappybird/text_game_over.png",
				"button_resume":"imgs/flappybird/button_resume.png",
				"button_play":"imgs/flappybird/button_play.png",
				
				"font_0":"imgs/flappybird/font_0.png",
				"font_1":"imgs/flappybird/font_1.png",
				"font_2":"imgs/flappybird/font_2.png",
				"font_3":"imgs/flappybird/font_3.png",
				"font_4":"imgs/flappybird/font_4.png",
				"font_5":"imgs/flappybird/font_5.png",
				"font_6":"imgs/flappybird/font_6.png",
				"font_7":"imgs/flappybird/font_7.png",
				"font_8":"imgs/flappybird/font_8.png",
				"font_9":"imgs/flappybird/font_9.png"
				
			};
			this.actorArr = [];
			this.pipeArr = [];
			this.R = {};
			this.fno = 0;
			this.f = 0;
			this.timer = null;
			this.gameState = false;
			this.score = 0;
//			this.scene = new SceneManager();
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
			var cxt = this.cxt;
			for(var k in self.imgsObj){
				R[k] = new Image();
				R[k].src = self.imgsObj[k];
				R[k].onload = function(){
					count++;
					if(count === Object.keys(self.imgsObj).length){
						//全部加载完成；
						self.timer = setInterval(function(){
							self.fno++;
							self.f++;
							cxt.clearRect(0,0,300,500)
							
							scene.update();
							scene.render();

							cxt.font="13px 微软雅黑"
							cxt.fillText("FNO : " + self.fno,10,20);
						},40);							

					}
				}
			}
			
		},
		over:function(){
			console.log("游戏结束！");
			clearInterval(this.timer);
		}
	})
})();
