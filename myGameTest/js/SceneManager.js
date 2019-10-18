(function(){

	var SceneManager = window.SceneManager = Class.extend({
		init:function(){
			this.sceneNum = 1;
			this.bindEvent();
			
			this.pipeInterspace = 120;
			this.pipeSpeed = 3;
			this.pipeCreatSpeed = 70;
		},
		render:function(){
			switch(this.sceneNum){
				case 1:
					if(game.fno % this.pipeCreatSpeed == 0){
						console.log(this.pipeCreatSpeed);
						if(this.pipeSpeed < 6) this.pipeSpeed += 0.1;
						if(this.pipeCreatSpeed > 50) this.pipeCreatSpeed -= 1;
						if(this.pipeInterspace > 80) this.pipeInterspace -= 1;
						new Pipe();//生成一根管子
					} 
					
					//渲染场景
					for(var i = 0; i < game.actorArr.length; i++){
						game.actorArr[i].render();
					}
					
					//渲染管子
					for(var i = 0; i < game.pipeArr.length; i++){
						game.pipeArr[i].render();
					}
					
					//渲染分数
					//总宽度：24*(i+1)+30*i
					
					var strScore = game.score.toString()
					for(var i = 0; i < strScore.length; i++){
						game.cxt.drawImage(game.R["font_" + strScore.charAt(i)], 0, 0, 24, 44, 
							game.canvas.width/2 + 30*i - (30*(strScore.length-1) + 24)/2, game.canvas.height/2-22-100, 24, 44);
					}
					
					
					//碰撞检测
					for(var i = 0; i < game.pipeArr.length; i++){
						//鸟的显示大小是42*30
						var adjust = 7;//碰撞调节
						var bottomHeight = 420-game.pipeArr[i].height-game.pipeArr[i].interspace;
						if(bird.x - 21 < game.pipeArr[i].x + 52 - adjust && bird.x + 21 > game.pipeArr[i].x + adjust){
							if(bird.y - 15 + adjust < game.pipeArr[i].height || bird.y + 15 > game.pipeArr[i].height + game.pipeArr[i].interspace + adjust)
								game.pipeArr[i].crash = true;
								if(bird.y - 15 - adjust < game.pipeArr[i].height){
								}
								else if(bird.y + 15 > game.pipeArr[i].height + game.pipeArr[i].interspace){
								}
						} 
						if(bird.y > 400)game.pipeArr[i].crash = true;
						if(game.pipeArr[i].crash){
							this.sceneNum = 2;
						}
						//通过加分
						if(bird.x - 21 > game.pipeArr[i].x + 52 && !game.pipeArr[i].isPass){
							game.score++;
							game.pipeArr[i].isPass = true;
						}
					}
					
					break;
				case 2:
					background.render();
					game.cxt.drawImage(game.R["text_game_over"],0,0,204,54,game.canvas.width/2-108,game.canvas.height/2-27 - 60,204,54);
					game.cxt.drawImage(game.R["button_play"],0,0,116,70,game.canvas.width/2-116/2,game.canvas.height/2-70/2 + 20,116,70);
					
					break;
				case 3:
					
					break;
				case 4:
					
					break;
				case 5:
					
					break;
			}
		},
		update:function(){
			switch(this.sceneNum){
				case 1:
					for(var i = 0; i < game.actorArr.length; i++){
						game.actorArr[i].update();
					}
					for(var i = 0; i < game.pipeArr.length; i++){
						game.pipeArr[i].update();
					}
					break;
				case 2:
					break;
				case 3:
					
					break;
				case 4:
					
					break;
				case 5:
					
					break;
			}		
		},
		changeScene:function(){
			switch(this.sceneNum){
				case 1:
					game.pipeArr = [];
					game.fno = 0;
					game.f = 0;
					game.score = 0;
					this.pipeInterspace = 120;
					this.pipeSpeed = 3;
					this.pipeCreatSpeed = 80;
					bird.resetBird();
					background.resetBg();
					break;
				case 2:
					
					break;
				case 3:
					
					break;
				case 4:
					
					break;
				case 5:
					
					break;
			}
		},
		bindEvent:function(){
			var self = this;
			game.canvas.onclick = function(event){
				var clickX = event.clientX;
				var clickY = event.clientY;
				switch(self.sceneNum){
					case 1:
						game.f = 0;
						bird.hasEnergy = true;
						break;
					case 2:
						var x1 = game.canvas.width/2-116/2;
						var x2 = x1 + 116;
						var y1 = game.canvas.height/2-70/2 + 20;
						var y2 = y1 + 70;
						if(clickX > x1 && clickX < x2)
							if(clickY > y1 && clickY < y2){
								self.sceneNum = 1;
								self.changeScene();
							}
						
						break;
					case 3:
						
						break;
					case 4:
						
						break;
					case 5:
						
						break;
				}		
			}
		}
	})

})()


