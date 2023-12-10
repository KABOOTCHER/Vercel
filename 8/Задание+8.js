(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание_8_atlas_1", frames: [[0,0,512,512],[0,514,512,512]]}
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



(lib.freeiconvikingship6201970 = function() {
	this.initialize(ss["Задание_8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.freeiconvikingship6981410 = function() {
	this.initialize(ss["Задание_8_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1228 = function() {
	this.initialize(img.CachedBmp_1228);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4586,1184);


(lib.CachedBmp_1227 = function() {
	this.initialize(img.CachedBmp_1227);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4586,1184);


(lib.CachedBmp_1226 = function() {
	this.initialize(img.CachedBmp_1226);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4586,1184);


(lib.CachedBmp_1229 = function() {
	this.initialize(img.CachedBmp_1229);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4487,2799);// helper functions:

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


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1229();
	this.instance.setTransform(-1121.7,-699.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-1121.7,-699.6,2243.5,1399.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.freeiconvikingship6201970();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,512,512), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.freeiconvikingship6981410();
	this.instance.setTransform(512,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,512,512), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1228();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,2293,592), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1227();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,2293,592), null);


(lib.Волна = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1226();
	this.instance.setTransform(-1146.4,-295.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1146.4,-295.9,2293,592);


// stage content:
(lib.Безымянный4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage_31);
		
		function fl_ClickToGoToWebPage_31() {
			window.open("https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BA%D0%B8%D0%BD%D0%B3%D0%B8", "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_32);
		
		function fl_ClickToGoToWebPage_32() {
			window.open("https://ru.wikipedia.org/wiki/%D0%94%D1%80%D0%B0%D0%BA%D0%BA%D0%B0%D1%80", "_blank");
		}
		playSound("_742a956a6e5e6b0");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95));

	// Слой_1
	this.instance = new lib.Волна("synched",0);
	this.instance.setTransform(936.8,1082.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:947.7409,y:1083.1136},0).wait(1).to({x:958.6818,y:1083.5273},0).wait(1).to({x:969.6227,y:1083.9409},0).wait(1).to({x:980.5636,y:1084.3545},0).wait(1).to({x:991.5046,y:1084.7682},0).wait(1).to({x:1002.4455,y:1085.1818},0).wait(1).to({x:1013.3864,y:1085.5955},0).wait(1).to({x:1024.3273,y:1086.0091},0).wait(1).to({x:1035.2682,y:1086.4227},0).wait(1).to({x:1046.2091,y:1086.8364},0).wait(1).to({x:1057.15,y:1087.25},0).wait(1).to({x:1037.09},0).wait(1).to({x:1017.03},0).wait(1).to({x:996.97},0).wait(1).to({x:976.91},0).wait(1).to({x:956.85},0).wait(1).to({x:936.79},0).wait(1).to({x:916.73},0).wait(1).to({x:896.67},0).wait(1).to({x:876.61},0).wait(1).to({x:856.55},0).wait(1).to({x:877.5909},0).wait(1).to({x:898.6318},0).wait(1).to({x:919.6727},0).wait(1).to({x:940.7136},0).wait(1).to({x:961.7546},0).wait(1).to({x:982.7955},0).wait(1).to({x:1003.8364},0).wait(1).to({x:1024.8773},0).wait(1).to({x:1045.9182},0).wait(1).to({x:1066.9591},0).wait(1).to({x:1088},0).wait(1).to({x:1067.2409},0).wait(1).to({x:1046.4818},0).wait(1).to({x:1025.7227},0).wait(1).to({x:1004.9636},0).wait(1).to({x:984.2046},0).wait(1).to({x:963.4455},0).wait(1).to({x:942.6864},0).wait(1).to({x:921.9273},0).wait(1).to({x:901.1682},0).wait(1).to({x:880.4091},0).wait(1).to({x:859.65},0).wait(1).to({x:882.48},0).wait(1).to({x:905.31},0).wait(1).to({x:928.14},0).wait(1).to({x:950.97},0).wait(1).to({x:973.8},0).wait(1).to({x:959.7182},0).wait(1).to({x:945.6364},0).wait(1).to({x:931.5546},0).wait(1).to({x:917.4727},0).wait(1).to({x:903.3909},0).wait(1).to({x:889.3091},0).wait(1).to({x:875.2273},0).wait(1).to({x:861.1455},0).wait(1).to({x:847.0636},0).wait(1).to({x:832.9818},0).wait(1).to({x:818.9},0).wait(1).to({x:843.98},0).wait(1).to({x:869.06},0).wait(1).to({x:894.14},0).wait(1).to({x:919.22},0).wait(1).to({x:944.3},0).wait(1).to({x:969.38},0).wait(1).to({x:994.46},0).wait(1).to({x:1019.54},0).wait(1).to({x:1044.62},0).wait(1).to({x:1069.7},0).wait(1).to({x:1047.5167},0).wait(1).to({x:1025.3333},0).wait(1).to({x:1003.15},0).wait(1).to({x:980.9667},0).wait(1).to({x:958.7833},0).wait(1).to({x:936.6},0).wait(1).to({x:914.4167},0).wait(1).to({x:892.2333},0).wait(1).to({x:870.05},0).wait(1).to({x:847.8667},0).wait(1).to({x:825.6833},0).wait(1).to({x:803.5},0).wait(1).to({x:825.4654},0).wait(1).to({x:847.4308},0).wait(1).to({x:869.3962},0).wait(1).to({x:891.3615},0).wait(1).to({x:913.3269},0).wait(1).to({x:935.2923},0).wait(1).to({x:957.2577},0).wait(1).to({x:979.2231},0).wait(1).to({x:1001.1885},0).wait(1).to({x:1023.1538},0).wait(1).to({x:1045.1192},0).wait(1).to({x:1067.0846},0).wait(1).to({x:1089.05},0).wait(1));

	// Слой_7
	this.movieClip_2 = new lib.Символ4();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(2203.5,700,1,1,0,0,180,256,256);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({x:2203.3},0).wait(1).to({x:2203.1},0).wait(1).to({x:2202.9},0).wait(1).to({x:2202.75},0).wait(1).to({x:2202.55},0).wait(1).to({x:2202.35},0).wait(1).to({x:2202.15},0).wait(1).to({x:2202},0).wait(1).to({x:2201.8},0).wait(1).to({x:2201.6},0).wait(1).to({x:2201.4},0).wait(1).to({x:2201.25},0).wait(1).to({x:2201.05},0).wait(1).to({x:2200.85},0).wait(1).to({x:2200.65},0).wait(1).to({x:2200.5},0).wait(1).to({x:2200.3},0).wait(1).to({x:2200.1},0).wait(1).to({x:2199.9},0).wait(1).to({x:2199.75},0).wait(1).to({x:2199.55},0).wait(1).to({x:2199.35},0).wait(1).to({x:2199.15},0).wait(1).to({x:2199},0).wait(1).to({x:2198.8},0).wait(1).to({x:2198.6},0).wait(1).to({x:2198.45},0).wait(1).to({x:2198.25},0).wait(1).to({x:2198.05},0).wait(1).to({x:2197.85},0).wait(1).to({x:2197.7},0).wait(1).to({x:2197.5},0).wait(1).to({x:2197.3},0).wait(1).to({x:2197.1},0).wait(1).to({x:2196.95},0).wait(1).to({x:2196.75},0).wait(1).to({x:2196.55},0).wait(1).to({x:2196.35},0).wait(1).to({x:2196.2},0).wait(1).to({x:2196},0).wait(1).to({x:2195.8},0).wait(1).to({x:2195.6},0).wait(1).to({x:2195.45},0).wait(1).to({x:2195.25},0).wait(1).to({x:2195.05},0).wait(1).to({x:2194.85},0).wait(1).to({x:2194.7},0).wait(1).to({x:2194.5},0).wait(1).to({x:2194.3},0).wait(1).to({x:2194.15},0).wait(1).to({x:2109.45},0).wait(1).to({x:2024.8},0).wait(1).to({x:1940.1},0).wait(1).to({x:1855.45},0).wait(1).to({x:1770.75},0).wait(1).to({x:1686.1},0).wait(1).to({x:1601.45},0).wait(1).to({x:1542.45,y:689.5},0).wait(1).to({x:1483.5,y:679.05},0).wait(1).to({x:1424.55,y:668.55},0).wait(1).to({x:1365.6,y:658.1},0).wait(1).to({x:1306.65,y:647.6},0).wait(1).to({x:1247.7,y:637.15},0).wait(1).to({x:1188.75,y:626.65},0).wait(1).to({x:1129.8,y:616.2},0).wait(1).to({x:1077.35,y:621.35},0).wait(1).to({x:1024.95,y:626.5},0).wait(1).to({x:972.55,y:631.7},0).wait(1).to({x:920.15,y:636.85},0).wait(1).to({x:867.75,y:642.05},0).wait(1).to({x:815.35,y:647.2},0).wait(1).to({x:762.95,y:652.4},0).wait(1).to({x:710.55,y:657.55},0).wait(1).to({x:658.15,y:662.75},0).wait(1).to({x:619.65,y:657.75},0).wait(1).to({x:581.2,y:652.8},0).wait(1).to({x:542.7,y:647.85},0).wait(1).to({x:504.25,y:642.85},0).wait(1).to({x:465.75,y:637.9},0).wait(1).to({x:427.3,y:632.95},0).wait(1).to({x:388.8,y:627.95},0).wait(1).to({x:350.35,y:623},0).wait(1).to({x:311.85,y:618.05},0).wait(1).to({x:273.4,y:613.1},0).wait(1).to({x:219.4,y:621.75},0).wait(1).to({x:165.4,y:630.45},0).wait(1).to({x:111.4,y:639.15},0).wait(1).to({x:57.4,y:647.85},0).wait(1).to({x:3.45,y:656.55},0).wait(1).to({x:-50.55,y:665.2},0).wait(1).to({x:-104.55,y:673.9},0).wait(1).to({x:-158.55,y:682.6},0).wait(1).to({x:-212.55,y:691.3},0).wait(1).to({x:-266.5,y:700},0).wait(1));

	// Слой_2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(958.85,966.6,1,1,0,0,0,1146.4,295.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1146.5,regY:296,x:948.05,y:967.8},0).wait(1).to({x:937.1,y:968.9},0).wait(1).to({x:926.15,y:970},0).wait(1).to({x:915.25,y:971.1},0).wait(1).to({x:904.3,y:972.2},0).wait(1).to({x:893.35,y:973.3},0).wait(1).to({x:882.4,y:974.4},0).wait(1).to({x:871.5,y:975.5},0).wait(1).to({x:860.55,y:976.6},0).wait(1).to({x:849.6,y:977.7},0).wait(1).to({x:838.65,y:978.8},0).wait(1).to({x:859.65},0).wait(1).to({x:880.65},0).wait(1).to({x:901.6},0).wait(1).to({x:922.6},0).wait(1).to({x:943.55},0).wait(1).to({x:964.55},0).wait(1).to({x:985.55},0).wait(1).to({x:1006.5},0).wait(1).to({x:1027.5},0).wait(1).to({x:1048.45},0).wait(1).to({x:1028.85},0).wait(1).to({x:1009.2},0).wait(1).to({x:989.6},0).wait(1).to({x:969.95},0).wait(1).to({x:950.3},0).wait(1).to({x:930.7},0).wait(1).to({x:911.05},0).wait(1).to({x:891.4},0).wait(1).to({x:871.8},0).wait(1).to({x:852.15},0).wait(1).to({x:832.5},0).wait(1).to({x:853.85},0).wait(1).to({x:875.15},0).wait(1).to({x:896.45},0).wait(1).to({x:917.8},0).wait(1).to({x:939.1},0).wait(1).to({x:960.4},0).wait(1).to({x:981.7},0).wait(1).to({x:1003.05},0).wait(1).to({x:1024.35},0).wait(1).to({x:1045.65},0).wait(1).to({x:1066.95},0).wait(1).to({x:1048.35},0).wait(1).to({x:1029.75},0).wait(1).to({x:1011.15},0).wait(1).to({x:992.55},0).wait(1).to({x:973.9},0).wait(1).to({x:985.8},0).wait(1).to({x:997.7},0).wait(1).to({x:1009.55},0).wait(1).to({x:1021.45},0).wait(1).to({x:1033.35},0).wait(1).to({x:1045.2},0).wait(1).to({x:1057.1},0).wait(1).to({x:1069},0).wait(1).to({x:1080.85},0).wait(1).to({x:1092.75},0).wait(1).to({x:1104.6},0).wait(1).to({x:1077.5},0).wait(1).to({x:1050.4},0).wait(1).to({x:1023.3},0).wait(1).to({x:996.2},0).wait(1).to({x:969.1},0).wait(1).to({x:942},0).wait(1).to({x:914.9},0).wait(1).to({x:887.8},0).wait(1).to({x:860.7},0).wait(1).to({x:833.55},0).wait(1).to({x:856.15},0).wait(1).to({x:878.75},0).wait(1).to({x:901.35},0).wait(1).to({x:923.9},0).wait(1).to({x:946.5},0).wait(1).to({x:969.1},0).wait(1).to({x:991.7},0).wait(1).to({x:1014.25},0).wait(1).to({x:1036.85},0).wait(1).to({x:1059.45},0).wait(1).to({x:1082.05},0).wait(1).to({x:1104.6},0).wait(1).to({x:1084.9},0).wait(1).to({x:1065.15},0).wait(1).to({x:1045.45},0).wait(1).to({x:1025.7},0).wait(1).to({x:1005.95},0).wait(1).to({x:986.25},0).wait(1).to({x:966.5},0).wait(1).to({x:946.8},0).wait(1).to({x:927.05},0).wait(1).to({x:907.3},0).wait(1).to({x:887.6},0).wait(1).to({x:867.85},0).wait(1).to({x:848.1},0).wait(1));

	// Слой_6
	this.movieClip_1 = new lib.Символ3();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(297.15,529.3,1,0.9922,0,0,0,256.1,256);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({regX:256,x:326.5,y:532.35},0).wait(1).to({x:355.95,y:535.4},0).wait(1).to({x:385.4,y:538.5},0).wait(1).to({x:414.85,y:541.55},0).wait(1).to({x:444.3,y:544.6},0).wait(1).to({x:473.75,y:547.7},0).wait(1).to({x:503.2,y:550.75},0).wait(1).to({x:532.65,y:553.8},0).wait(1).to({x:562.1,y:556.9},0).wait(1).to({x:591.55,y:559.95},0).wait(1).to({x:621.05,y:563},0).wait(1).to({x:656.5,y:560.25},0).wait(1).to({x:692,y:557.45},0).wait(1).to({x:727.45,y:554.7},0).wait(1).to({x:762.95,y:551.9},0).wait(1).to({x:798.45,y:549.15},0).wait(1).to({x:833.9,y:546.35},0).wait(1).to({x:869.4,y:543.6},0).wait(1).to({x:904.85,y:540.8},0).wait(1).to({x:940.35,y:538.05},0).wait(1).to({x:975.85,y:535.25},0).wait(1).to({x:1006.95,y:538.35},0).wait(1).to({x:1038.1,y:541.45},0).wait(1).to({x:1069.25,y:544.55},0).wait(1).to({x:1100.35,y:547.6},0).wait(1).to({x:1131.5,y:550.7},0).wait(1).to({x:1162.65,y:553.8},0).wait(1).to({x:1193.8,y:556.9},0).wait(1).to({x:1224.9,y:559.95},0).wait(1).to({x:1256.05,y:563.05},0).wait(1).to({x:1287.2,y:566.15},0).wait(1).to({x:1318.35,y:569.2},0).wait(1).to({x:1372.9,y:573.65},0).wait(1).to({x:1427.5,y:578.1},0).wait(1).to({x:1482.05,y:582.55},0).wait(1).to({x:1536.65,y:586.95},0).wait(1).to({x:1591.2,y:591.4},0).wait(1).to({x:1645.8,y:595.85},0).wait(1).to({x:1700.35,y:600.25},0).wait(1).to({x:1754.95,y:604.7},0).wait(1).to({x:1809.5,y:609.15},0).wait(1).to({x:1864.1,y:613.55},0).wait(1).to({x:1918.65,y:618},0).wait(1).to({x:1973.25,y:622.45},0).wait(1).to({x:2027.8,y:626.85},0).wait(1).to({x:2082.4,y:631.3},0).wait(1).to({x:2136.95,y:635.75},0).wait(1).to({x:2191.55,y:640.15},0).to({_off:true},1).wait(46));

	// Слой_3
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(1005.8,858.1,1,1,0,0,0,1146.4,295.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:1146.5,regY:296,x:1015.75,y:858.2},0).wait(1).to({x:1025.55},0).wait(1).to({x:1035.4},0).wait(1).to({x:1045.2},0).wait(1).to({x:1055},0).wait(1).to({x:1064.85},0).wait(1).to({x:1074.65},0).wait(1).to({x:1084.45},0).wait(1).to({x:1094.3},0).wait(1).to({x:1104.1},0).wait(1).to({x:1113.9},0).wait(1).to({x:1088.2},0).wait(1).to({x:1062.45},0).wait(1).to({x:1036.75},0).wait(1).to({x:1011},0).wait(1).to({x:985.3},0).wait(1).to({x:959.55},0).wait(1).to({x:933.85},0).wait(1).to({x:908.1},0).wait(1).to({x:882.4},0).wait(1).to({x:856.65},0).wait(1).to({x:877.7},0).wait(1).to({x:898.75},0).wait(1).to({x:919.8},0).wait(1).to({x:940.85},0).wait(1).to({x:961.9},0).wait(1).to({x:982.9},0).wait(1).to({x:1003.95},0).wait(1).to({x:1025},0).wait(1).to({x:1046.05},0).wait(1).to({x:1067.1},0).wait(1).to({x:1088.1},0).wait(1).to({x:1067.35},0).wait(1).to({x:1046.6},0).wait(1).to({x:1025.85},0).wait(1).to({x:1005.1},0).wait(1).to({x:984.35},0).wait(1).to({x:963.6},0).wait(1).to({x:942.85},0).wait(1).to({x:922.1},0).wait(1).to({x:901.35},0).wait(1).to({x:880.6},0).wait(1).to({x:859.8},0).wait(1).to({x:882.65},0).wait(1).to({x:905.45},0).wait(1).to({x:928.3},0).wait(1).to({x:951.1},0).wait(1).to({x:973.9},0).wait(1).to({x:959.85},0).wait(1).to({x:945.75},0).wait(1).to({x:931.7},0).wait(1).to({x:917.6},0).wait(1).to({x:903.5},0).wait(1).to({x:889.45},0).wait(1).to({x:875.35},0).wait(1).to({x:861.25},0).wait(1).to({x:847.2},0).wait(1).to({x:833.1},0).wait(1).to({x:819},0).wait(1).to({x:844.1},0).wait(1).to({x:869.2},0).wait(1).to({x:894.25},0).wait(1).to({x:919.35},0).wait(1).to({x:944.45},0).wait(1).to({x:969.5},0).wait(1).to({x:994.6},0).wait(1).to({x:1019.7},0).wait(1).to({x:1044.75},0).wait(1).to({x:1069.85},0).wait(1).to({x:1094.9},0).wait(1).to({x:1070.3},0).wait(1).to({x:1045.65},0).wait(1).to({x:1021},0).wait(1).to({x:996.35},0).wait(1).to({x:971.7},0).wait(1).to({x:947.1},0).wait(1).to({x:922.45},0).wait(1).to({x:897.8},0).wait(1).to({x:873.15},0).wait(1).to({x:848.5},0).wait(1).to({x:823.85},0).wait(1).to({x:842.1},0).wait(1).to({x:860.35},0).wait(1).to({x:878.6},0).wait(1).to({x:896.85},0).wait(1).to({x:915.1},0).wait(1).to({x:933.35},0).wait(1).to({x:951.6},0).wait(1).to({x:969.85},0).wait(1).to({x:988.1},0).wait(1).to({x:1006.35},0).wait(1).to({x:1024.6},0).wait(1).to({x:1042.85},0).wait(1).to({x:1061.05},0).wait(1));

	// Слой_10
	this.movieClip_3 = new lib.Символ5();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(1033.35,636.15);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,476.5,2022,906.8);
// library properties:
lib.properties = {
	id: 'E35B11C3D9229B4097B6ACBDA715113B',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1228.png?1694709009867", id:"CachedBmp_1228"},
		{src:"images/CachedBmp_1227.png?1694709009867", id:"CachedBmp_1227"},
		{src:"images/CachedBmp_1226.png?1694709009867", id:"CachedBmp_1226"},
		{src:"images/CachedBmp_1229.png?1694709009867", id:"CachedBmp_1229"},
		{src:"images/Задание_8_atlas_1.png?1694709009812", id:"Задание_8_atlas_1"},
		{src:"sounds/_742a956a6e5e6b0.mp3?1694709009867", id:"_742a956a6e5e6b0"}
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
an.compositions['E35B11C3D9229B4097B6ACBDA715113B'] = {
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