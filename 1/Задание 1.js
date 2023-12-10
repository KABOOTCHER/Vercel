(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание 1_atlas_1", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_2", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_3", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_4", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_5", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_6", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_7", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_8", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_9", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_10", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_11", frames: [[0,0,1080,1080]]},
		{name:"Задание 1_atlas_12", frames: [[0,0,1080,1080]]}
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



(lib._09 = function() {
	this.initialize(ss["Задание 1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.initialize(ss["Задание 1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.initialize(ss["Задание 1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.initialize(ss["Задание 1_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.initialize(ss["Задание 1_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["Задание 1_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.initialize(ss["Задание 1_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["Задание 1_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["Задание 1_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["Задание 1_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.initialize(ss["Задание 1_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.initialize(ss["Задание 1_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Задание1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Слой_1
	this.instance = new lib._3();
	this.instance.setTransform(420,0);

	this.instance_1 = new lib._4();
	this.instance_1.setTransform(420,0);

	this.instance_2 = new lib._5();
	this.instance_2.setTransform(420,0);

	this.instance_3 = new lib._6();
	this.instance_3.setTransform(420,0);

	this.instance_4 = new lib._5();
	this.instance_4.setTransform(420,0);

	this.instance_5 = new lib._4();
	this.instance_5.setTransform(420,0);

	this.instance_6 = new lib._3();
	this.instance_6.setTransform(420,0);

	this.instance_7 = new lib._7();
	this.instance_7.setTransform(420,0);

	this.instance_8 = new lib._6();
	this.instance_8.setTransform(420,0);

	this.instance_9 = new lib._5();
	this.instance_9.setTransform(420,0);

	this.instance_10 = new lib._4();
	this.instance_10.setTransform(420,0);

	this.instance_11 = new lib._3();
	this.instance_11.setTransform(420,0);

	this.instance_12 = new lib._8();
	this.instance_12.setTransform(420,0);

	this.instance_13 = new lib._7();
	this.instance_13.setTransform(420,0);

	this.instance_14 = new lib._09();
	this.instance_14.setTransform(420,0);

	this.instance_15 = new lib._8();
	this.instance_15.setTransform(420,0);

	this.instance_16 = new lib._7();
	this.instance_16.setTransform(420,0);

	this.instance_17 = new lib._6();
	this.instance_17.setTransform(420,0);

	this.instance_18 = new lib._10();
	this.instance_18.setTransform(420,0);

	this.instance_19 = new lib._09();
	this.instance_19.setTransform(420,0);

	this.instance_20 = new lib._8();
	this.instance_20.setTransform(420,0);

	this.instance_21 = new lib._7();
	this.instance_21.setTransform(420,0);

	this.instance_22 = new lib._6();
	this.instance_22.setTransform(420,0);

	this.instance_23 = new lib._5();
	this.instance_23.setTransform(420,0);

	this.instance_24 = new lib._4();
	this.instance_24.setTransform(420,0);

	this.instance_25 = new lib._3();
	this.instance_25.setTransform(420,0);

	this.instance_26 = new lib._11();
	this.instance_26.setTransform(420,0);

	this.instance_27 = new lib._10();
	this.instance_27.setTransform(420,0);

	this.instance_28 = new lib._09();
	this.instance_28.setTransform(420,0);

	this.instance_29 = new lib._8();
	this.instance_29.setTransform(420,0);

	this.instance_30 = new lib._7();
	this.instance_30.setTransform(420,0);

	this.instance_31 = new lib._6();
	this.instance_31.setTransform(420,0);

	this.instance_32 = new lib._5();
	this.instance_32.setTransform(420,0);

	this.instance_33 = new lib._4();
	this.instance_33.setTransform(420,0);

	this.instance_34 = new lib._3();
	this.instance_34.setTransform(420,0);

	this.instance_35 = new lib._12();
	this.instance_35.setTransform(420,0);

	this.instance_36 = new lib._13();
	this.instance_36.setTransform(420,0);

	this.instance_37 = new lib._12();
	this.instance_37.setTransform(420,0);

	this.instance_38 = new lib._14();
	this.instance_38.setTransform(420,0);

	this.instance_39 = new lib._12();
	this.instance_39.setTransform(420,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance_13},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7},{t:this.instance_12}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_17},{t:this.instance_16},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance_13},{t:this.instance_15},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7},{t:this.instance_12},{t:this.instance_14}]},1).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_17},{t:this.instance_16},{t:this.instance_20},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance_13},{t:this.instance_15},{t:this.instance_19},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7},{t:this.instance_12},{t:this.instance_14},{t:this.instance_18}]},1).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_29},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_17},{t:this.instance_16},{t:this.instance_20},{t:this.instance_28},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance_13},{t:this.instance_15},{t:this.instance_19},{t:this.instance_27},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7},{t:this.instance_12},{t:this.instance_14},{t:this.instance_18},{t:this.instance_26}]},1).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_29},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_17},{t:this.instance_16},{t:this.instance_20},{t:this.instance_28},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance_13},{t:this.instance_15},{t:this.instance_19},{t:this.instance_27},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7},{t:this.instance_12},{t:this.instance_14},{t:this.instance_18},{t:this.instance_26},{t:this.instance_35}]},1).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_29},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_17},{t:this.instance_16},{t:this.instance_20},{t:this.instance_28},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance_13},{t:this.instance_15},{t:this.instance_19},{t:this.instance_27},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7},{t:this.instance_12},{t:this.instance_14},{t:this.instance_18},{t:this.instance_26},{t:this.instance_37},{t:this.instance_35},{t:this.instance_36}]},1).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_29},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_17},{t:this.instance_16},{t:this.instance_20},{t:this.instance_28},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_8},{t:this.instance_13},{t:this.instance_15},{t:this.instance_19},{t:this.instance_27},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_7},{t:this.instance_12},{t:this.instance_14},{t:this.instance_18},{t:this.instance_26},{t:this.instance_39},{t:this.instance_37},{t:this.instance_35},{t:this.instance_36},{t:this.instance_38}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1380,540,120,540);
// library properties:
lib.properties = {
	id: 'A869B50AAAFCA7409A8E9E9F35142D5D',
	width: 1920,
	height: 1080,
	fps: 6,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Задание 1_atlas_1.png", id:"Задание 1_atlas_1"},
		{src:"images/Задание 1_atlas_2.png", id:"Задание 1_atlas_2"},
		{src:"images/Задание 1_atlas_3.png", id:"Задание 1_atlas_3"},
		{src:"images/Задание 1_atlas_4.png", id:"Задание 1_atlas_4"},
		{src:"images/Задание 1_atlas_5.png", id:"Задание 1_atlas_5"},
		{src:"images/Задание 1_atlas_6.png", id:"Задание 1_atlas_6"},
		{src:"images/Задание 1_atlas_7.png", id:"Задание 1_atlas_7"},
		{src:"images/Задание 1_atlas_8.png", id:"Задание 1_atlas_8"},
		{src:"images/Задание 1_atlas_9.png", id:"Задание 1_atlas_9"},
		{src:"images/Задание 1_atlas_10.png", id:"Задание 1_atlas_10"},
		{src:"images/Задание 1_atlas_11.png", id:"Задание 1_atlas_11"},
		{src:"images/Задание 1_atlas_12.png", id:"Задание 1_atlas_12"}
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
an.compositions['A869B50AAAFCA7409A8E9E9F35142D5D'] = {
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