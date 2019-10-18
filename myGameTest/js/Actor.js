(function(){
	//演员父类
	var Actor = window.Actor = Class.extend({
		init:function(){
			game.actorArr.push(this);
		},
		render:function(){
			throw new Error("必须重写render方法");
		},
		update:function(){
			
		}
	});
	//背景类
	var Background = window.Background = Actor.extend({
		init:function(){
			this.x = 0;
			this.speed = 5;
			this._super();
			
			this.DayOrNight = parseInt(Math.random() * 2)
		},
		render:function(){
			var arr = ["bg_day","bg_night"];
			game.cxt.drawImage(game.R[arr[this.DayOrNight]],0,0,288,512,this.x,0,300,500);
			game.cxt.drawImage(game.R[arr[this.DayOrNight]],0,0,288,512,this.x + 288,0,300,500);
			game.cxt.drawImage(game.R[arr[this.DayOrNight]],0,0,288,512,this.x + 288 * 2,0,300,500);
		},
		update:function(){
			this.x -= this.speed;
			if(this.x < -288)this.x = 0;
		},
		resetBg:function(){
			this.x = 0;
			this.speed = 5;
			this.DayOrNight = parseInt(Math.random() * 2)
		}
	});
	
	//大地类
	var Land = window.Land = Actor.extend({
		init:function(){
			this.x = 0;
			this.speed =  scene.pipeSpeed;
			this._super();
		},
		render:function(){
			game.cxt.drawImage(game.R["land"],0,0,336,80,this.x,500-80,336,80);
			game.cxt.drawImage(game.R["land"],0,0,336,80,this.x + 336,500-80,336,80);
			game.cxt.drawImage(game.R["land"],0,0,336,80,this.x + 336 * 2,500-80,336,80);
		},
		update:function(){
			this.x -= this.speed;
			if(this.x < -288)this.x = 0;
		}
	});
	
	//管子类
	var Pipe = window.Pipe = Actor.extend({
		init:function(){
			this.x = 300;
			this.height = parseInt(Math.random() * 200) + 30;
			this.interspace = scene.pipeInterspace;
			this.speed = scene.pipeSpeed;
			this.crash = false;//碰撞信号量
			this.isPass = false; //是否通过
			game.pipeArr.push(this);
		},
		render:function(){
			var bottomHeight = 420-this.height-this.interspace;
			game.cxt.drawImage(game.R["pipe_down"],
			0, 320 - this.height, 52, this.height,
			this.x, 0, 52, this.height);
			
			game.cxt.drawImage(game.R["pipe_up"],
			0,0,52,bottomHeight,
			this.x,this.height+this.interspace,52,bottomHeight);//除掉大地488
			
		},
		update:function(){
			this.x -= this.speed;
			if(this.x < -300){
				this.suicide();
			}
		},
		suicide:function(){//为了防止数组中管子过多，管子拥有自杀方法
			game.pipeArr = _.without(game.pipeArr,this);
		}
	})
	
	//傻鸟类
	var Bird = window.Bird = Actor.extend({
		init:function(){
			this.colorNum = parseInt(Math.random()*3);//随机一种鸟
			this.wingNum = 0;//翅膀编号用以变化
			this.x = 60;
			this.y = 200;
			this.dropSpeed = 0.6;//掉落速度
			this.upSpeed = 0.5;//上升速度
			this.upFrameNum = 19 //上升帧数
			this._super();
			this.hasEnergy = false;//是否处于点击效果中
			this.deg = 0;//鸟的旋转度数
		},
		render:function(){
			if(game.fno % 5 == 0){
				if(this.wingNum < 2) this.wingNum++;
				else this.wingNum = 0;
			}
			game.cxt.save();
			game.cxt.translate(this.x,this.y);
			game.cxt.rotate(this.deg);
			//画鸟，鸟的显示大小是42*30
			game.cxt.drawImage(game.R["bird" + this.colorNum + "_" + this.wingNum],
				0, 0, 48, 48,
				-24, -24, 48, 48);
			game.cxt.restore();
		},
		update:function(){
			if(this.hasEnergy){
				this.deg = 0;
				this.y -= (this.upFrameNum - game.f) * this.upSpeed;
				if(game.f > this.upFrameNum){
					this.hasEnergy = false;
					game.f = 0;
				}
			}
			else{
				if(this.y < 460){
					this.deg+=0.02;
					this.y += game.f * this.dropSpeed;
				}
			}
		},
		resetBird:function(){
			this.colorNum = parseInt(Math.random()*3);//随机一种鸟
			this.wingNum = 0;//翅膀编号用以变化
			this.x = 60;
			this.y = 200;
		/*	this.dropSpeed = 0.6;//掉落速度
			this.upSpeed = 0.5;*/
			this.hasEnergy = false;//是否处于点击效果中
			this.deg = 0;//鸟的旋转度数
			
		},
		setDegree:function(dropSpeed,upSpeed,upFrameNum){
			this.dropSpeed = dropSpeed;//掉落速度
			this.upSpeed = upSpeed;//上升速度
			this.upFrameNum = upFrameNum //上升帧数
		}
		
	});	
})();
