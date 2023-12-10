(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.CachedBmp_119 = function() {
	this.initialize(img.CachedBmp_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2276,570);


(lib.CachedBmp_118 = function() {
	this.initialize(img.CachedBmp_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2257,517);


(lib.CachedBmp_120 = function() {
	this.initialize(img.CachedBmp_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3960,2205);


// stage content:
(lib.ВОССТАНОВИТЬ_Безымянный7_2023829105935 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Слой_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgGiA+iIAA8AMAjNAAAIAAcAg");
	var mask_graphics_1 = new cjs.Graphics().p("A2pOAIAA7/MAtTAAAIAAb/g");
	var mask_graphics_2 = new cjs.Graphics().p("A7rOAIAA7/MA3XAAAIAAb/g");
	var mask_graphics_3 = new cjs.Graphics().p("EgguAOAIAA7/MBBcAAAIAAb/g");
	var mask_graphics_4 = new cjs.Graphics().p("EglwAOAIAA7/MBLhAAAIAAb/g");
	var mask_graphics_5 = new cjs.Graphics().p("EgqzAOAIAA7/MBVmAAAIAAb/g");
	var mask_graphics_6 = new cjs.Graphics().p("Egv1AOAIAA7/MBfrAAAIAAb/g");
	var mask_graphics_7 = new cjs.Graphics().p("Eg03AOAIAA7/MBpwAAAIAAb/g");
	var mask_graphics_8 = new cjs.Graphics().p("Eg56AOAIAA7/MBz1AAAIAAb/g");
	var mask_graphics_9 = new cjs.Graphics().p("Eg+9AOAIAA7/MB97AAAIAAb/g");
	var mask_graphics_10 = new cjs.Graphics().p("EhD/AOAIAA7/MCH/AAAIAAb/g");
	var mask_graphics_11 = new cjs.Graphics().p("EhJCAOAIAA7/MCSFAAAIAAb/g");
	var mask_graphics_12 = new cjs.Graphics().p("EhOEAOAIAA7/MCcJAAAIAAb/g");
	var mask_graphics_13 = new cjs.Graphics().p("EhTGAOAIAA7/MCmOAAAIAAb/g");
	var mask_graphics_14 = new cjs.Graphics().p("Eg5rA+cIAA8BMCwTAAAIAAcBg");
	var mask_graphics_15 = new cjs.Graphics().p("EhTgAOAIAA7/MCnBAAAIAAb/g");
	var mask_graphics_16 = new cjs.Graphics().p("EhO3AOAIAA7/MCdvAAAIAAb/g");
	var mask_graphics_17 = new cjs.Graphics().p("EhKOAOAIAA7/MCUdAAAIAAb/g");
	var mask_graphics_18 = new cjs.Graphics().p("EhFlAOAIAA7/MCLLAAAIAAb/g");
	var mask_graphics_19 = new cjs.Graphics().p("EhA8AOAIAA7/MCB5AAAIAAb/g");
	var mask_graphics_20 = new cjs.Graphics().p("Eg8TAOAIAA7/MB4nAAAIAAb/g");
	var mask_graphics_21 = new cjs.Graphics().p("Eg3qAOAIAA7/MBvVAAAIAAb/g");
	var mask_graphics_22 = new cjs.Graphics().p("EgzBAOAIAA7/MBmDAAAIAAb/g");
	var mask_graphics_23 = new cjs.Graphics().p("EguYAOAIAA7/MBcxAAAIAAb/g");
	var mask_graphics_24 = new cjs.Graphics().p("EgpvAOAIAA7/MBTfAAAIAAb/g");
	var mask_graphics_25 = new cjs.Graphics().p("EglGAOAIAA7/MBKNAAAIAAb/g");
	var mask_graphics_26 = new cjs.Graphics().p("EggdAOAIAA7/MBA7AAAIAAb/g");
	var mask_graphics_27 = new cjs.Graphics().p("A70OAIAA7/MA3pAAAIAAb/g");
	var mask_graphics_28 = new cjs.Graphics().p("A3LOAIAA7/MAuXAAAIAAb/g");
	var mask_graphics_29 = new cjs.Graphics().p("EBlMA+PIAA8AMAlFAAAIAAcAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:183.525,y:400.196}).wait(1).to({graphics:mask_graphics_1,x:304.325,y:710.675}).wait(1).to({graphics:mask_graphics_2,x:354.325,y:710.575}).wait(1).to({graphics:mask_graphics_3,x:404.3,y:710.525}).wait(1).to({graphics:mask_graphics_4,x:454.325,y:710.425}).wait(1).to({graphics:mask_graphics_5,x:504.3,y:710.325}).wait(1).to({graphics:mask_graphics_6,x:554.3,y:710.225}).wait(1).to({graphics:mask_graphics_7,x:604.3,y:710.175}).wait(1).to({graphics:mask_graphics_8,x:654.275,y:710.075}).wait(1).to({graphics:mask_graphics_9,x:704.275,y:709.975}).wait(1).to({graphics:mask_graphics_10,x:754.25,y:709.875}).wait(1).to({graphics:mask_graphics_11,x:804.275,y:709.775}).wait(1).to({graphics:mask_graphics_12,x:854.25,y:709.725}).wait(1).to({graphics:mask_graphics_13,x:904.25,y:709.625}).wait(1).to({graphics:mask_graphics_14,x:759.2374,y:399.571}).wait(1).to({graphics:mask_graphics_15,x:1000.7,y:709.375}).wait(1).to({graphics:mask_graphics_16,x:1047.15,y:709.175}).wait(1).to({graphics:mask_graphics_17,x:1093.65,y:709.025}).wait(1).to({graphics:mask_graphics_18,x:1140.1,y:708.875}).wait(1).to({graphics:mask_graphics_19,x:1186.55,y:708.725}).wait(1).to({graphics:mask_graphics_20,x:1233,y:708.525}).wait(1).to({graphics:mask_graphics_21,x:1279.475,y:708.375}).wait(1).to({graphics:mask_graphics_22,x:1325.95,y:708.225}).wait(1).to({graphics:mask_graphics_23,x:1372.425,y:708.075}).wait(1).to({graphics:mask_graphics_24,x:1418.875,y:707.875}).wait(1).to({graphics:mask_graphics_25,x:1465.325,y:707.725}).wait(1).to({graphics:mask_graphics_26,x:1511.775,y:707.575}).wait(1).to({graphics:mask_graphics_27,x:1558.275,y:707.425}).wait(1).to({graphics:mask_graphics_28,x:1604.725,y:707.225}).wait(1).to({graphics:mask_graphics_29,x:884.9195,y:398.346}).wait(1));

	// Слой_3
	this.instance = new lib.CachedBmp_118();
	this.instance.setTransform(380.4,588.25,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgE8AgiQl9l8AAobQAAobF9l9QF7l7IbAAQIaAAF9F7QF9F9AAIbQAAIbl9F8Ql9F9oaAAQobAAl7l9g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AuWOXQl9l9AAoaQAAoZF9l9QF8l9IaAAQIaAAF9F9QF9F9AAIZQAAIal9F9Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF+l8IZAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoZAAl+l9g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AuXOXQl8l9AAoaQAAoZF8l9QF+l9IZAAQIbAAF8F9QF9F9AAIZQAAIal9F9Ql8F9obAAQoZAAl+l9g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoaF8l9QF9l8IaAAQIbAAF8F8QF9F9AAIaQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AuXOXQl8l9AAoaQAAoaF8l8QF+l9IZAAQIbAAF8F9QF9F8AAIaQAAIal9F9Ql8F9obAAQoZAAl+l9g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoaF8l9QF9l8IaAAQIbAAF8F8QF9F9AAIaQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoaF8l9QF9l8IaAAQIbAAF8F8QF9F9AAIaQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AuXOXQl8l9AAoaQAAoaF8l8QF9l9IaAAQIbAAF8F9QF9F8AAIaQAAIal9F9Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoaF8l9QF+l8IZAAQIbAAF8F8QF9F9AAIaQAAIbl9F8Ql8F9obAAQoZAAl+l9g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AuXOXQl8l9AAoaQAAoZF8l9QF9l9IaAAQIbAAF8F9QF9F9AAIZQAAIal9F9Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AuWOXQl9l9AAoaQAAoZF9l9QF8l9IaAAQIaAAF9F9QF9F9AAIZQAAIal9F9Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_14 = new cjs.Graphics().p("EBpbAglQl9l8AAobQAAoaF9l9QF9l8IaAAQIbAAF8F8QF9F9AAIaQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF8l8IaAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoaAAl9l9g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF8l8IaAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF9l8IZAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoZAAl9l9g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF8l8IaAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF8l8IaAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF8l8IaAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF9l8IZAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoZAAl9l9g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AuXOXQl8l8AAobQAAoZF8l+QF9l8IaAAQIbAAF8F8QF9F+AAIZQAAIbl9F8Ql8F9obAAQoaAAl9l9g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AuWOXQl9l8AAobQAAoZF9l+QF8l8IaAAQIaAAF9F8QF9F+AAIZQAAIbl9F8Ql9F9oaAAQoaAAl8l9g");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgFGAglQl9l8AAobQAAoaF9l9QF8l8IaAAQIbAAF8F8QF9F9AAIaQAAIbl9F8Ql8F9obAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:190.2,y:246.3}).wait(1).to({graphics:mask_1_graphics_1,x:351.3,y:362.65}).wait(1).to({graphics:mask_1_graphics_2,x:452.25,y:362.7}).wait(1).to({graphics:mask_1_graphics_3,x:553.15,y:362.75}).wait(1).to({graphics:mask_1_graphics_4,x:654.1,y:362.8}).wait(1).to({graphics:mask_1_graphics_5,x:755,y:362.85}).wait(1).to({graphics:mask_1_graphics_6,x:855.9,y:362.9}).wait(1).to({graphics:mask_1_graphics_7,x:956.85,y:362.95}).wait(1).to({graphics:mask_1_graphics_8,x:1057.75,y:362.95}).wait(1).to({graphics:mask_1_graphics_9,x:1158.65,y:363}).wait(1).to({graphics:mask_1_graphics_10,x:1259.55,y:363.05}).wait(1).to({graphics:mask_1_graphics_11,x:1360.5,y:363.1}).wait(1).to({graphics:mask_1_graphics_12,x:1461.4,y:363.15}).wait(1).to({graphics:mask_1_graphics_13,x:1562.35,y:363.2}).wait(1).to({graphics:mask_1_graphics_14,x:896.625,y:246.625}).wait(1).to({graphics:mask_1_graphics_15,x:1568.95,y:363.25}).wait(1).to({graphics:mask_1_graphics_16,x:1474.6,y:363.25}).wait(1).to({graphics:mask_1_graphics_17,x:1380.3,y:363.25}).wait(1).to({graphics:mask_1_graphics_18,x:1286,y:363.25}).wait(1).to({graphics:mask_1_graphics_19,x:1191.65,y:363.25}).wait(1).to({graphics:mask_1_graphics_20,x:1097.35,y:363.25}).wait(1).to({graphics:mask_1_graphics_21,x:1003,y:363.25}).wait(1).to({graphics:mask_1_graphics_22,x:908.7,y:363.25}).wait(1).to({graphics:mask_1_graphics_23,x:814.35,y:363.25}).wait(1).to({graphics:mask_1_graphics_24,x:720.05,y:363.25}).wait(1).to({graphics:mask_1_graphics_25,x:625.7,y:363.25}).wait(1).to({graphics:mask_1_graphics_26,x:531.4,y:363.25}).wait(1).to({graphics:mask_1_graphics_27,x:437.1,y:363.25}).wait(1).to({graphics:mask_1_graphics_28,x:342.75,y:363.25}).wait(1).to({graphics:mask_1_graphics_29,x:189.225,y:246.625}).wait(1));

	// Слой_1
	this.instance_1 = new lib.CachedBmp_119();
	this.instance_1.setTransform(380.4,225,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Слой_7
	this.instance_2 = new lib.CachedBmp_120();
	this.instance_2.setTransform(-10.75,-7.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(949.3,532.4,1020,562.5000000000001);
// library properties:
lib.properties = {
	id: 'BF37AB955B5DEE49B1E648959C84EEAA',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_119.png", id:"CachedBmp_119"},
		{src:"images/CachedBmp_118.png", id:"CachedBmp_118"},
		{src:"images/CachedBmp_120.png", id:"CachedBmp_120"}
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
an.compositions['BF37AB955B5DEE49B1E648959C84EEAA'] = {
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