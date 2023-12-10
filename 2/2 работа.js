(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2 работа_atlas_1", frames: [[0,0,1920,1080],[0,1082,634,674],[636,1082,512,512],[1150,1082,512,512]]},
		{name:"2 работа_atlas_2", frames: [[514,0,424,275],[514,277,424,275],[0,0,512,512]]}
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



(lib._3_Монтажнаяобласть1 = function() {
	this.initialize(ss["2 работа_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4_Монтажнаяобласть1 = function() {
	this.initialize(ss["2 работа_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2_Монтажнаяобласть1 = function() {
	this.initialize(ss["2 работа_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.freeiconrugbyball2972028 = function() {
	this.initialize(ss["2 работа_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._5_Монтажнаяобласть1 = function() {
	this.initialize(ss["2 работа_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.freeiconbowlingball657173 = function() {
	this.initialize(ss["2 работа_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.freeiconbasketballball2128322 = function() {
	this.initialize(ss["2 работа_atlas_2"]);
	this.gotoAndStop(2);
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


(lib.баскетмяч = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.freeiconbasketballball2128322();
	this.instance.setTransform(-39,-39,0.1524,0.1524);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.баскетмяч, new cjs.Rectangle(-39,-39,78,78), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.freeiconbowlingball657173();
	this.instance.setTransform(0,0,0.1498,0.1498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,76.7,76.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._5_Монтажнаяобласть1();
	this.instance.setTransform(0,0,0.5967,0.5967);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,253,164.1), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.freeiconrugbyball2972028();
	this.instance.setTransform(0,0,0.1988,0.1988);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,101.8,101.8), null);


// stage content:
(lib._2работа_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(152));

	// Слой_5
	this.instance = new lib._2_Монтажнаяобласть1();
	this.instance.setTransform(1286,354);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:true},93).wait(1));

	// Баскет
	this.instance_1 = new lib.баскетмяч();
	this.instance_1.setTransform(809,892);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:809.2,y:876.4},0).wait(1).to({x:809.4,y:860.8},0).wait(1).to({x:809.6,y:845.2},0).wait(1).to({x:809.8,y:829.6},0).wait(1).to({x:810,y:814},0).wait(1).to({x:809.8333,y:826.9917},0).wait(1).to({x:809.6667,y:839.9833},0).wait(1).to({x:809.5,y:852.975},0).wait(1).to({x:809.3333,y:865.9667},0).wait(1).to({x:809.1667,y:878.9583},0).wait(1).to({x:809,y:891.95},0).wait(1).to({x:809.1755,y:878.95},0).wait(1).to({x:809.351,y:865.95},0).wait(1).to({x:809.5266,y:852.95},0).wait(1).to({x:809.7021,y:839.95},0).wait(1).to({x:809.8776,y:826.95},0).wait(1).to({x:810.0531,y:813.95},0).wait(1).to({x:809.8776,y:826.9583},0).wait(1).to({x:809.7021,y:839.9667},0).wait(1).to({x:809.5266,y:852.975},0).wait(1).to({x:809.351,y:865.9833},0).wait(1).to({x:809.1755,y:878.9917},0).wait(1).to({x:809,y:892},0).wait(1).to({x:856.05,y:833.9},0).wait(1).to({x:903.1,y:775.8},0).wait(1).to({x:948.6,y:722.025},0).wait(1).to({x:994.1,y:668.25},0).wait(1).to({x:1026.6333,y:632.4},0).wait(1).to({x:1059.1667,y:596.55},0).wait(1).to({x:1091.7,y:560.7},0).wait(1).to({x:1137.175,y:518.525},0).wait(1).to({x:1182.65,y:476.35},0).wait(1).to({x:1239.45,y:454.85},0).wait(1).to({x:1296.25,y:433.35},0).wait(1).to({x:1353.05,y:411.85},0).wait(1).to({x:1419.2167,y:423.9833},0).wait(1).to({x:1485.3833,y:436.1167},0).wait(1).to({x:1551.55,y:448.25},0).wait(1).to({x:1520.525,y:460.2375},0).wait(1).to({x:1489.5,y:472.225},0).wait(1).to({x:1458.475,y:484.2125},0).wait(1).to({x:1427.45,y:496.2},0).wait(1).to({x:1450.8,y:562.1667},0).wait(1).to({x:1474.15,y:628.1333},0).wait(1).to({x:1497.5,y:694.1},0).wait(1).to({x:1520.85,y:760.0667},0).wait(1).to({x:1544.2,y:826.0333},0).wait(1).to({x:1567.55,y:892},0).wait(101).to({_off:true},1).wait(2));

	// Регби
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(527,903.9,1,1,0,0,0,51,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:50.9,x:526.9},0).wait(49).to({rotation:5.9998,x:552.2,y:889.85},0).wait(1).to({rotation:11.9997,x:577.55,y:875.95},0).wait(1).to({rotation:17.9995,x:602.85,y:862},0).wait(1).to({rotation:23.9994,x:628.25,y:848},0).wait(1).to({rotation:29.9992,x:653.6,y:834.05},0).wait(1).to({rotation:38.9991,x:669.6,y:848.7},0).wait(1).to({rotation:47.999,x:685.7,y:863.3},0).wait(1).to({rotation:56.9988,x:701.7,y:878},0).wait(1).to({rotation:65.9987,x:717.75,y:892.65},0).wait(1).to({rotation:74.9986,x:733.8,y:907.3},0).wait(1).to({rotation:39.9043,x:755.5,y:896.45},0).wait(1).to({rotation:4.81,x:777.25,y:885.6},0).wait(1).to({rotation:-30.2844,x:798.95,y:874.8},0).wait(1).to({rotation:-65.3787,x:820.7,y:863.95},0).wait(1).to({rotation:-100.473,x:842.5,y:853.1},0).wait(1).to({rotation:-61.4733,x:859.5,y:862.45},0).wait(1).to({rotation:-22.4736,x:876.6,y:871.75},0).wait(1).to({rotation:16.526,x:893.6,y:881.1},0).wait(1).to({rotation:55.5257,x:910.75,y:890.35},0).wait(1).to({rotation:94.5254,x:927.85,y:899.75},0).wait(1).to({rotation:27.0253,x:969.15,y:854.5},0).wait(1).to({rotation:-40.4748,x:1010.55,y:809.25},0).wait(1).to({rotation:-107.9749,x:1051.95,y:764.05},0).wait(1).to({rotation:-175.475,x:1093.35,y:718.75},0).wait(1).to({rotation:-152.9755,x:1127.85,y:680.55},0).wait(1).to({rotation:-130.4761,x:1162.25,y:642.45},0).wait(1).to({rotation:-107.9766,x:1196.7,y:604.35},0).wait(1).to({rotation:-85.4772,x:1231.15,y:566.15},0).wait(1).to({rotation:-96.7271,x:1265.6,y:539.05},0).wait(1).to({rotation:-107.9771,x:1299.95,y:511.9},0).wait(1).to({rotation:-119.227,x:1334.35,y:484.75},0).wait(1).to({rotation:-130.477,x:1368.75,y:457.55},0).wait(1).to({rotation:-115.4772,x:1392.45,y:464.05},0).wait(1).to({rotation:-100.4774,x:1416.15,y:470.5},0).wait(1).to({rotation:-85.4777,x:1439.85,y:476.95},0).wait(1).to({rotation:-70.4779,x:1463.55,y:483.45},0).wait(1).to({rotation:-77.9782,x:1439.85,y:473.05},0).wait(1).to({rotation:-85.4784,x:1416.15,y:462.75},0).wait(1).to({rotation:-92.9787,x:1392.45,y:452.4},0).wait(1).to({rotation:-100.479,x:1368.75,y:442.1},0).wait(1).to({rotation:-106.9074,x:1333.2,y:434.9},0).wait(1).to({rotation:-113.3359,x:1297.7,y:427.7},0).wait(1).to({rotation:-119.7643,x:1262.2,y:420.5},0).wait(1).to({rotation:-126.1927,x:1226.7,y:413.3},0).wait(1).to({rotation:-132.6211,x:1180.1,y:435.95},0).wait(1).to({rotation:-139.0496,x:1133.55,y:458.6},0).wait(1).to({rotation:-145.478,x:1087,y:481.2},0).wait(1).to({rotation:-111.1924,x:1040.45,y:503.9},0).wait(1).to({rotation:-76.9069,x:1004.25,y:547.85},0).wait(1).to({rotation:-42.6213,x:967.95,y:591.8},0).wait(1).to({rotation:-8.3357,x:931.75,y:635.7},0).wait(1).to({rotation:25.9499,x:895.55,y:679.6},0).wait(1).to({rotation:60.2354,x:857.35,y:735.75},0).wait(1).to({rotation:94.521,x:819.3,y:791.9},0).wait(1).to({x:781.15,y:848.05},0).wait(1).to({x:743,y:904.2},0).wait(47));

	// Слой_10
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(1440.5,927,1,1,0,0,0,126.5,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:82.1,y:927.1},0).wait(136).to({rotation:-14.9989,x:1463.1,y:908.9},0).wait(1).to({rotation:-29.9979,x:1487.95,y:884.1},0).wait(1).to({rotation:-44.9965,x:1510,y:838.55},0).wait(1).to({rotation:-59.9962,x:1586.7,y:794.85},0).wait(1).to({rotation:-119.996,x:1640.5,y:775.6},0).wait(1).to({rotation:-149.994,x:1702.2,y:794.75},0).wait(1).to({rotation:-164.995,x:1752,y:846.9},0).wait(1).to({rotation:-179.995,x:1807.9,y:906.9},0).wait(5).to({_off:true},1).wait(2));

	// Слой_9
	this.instance_4 = new lib._4_Монтажнаяобласть1();
	this.instance_4.setTransform(1309,853,0.6106,0.6106);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57).to({_off:true},93).wait(2));

	// Боулинг
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(1043.75,916.5,1,1,0,0,0,38.4,38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:38.3,regY:38.3,x:1043.65,y:916.4},0).wait(113).to({scaleX:0.9884,scaleY:0.9884,x:1054.5,y:893.1},0).wait(1).to({scaleX:0.9768,scaleY:0.9768,x:1065.35,y:869.8},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:1076.25,y:846.5},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,x:1087.1,y:823.2},0).wait(1).to({scaleX:0.942,scaleY:0.942,x:1114.05,y:782.55},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:1141,y:741.85},0).wait(1).to({scaleX:0.9188,scaleY:0.9188,x:1167.9,y:701.15},0).wait(1).to({scaleX:0.9072,scaleY:0.9072,x:1197.55,y:651.45},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:1227.2,y:601.8},0).wait(1).to({scaleX:0.8841,scaleY:0.8841,x:1256.85,y:552.1},0).wait(1).to({scaleX:0.8725,scaleY:0.8725,x:1279.35,y:519.7},0).wait(1).to({scaleX:0.8609,scaleY:0.8609,x:1301.8,y:487.25},0).wait(1).to({scaleX:0.8493,scaleY:0.8493,x:1324.3,y:454.85},0).wait(1).to({scaleX:0.8377,scaleY:0.8377,x:1350.5,y:448.65},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,x:1376.75,y:442.4},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1402.95,y:436.2},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,x:1419.5,y:454.8},0).wait(1).to({scaleX:0.7913,scaleY:0.7913,x:1436.1,y:473.45},0).wait(1).to({scaleX:0.7797,scaleY:0.7797,x:1436,y:556.2},0).wait(1).to({scaleX:0.7681,scaleY:0.7681,x:1435.95,y:639},0).wait(1).to({scaleX:0.7565,scaleY:0.7565,x:1427.7,y:716.9},0).wait(1).to({scaleX:0.7449,scaleY:0.7449,x:1419.45,y:794.8},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:1410.15,y:841.3},0).wait(1).to({scaleX:0.7217,scaleY:0.7217,x:1400.8,y:887.75},0).wait(1).to({scaleX:0.7101,scaleY:0.7101,x:1406.95,y:896.95},0).wait(1).to({scaleX:0.6985,scaleY:0.6985,x:1413.1,y:906.2},0).wait(1).to({scaleX:0.6869,scaleY:0.6869,x:1425.4,y:908.25},0).wait(1).to({scaleX:0.6754,scaleY:0.6754},0).wait(1).to({scaleX:0.5232,scaleY:0.5232,x:1428.55,y:919.8},0).wait(1).to({scaleX:0.3711,scaleY:0.3711,y:927.15},0).wait(7).to({_off:true},1).wait(1));

	// Слой_4
	this.instance_6 = new lib._3_Монтажнаяобласть1();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(152));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,974.4000000000001,540);
// library properties:
lib.properties = {
	id: 'A07700036E682242A5115A442F08D73B',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2 работа_atlas_1.png", id:"2 работа_atlas_1"},
		{src:"images/2 работа_atlas_2.png", id:"2 работа_atlas_2"}
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
an.compositions['A07700036E682242A5115A442F08D73B'] = {
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