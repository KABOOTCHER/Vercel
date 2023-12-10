(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание 3_atlas_1", frames: [[1656,1082,136,133],[0,1082,471,372],[758,1082,447,244],[0,0,1920,1080],[473,1082,283,522],[1207,1082,447,244]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Колесо_Монтажнаяобласть1 = function() {
	this.initialize(ss["Задание 3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Машина_Монтажнаяобласть1 = function() {
	this.initialize(ss["Задание 3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.крыло1_Монтажнаяобласть1 = function() {
	this.initialize(ss["Задание 3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.поле3_Монтажнаяобласть1 = function() {
	this.initialize(ss["Задание 3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.стрекоза_Монтажнаяобласть1 = function() {
	this.initialize(ss["Задание 3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.крыло2_Монтажнаяобласть1 = function() {
	this.initialize(ss["Задание 3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Колесо_Монтажнаяобласть1();
	this.instance.setTransform(0,0,1.3838,1.3838);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,188.2,184.1), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.крыло2_Монтажнаяобласть1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,447,244), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.крыло1_Монтажнаяобласть1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,447,244), null);


(lib.Крылострекозы1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(0,0,1,1,0,0,0,223.5,122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:4.3},0).wait(1).to({y:8.55},0).wait(1).to({y:12.8},0).wait(1).to({y:17.05},0).wait(1).to({y:21.3},0).wait(1).to({y:17.55},0).wait(1).to({y:13.8},0).wait(1).to({y:10.05},0).wait(1).to({y:6.3},0).wait(1).to({y:2.55},0).wait(1).to({y:-1.25},0).wait(1).to({y:2.75},0).wait(1).to({y:6.7},0).wait(1).to({y:10.7},0).wait(1).to({y:14.65},0).wait(1).to({y:18.65},0).wait(1).to({y:22.6},0).wait(1).to({y:19.05},0).wait(1).to({y:15.5},0).wait(1).to({y:11.95},0).wait(1).to({y:8.4},0).wait(1).to({y:4.85},0).wait(1).to({y:1.3},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.5,-123.2,447,267.8);


(lib.Крылобабочки2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.setTransform(-3.5,0,1,1,0,0,0,223.5,122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-1.5},0).wait(1).to({y:-3},0).wait(1).to({y:-4.55},0).wait(1).to({y:-6.05},0).wait(1).to({y:-7.6},0).wait(1).to({y:-3.4},0).wait(1).to({y:0.8},0).wait(1).to({y:4.95},0).wait(1).to({y:9.15},0).wait(1).to({y:13.35},0).wait(1).to({y:17.5},0).wait(1).to({y:13.15},0).wait(1).to({y:8.75},0).wait(1).to({y:4.35},0).wait(1).to({y:-0.05},0).wait(1).to({y:-4.45},0).wait(1).to({y:-8.85},0).wait(1).to({y:-6.1},0).wait(1).to({y:-3.4},0).wait(1).to({y:-0.65},0).wait(1).to({y:2.05},0).wait(1).to({y:4.8},0).wait(1).to({y:7.5},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227,-130.8,447,270.3);


(lib.Колесо = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ4();
	this.instance.setTransform(0,0,1,1,0,0,0,94.1,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.4285,x:1.9,y:0.95},0).wait(1).to({rotation:12.857,x:3.8,y:1.9},0).wait(1).to({rotation:19.2855,x:5.6,y:2.85},0).wait(1).to({rotation:25.7141,x:7.5,y:3.75},0).wait(1).to({rotation:32.1426,x:9.35,y:4.65},0).wait(1).to({rotation:38.5711,x:11.2,y:5.6},0).wait(1).to({rotation:44.9996,x:13.05,y:6.55},0).wait(1).to({rotation:54.3745,x:11.75,y:8.85},0).wait(1).to({rotation:63.7495,x:10.55,y:11.1},0).wait(1).to({rotation:73.1244,x:9.3,y:13.4},0).wait(1).to({rotation:82.4993,x:8.15,y:15.65},0).wait(1).to({rotation:91.8742,x:6.9,y:17.95},0).wait(1).to({rotation:101.2492,x:5.65,y:20.25},0).wait(1).to({rotation:110.6241,x:4.45,y:22.5},0).wait(1).to({rotation:119.999,x:3.25,y:24.85},0).wait(1).to({rotation:127.4989,x:1.95,y:24.75},0).wait(1).to({rotation:134.9988,x:0.75,y:24.8},0).wait(1).to({rotation:142.4986,x:-0.45},0).wait(1).to({rotation:149.9985,x:-1.7},0).wait(1).to({rotation:157.4984,x:-2.9,y:24.75},0).wait(1).to({rotation:164.9983,x:-4.1,y:24.8},0).wait(1).to({rotation:172.4981,x:-5.35},0).wait(1).to({rotation:179.998,x:-6.55,y:24.75},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-125,275.7,281.3);


(lib.Целаястрекоза = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.стрекоза_Монтажнаяобласть1();
	this.instance.setTransform(-147.55,-261);

	this.instance_1 = new lib.Крылострекозы1("synched",0);
	this.instance_1.setTransform(-8.85,-117);

	this.instance_2 = new lib.Крылобабочки2("synched",0);
	this.instance_2.setTransform(10.35,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.3,-261,462.70000000000005,522);


(lib.Машина = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Колесо("synched",0);
	this.instance.setTransform(-56.2,43.55);

	this.instance_1 = new lib.Колесо("synched",0);
	this.instance_1.setTransform(87.6,41);

	this.instance_2 = new lib.Машина_Монтажнаяобласть1();
	this.instance_2.setTransform(-235.5,-186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{startPosition:13}},{t:this.instance,p:{startPosition:13}}]},88).to({state:[]},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.5,-186,471,385.9);


// stage content:
(lib.Задание3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95));

	// Слой_11
	this.instance = new lib.Целаястрекоза("synched",0);
	this.instance.setTransform(1655.2,408.35,0.4269,0.417,0,-1.8746,-1.2042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1,scaleX:0.4267,skewX:-20.1343,skewY:-19.4638,x:1636.7,y:435.85,startPosition:1},0).wait(1).to({scaleX:0.4264,scaleY:0.4169,skewX:-38.39,skewY:-37.7195,x:1618.7,y:463.3,startPosition:2},0).wait(1).to({scaleX:0.4262,scaleY:0.4168,skewX:-56.6456,skewY:-55.9751,x:1600.75,y:490.8,startPosition:3},0).wait(1).to({scaleX:0.4259,skewX:-74.9013,skewY:-74.2308,x:1582.8,y:518.2,startPosition:4},0).wait(1).to({scaleX:0.4257,scaleY:0.4167,skewX:-93.1569,skewY:-92.4865,x:1564.85,y:545.65,startPosition:5},0).wait(1).to({scaleX:0.4255,scaleY:0.4166,skewX:-111.4126,skewY:-110.7421,x:1546.95,y:572.95,startPosition:6},0).wait(1).to({scaleX:0.4252,skewX:-129.6683,skewY:-128.9978,x:1528.95,y:600.3,startPosition:7},0).wait(1).to({scaleX:0.4249,scaleY:0.4165,skewX:-127.5058,skewY:-126.8353,x:1510.9,y:627.65,startPosition:8},0).wait(1).to({scaleX:0.4247,scaleY:0.4164,skewX:-125.3433,skewY:-124.6728,x:1492.85,y:655.05,startPosition:9},0).wait(1).to({scaleX:0.4244,skewX:-123.1808,skewY:-122.5103,x:1474.75,y:682.4,startPosition:10},0).wait(1).to({scaleX:0.4242,scaleY:0.4163,skewX:-121.0183,skewY:-120.3478,x:1456.65,y:709.8,startPosition:11},0).wait(1).to({scaleX:0.424,scaleY:0.4162,skewX:-118.8558,skewY:-118.1853,x:1438.6,y:737.15,startPosition:12},0).wait(1).to({scaleX:0.4237,skewX:-116.6933,skewY:-116.0228,x:1420.55,y:764.6,startPosition:13},0).wait(1).to({scaleX:0.4235,scaleY:0.4161,skewX:-112.4047,skewY:-111.7342,x:1361.2,y:777.5,startPosition:14},0).wait(1).to({scaleX:0.4232,scaleY:0.416,skewX:-108.116,skewY:-107.4456,x:1301.9,y:790.45,startPosition:15},0).wait(1).to({scaleX:0.4229,skewX:-103.8274,skewY:-103.1569,x:1242.55,y:803.35,startPosition:16},0).wait(1).to({scaleX:0.4227,scaleY:0.4159,skewX:-99.5388,skewY:-98.8683,x:1183.2,y:816.3,startPosition:17},0).wait(1).to({scaleX:0.4225,skewX:-95.2502,skewY:-94.5797,x:1123.9,y:829.2,startPosition:18},0).wait(1).to({scaleX:0.4222,scaleY:0.4158,skewX:-90.9616,skewY:-90.2911,x:1064.6,y:842.15,startPosition:19},0).wait(1).to({scaleX:0.422,scaleY:0.4157,skewX:-84.5332,skewY:-83.8627,x:998.35,y:816.75,startPosition:20},0).wait(1).to({scaleX:0.4217,skewX:-78.1048,skewY:-77.4343,x:932.15,y:791.4,startPosition:21},0).wait(1).to({scaleX:0.4215,scaleY:0.4156,skewX:-71.6765,skewY:-71.006,x:865.95,y:766.05,startPosition:22},0).wait(1).to({scaleX:0.4212,scaleY:0.4155,skewX:-65.2481,skewY:-64.5776,x:799.7,y:740.65,startPosition:23},0).wait(1).to({scaleX:0.421,skewX:-58.8197,skewY:-58.1492,x:733.55,y:715.25,startPosition:24},0).wait(1).to({scaleX:0.4207,scaleY:0.4154,skewX:-52.3913,skewY:-51.7209,x:667.35,y:689.9,startPosition:25},0).wait(1).to({scaleX:0.4205,scaleY:0.4153,skewX:-45.963,skewY:-45.2925,x:601.15,y:664.5,startPosition:26},0).wait(1).to({scaleX:0.4202,skewX:-38.4562,skewY:-37.7857,x:557.35,y:622.45,startPosition:0},0).wait(1).to({scaleX:0.42,scaleY:0.4152,skewX:-30.9494,skewY:-30.2789,x:513.6,y:580.4,startPosition:1},0).wait(1).to({scaleX:0.4197,scaleY:0.4151,skewX:-23.4426,skewY:-22.7721,x:469.8,y:538.35,startPosition:2},0).wait(1).to({scaleX:0.4195,skewX:-15.9358,skewY:-15.2654,x:426.05,y:496.3,startPosition:3},0).wait(1).to({scaleX:0.4192,scaleY:0.415,skewX:-8.4291,skewY:-7.7586,x:382.3,y:454.25,startPosition:4},0).wait(1).to({scaleX:0.419,scaleY:0.4149,skewX:-0.9223,skewY:-0.2518,x:338.6,y:412.2,startPosition:5},0).wait(1).to({scaleX:0.4187,skewX:-0.9223,skewY:-0.2518,startPosition:6},0).wait(1).to({scaleX:0.4185,scaleY:0.4148,startPosition:7},0).wait(1).to({scaleX:0.4182,scaleY:0.4147,startPosition:8},0).wait(1).to({scaleX:0.418,startPosition:9},0).wait(1).to({scaleX:0.4177,scaleY:0.4146,startPosition:10},0).wait(1).to({scaleX:0.4175,scaleY:0.4145,startPosition:11},0).wait(1).to({scaleX:0.4172,startPosition:12},0).wait(1).to({scaleX:0.417,scaleY:0.4144,startPosition:13},0).wait(1).to({scaleX:0.4167,scaleY:0.4143,startPosition:14},0).wait(1).to({scaleX:0.4165,startPosition:15},0).wait(1).to({scaleX:0.4162,scaleY:0.4142,startPosition:16},0).wait(1).to({scaleX:0.416,scaleY:0.4141,startPosition:17},0).wait(1).to({scaleX:0.4157,startPosition:18},0).wait(1).to({scaleX:0.4155,scaleY:0.414,startPosition:19},0).wait(1).to({scaleX:0.4152,scaleY:0.4139,startPosition:20},0).wait(1).to({scaleX:0.415,startPosition:21},0).wait(1).to({scaleX:0.4147,scaleY:0.4138,startPosition:22},0).wait(1).to({scaleX:0.4145,scaleY:0.4137,startPosition:23},0).wait(1).to({scaleX:0.4142,startPosition:24},0).wait(1).to({scaleX:0.414,scaleY:0.4136,startPosition:25},0).wait(1).to({scaleX:0.4137,scaleY:0.4135,startPosition:26},0).wait(1).to({scaleX:0.4135,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1));

	// Слой_10
	this.instance_1 = new lib.Целаястрекоза("synched",0);
	this.instance_1.setTransform(380.85,731.6,0.4829,0.4809);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-1,scaleX:0.4828,scaleY:0.4807,rotation:5.1777,x:409.2,y:705.3,startPosition:1},0).wait(1).to({scaleX:0.4826,scaleY:0.4806,rotation:10.3553,x:438.1,y:679.05,startPosition:2},0).wait(1).to({scaleX:0.4824,scaleY:0.4805,rotation:15.533,x:466.95,y:652.75,startPosition:3},0).wait(1).to({scaleX:0.4823,scaleY:0.4803,rotation:20.7107,x:495.8,y:626.55,startPosition:4},0).wait(1).to({scaleX:0.4821,scaleY:0.4802,rotation:25.8884,x:524.65,y:600.25,startPosition:5},0).wait(1).to({scaleX:0.4819,scaleY:0.4801,rotation:31.066,x:553.55,y:574,startPosition:6},0).wait(1).to({scaleX:0.4818,scaleY:0.4799,rotation:36.2437,x:582.4,y:547.75,startPosition:7},0).wait(1).to({scaleX:0.4816,scaleY:0.4798,rotation:46.2436,x:633.25,y:530.3,startPosition:8},0).wait(1).to({scaleX:0.4814,scaleY:0.4797,rotation:56.2434,x:684.15,y:512.9,startPosition:9},0).wait(1).to({scaleX:0.4813,scaleY:0.4796,rotation:66.2433,x:735.05,y:495.5,startPosition:10},0).wait(1).to({scaleX:0.4811,scaleY:0.4794,rotation:76.2431,x:785.95,y:478.1,startPosition:11},0).wait(1).to({scaleX:0.4809,scaleY:0.4793,rotation:86.2429,x:836.8,y:460.7,startPosition:12},0).wait(1).to({scaleX:0.4808,scaleY:0.4792,rotation:96.2428,x:887.75,y:443.35,startPosition:13},0).wait(1).to({scaleX:0.4806,scaleY:0.4791,rotation:105.1143,x:942.6,y:446.55,startPosition:14},0).wait(1).to({scaleX:0.4804,scaleY:0.4789,rotation:113.9859,x:997.45,y:449.7,startPosition:15},0).wait(1).to({scaleX:0.4803,scaleY:0.4788,rotation:122.8574,x:1052.25,y:452.9,startPosition:16},0).wait(1).to({scaleX:0.4801,scaleY:0.4787,rotation:131.7289,x:1107.1,y:456.1,startPosition:17},0).wait(1).to({scaleX:0.4799,scaleY:0.4785,rotation:140.6005,x:1161.9,y:459.3,startPosition:18},0).wait(1).to({scaleX:0.4798,scaleY:0.4784,rotation:149.472,x:1216.75,y:462.55,startPosition:19},0).wait(1).to({scaleX:0.4796,scaleY:0.4783,rotation:140.8391,x:1248.05,y:470.25,startPosition:20},0).wait(1).to({scaleX:0.4794,scaleY:0.4782,rotation:132.2063,x:1279.35,y:477.95,startPosition:21},0).wait(1).to({scaleX:0.4793,scaleY:0.478,rotation:123.5734,x:1310.65,y:485.7,startPosition:22},0).wait(1).to({scaleX:0.4791,scaleY:0.4779,rotation:114.9405,x:1341.95,y:493.4,startPosition:23},0).wait(1).to({scaleX:0.4789,scaleY:0.4778,rotation:106.3076,x:1373.25,y:501.2,startPosition:24},0).wait(1).to({scaleX:0.4788,scaleY:0.4777,rotation:97.6748,x:1404.5,y:508.95,startPosition:25},0).wait(1).to({scaleX:0.4786,scaleY:0.4775,rotation:89.0419,x:1435.8,y:516.7,startPosition:26},0).wait(1).to({scaleX:0.4784,scaleY:0.4774,rotation:74.042,x:1472.2,y:498.6,startPosition:0},0).wait(1).to({scaleX:0.4783,scaleY:0.4773,rotation:59.0422,x:1508.7,y:480.5,startPosition:1},0).wait(1).to({scaleX:0.4781,scaleY:0.4771,rotation:44.0423,x:1545.15,y:462.4,startPosition:2},0).wait(1).to({scaleX:0.4779,scaleY:0.477,rotation:29.0425,x:1581.7,y:444.35,startPosition:3},0).wait(1).to({scaleX:0.4778,scaleY:0.4769,rotation:14.0426,x:1618.2,y:426.35,startPosition:4},0).wait(1).to({scaleX:0.4776,scaleY:0.4768,rotation:-0.9572,x:1654.75,y:408.3,startPosition:5},0).wait(1).to({scaleX:0.4774,scaleY:0.4766,rotation:-0.9572,startPosition:6},0).wait(1).to({scaleX:0.4773,scaleY:0.4765,startPosition:7},0).wait(1).to({scaleX:0.4771,scaleY:0.4764,startPosition:8},0).wait(1).to({scaleX:0.4769,scaleY:0.4762,startPosition:9},0).wait(1).to({scaleX:0.4768,scaleY:0.4761,startPosition:10},0).wait(1).to({scaleX:0.4766,scaleY:0.476,startPosition:11},0).wait(1).to({scaleX:0.4764,scaleY:0.4759,startPosition:12},0).wait(1).to({scaleX:0.4763,scaleY:0.4757,startPosition:13},0).wait(1).to({scaleX:0.4761,scaleY:0.4756,startPosition:14},0).wait(1).to({scaleX:0.4759,scaleY:0.4755,startPosition:15},0).wait(1).to({scaleX:0.4758,scaleY:0.4753,startPosition:16},0).wait(1).to({scaleX:0.4756,scaleY:0.4752,startPosition:17},0).wait(1).to({scaleX:0.4754,scaleY:0.4751,startPosition:18},0).wait(1).to({scaleX:0.4753,scaleY:0.475,startPosition:19},0).wait(1).to({scaleX:0.4751,scaleY:0.4748,startPosition:20},0).wait(1).to({scaleX:0.4749,scaleY:0.4747,x:1654.8,startPosition:21},0).wait(1).to({scaleX:0.4748,scaleY:0.4746,startPosition:22},0).wait(1).to({scaleX:0.4746,scaleY:0.4744,startPosition:23},0).wait(1).to({scaleX:0.4744,scaleY:0.4743,startPosition:24},0).wait(1).to({scaleX:0.4743,scaleY:0.4742,startPosition:25},0).wait(1).to({scaleX:0.4741,scaleY:0.4741,startPosition:26},0).wait(1).to({scaleX:0.4739,scaleY:0.4739,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1));

	// Слой_13
	this.instance_2 = new lib.Машина("synched",0);
	this.instance_2.setTransform(-158.8,766);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:7,x:-147.9,y:772.8,startPosition:1},0).wait(1).to({x:-137,y:772.6,startPosition:2},0).wait(1).to({x:-126.15,y:772.4,startPosition:3},0).wait(1).to({x:-115.25,y:772.2,startPosition:4},0).wait(1).to({x:-104.4,y:772.05,startPosition:5},0).wait(1).to({x:-93.5,y:771.85,startPosition:6},0).wait(1).to({x:-82.65,y:771.65,startPosition:7},0).wait(1).to({x:-71.75,y:771.45,startPosition:8},0).wait(1).to({x:-60.9,y:771.25,startPosition:9},0).wait(1).to({x:-50,y:771.1,startPosition:10},0).wait(1).to({x:-39.15,y:770.9,startPosition:11},0).wait(1).to({x:-28.25,y:770.7,startPosition:12},0).wait(1).to({x:-17.35,y:770.5,startPosition:13},0).wait(1).to({x:-6.5,y:770.3,startPosition:14},0).wait(1).to({x:4.35,y:770.15,startPosition:15},0).wait(1).to({x:15.2,y:769.95,startPosition:16},0).wait(1).to({x:26.1,y:769.75,startPosition:17},0).wait(1).to({x:36.95,y:769.55,startPosition:18},0).wait(1).to({x:47.85,y:769.35,startPosition:19},0).wait(1).to({x:58.7,y:769.2,startPosition:20},0).wait(1).to({x:69.6,y:769,startPosition:21},0).wait(1).to({x:80.5,y:768.8,startPosition:22},0).wait(1).to({x:91.35,y:768.6,startPosition:23},0).wait(1).to({x:102.25,y:768.4,startPosition:24},0).wait(1).to({x:113.1,y:768.25,startPosition:25},0).wait(1).to({x:124,y:768.05,startPosition:26},0).wait(1).to({x:134.85,y:767.85,startPosition:27},0).wait(1).to({x:145.75,y:767.65,startPosition:28},0).wait(1).to({x:156.6,y:767.45,startPosition:29},0).wait(1).to({x:167.5,y:767.3,startPosition:30},0).wait(1).to({x:178.35,y:767.1,startPosition:31},0).wait(1).to({x:189.25,y:766.9,startPosition:32},0).wait(1).to({x:200.15,y:766.7,startPosition:33},0).wait(1).to({x:211,y:766.5,startPosition:34},0).wait(1).to({x:221.9,y:766.35,startPosition:35},0).wait(1).to({x:232.75,y:766.15,startPosition:36},0).wait(1).to({x:243.65,y:765.95,startPosition:37},0).wait(1).to({x:254.5,y:765.75,startPosition:38},0).wait(1).to({x:265.4,y:765.55,startPosition:39},0).wait(1).to({x:276.25,y:765.4,startPosition:40},0).wait(1).to({x:287.15,y:765.2,startPosition:41},0).wait(1).to({x:298,y:765,startPosition:42},0).wait(1).to({x:308.9,y:764.8,startPosition:43},0).wait(1).to({x:319.8,y:764.6,startPosition:44},0).wait(1).to({x:330.65,y:764.45,startPosition:45},0).wait(1).to({x:341.55,y:764.25,startPosition:46},0).wait(1).to({x:352.4,y:764.05,startPosition:47},0).wait(1).to({x:363.3,y:763.85,startPosition:48},0).wait(1).to({x:374.15,y:763.65,startPosition:49},0).wait(1).to({x:385.05,y:763.5,startPosition:50},0).wait(1).to({x:395.9,y:763.3,startPosition:51},0).wait(1).to({x:406.8,y:763.1,startPosition:52},0).wait(1).to({x:417.65,y:762.9,startPosition:53},0).wait(1).to({x:428.55,y:762.7,startPosition:54},0).wait(1).to({x:439.45,y:762.55,startPosition:55},0).wait(1).to({x:490.95,startPosition:56},0).wait(1).to({x:542.5,startPosition:57},0).wait(1).to({x:594.05,startPosition:58},0).wait(1).to({x:645.6,startPosition:59},0).wait(1).to({x:697.15,startPosition:60},0).wait(1).to({x:748.65,startPosition:61},0).wait(1).to({x:800.2,startPosition:62},0).wait(1).to({x:851.75,startPosition:63},0).wait(1).to({x:903.3,startPosition:64},0).wait(1).to({x:954.85,startPosition:65},0).wait(1).to({x:1006.4,startPosition:66},0).wait(1).to({x:1065.75,startPosition:67},0).wait(1).to({x:1125.1,startPosition:68},0).wait(1).to({x:1184.5,startPosition:69},0).wait(1).to({x:1243.85,startPosition:70},0).wait(1).to({x:1303.2,startPosition:71},0).wait(1).to({x:1362.6,startPosition:72},0).wait(1).to({x:1421.95,startPosition:73},0).wait(1).to({x:1481.3,startPosition:74},0).wait(1).to({x:1540.7,startPosition:75},0).wait(1).to({x:1600.05,startPosition:76},0).wait(1).to({x:1659.45,startPosition:77},0).wait(1).to({x:1698.55,startPosition:78},0).wait(1).to({x:1737.65,startPosition:79},0).wait(1).to({x:1776.75,startPosition:80},0).wait(1).to({x:1815.85,startPosition:81},0).wait(1).to({x:1854.95,startPosition:82},0).wait(1).to({x:1894.05,startPosition:83},0).wait(1).to({x:1933.15,startPosition:84},0).wait(1).to({x:1972.25,startPosition:85},0).wait(1).to({x:2011.35,startPosition:86},0).wait(1).to({x:2050.45,startPosition:87},0).wait(1).to({x:2089.6,startPosition:88},0).to({_off:true},1).wait(6));

	// Слой_17
	this.instance_3 = new lib.поле3_Монтажнаяобласть1();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(565.7,540,1759.3999999999999,540);
// library properties:
lib.properties = {
	id: 'E9BF14C04582194CBF3360D326A0B83E',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Задание 3_atlas_1.png", id:"Задание 3_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E9BF14C04582194CBF3360D326A0B83E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;