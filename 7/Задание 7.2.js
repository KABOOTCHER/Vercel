(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание 7.2_atlas_1", frames: [[0,0,1197,296],[0,298,1197,296],[0,596,1197,296],[0,894,1197,296],[0,1192,1197,296],[0,1490,1197,296]]},
		{name:"Задание 7.2_atlas_2", frames: [[0,0,1197,296],[0,298,1197,296],[0,596,1197,296],[0,894,1197,296],[0,1192,1197,296],[0,1490,1197,296]]},
		{name:"Задание 7.2_atlas_3", frames: [[0,0,1197,296],[0,298,1197,296],[0,596,1197,296],[0,894,1197,296],[0,1192,1197,296],[0,1490,1197,296]]},
		{name:"Задание 7.2_atlas_4", frames: [[0,0,1197,296],[0,298,1197,296],[0,596,1197,296],[0,894,1197,296],[0,1192,1197,296],[0,1490,1197,296]]},
		{name:"Задание 7.2_atlas_5", frames: [[0,0,1197,296],[0,298,1197,296],[0,596,1197,296],[0,894,1197,296],[0,1192,922,228],[924,1192,922,228],[0,1422,922,228],[0,1652,922,228],[924,1422,922,228],[924,1652,922,228]]},
		{name:"Задание 7.2_atlas_6", frames: [[0,0,922,228],[924,0,922,228],[0,230,922,228],[924,230,922,228],[0,460,922,228],[924,460,922,228],[0,690,922,228],[924,690,922,228],[0,920,922,228],[924,920,922,228],[0,1150,922,228],[924,1150,922,228],[0,1380,922,228],[924,1380,922,228],[0,1610,922,228],[924,1610,922,228]]},
		{name:"Задание 7.2_atlas_7", frames: [[0,0,922,228],[924,0,922,228],[0,230,922,228],[924,230,922,228],[0,460,922,228],[924,460,922,228],[0,1547,1124,169],[0,1034,1125,169],[0,1718,1124,169],[0,1205,1125,169],[0,690,1127,170],[0,1376,1125,169],[0,862,1127,170]]},
		{name:"Задание 7.2_atlas_8", frames: [[0,684,1121,169],[0,342,1122,169],[0,1539,1119,169],[0,0,1123,169],[0,513,1122,169],[0,855,1121,169],[0,1197,1120,169],[0,1710,1118,169],[0,1026,1121,169],[0,171,1123,169],[0,1368,1120,169]]},
		{name:"Задание 7.2_atlas_9", frames: [[0,1363,1075,171],[0,1536,1075,171],[0,1709,1075,171],[0,513,1119,168],[0,1023,1115,168],[0,0,1117,169],[0,171,1116,169],[0,683,1116,168],[0,342,1116,169],[0,853,1116,168],[0,1193,1115,168]]},
		{name:"Задание 7.2_atlas_10", frames: [[0,0,1075,171],[0,173,1075,171],[0,346,1075,171],[0,519,1075,171],[0,692,1075,171],[0,865,1075,171],[0,1038,1075,171],[0,1211,1075,171],[0,1384,1075,171],[0,1557,1075,171],[0,1730,1075,171]]},
		{name:"Задание 7.2_atlas_11", frames: [[0,0,1075,171],[0,173,1075,171],[0,346,1075,171],[0,519,1079,168],[0,689,1079,168]]}
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



(lib.CachedBmp_113 = function() {
	this.initialize(ss["Задание 7.2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["Задание 7.2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["Задание 7.2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["Задание 7.2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["Задание 7.2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["Задание 7.2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["Задание 7.2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["Задание 7.2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["Задание 7.2_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["Задание 7.2_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["Задание 7.2_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["Задание 7.2_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["Задание 7.2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["Задание 7.2_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["Задание 7.2_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["Задание 7.2_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["Задание 7.2_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["Задание 7.2_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["Задание 7.2_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["Задание 7.2_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["Задание 7.2_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["Задание 7.2_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["Задание 7.2_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["Задание 7.2_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["Задание 7.2_atlas_10"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["Задание 7.2_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["Задание 7.2_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["Задание 7.2_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["Задание 7.2_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["Задание 7.2_atlas_6"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Задание 7.2_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Задание 7.2_atlas_11"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Задание 7.2_atlas_9"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["Задание 7.2_atlas_7"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Задание 7.2_atlas_8"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(img.CachedBmp_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3998,2314);


// stage content:
(lib.ВОССТАНОВИТЬ_Безымянный6_2023829102929 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Слой_3
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(1145.05,279.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(1144.95,280.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(1144.8,280.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(1144.7,280.35,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(1144.55,280.45,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(1144.45,280.6,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(1144.3,280.55,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(1144.2,280.5,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_9();
	this.instance_8.setTransform(1144.05,280.4,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_10();
	this.instance_9.setTransform(1143.95,280.3,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_11();
	this.instance_10.setTransform(1143.8,280.2,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_12();
	this.instance_11.setTransform(1143.7,280.1,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_13();
	this.instance_12.setTransform(1143.55,280,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_14();
	this.instance_13.setTransform(1143.45,279.9,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_15();
	this.instance_14.setTransform(1143.4,279.85,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_16();
	this.instance_15.setTransform(1143.3,279.85,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_17();
	this.instance_16.setTransform(1143.25,279.8,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_18();
	this.instance_17.setTransform(1143.15,279.75,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_19();
	this.instance_18.setTransform(1143.1,279.75,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_20();
	this.instance_19.setTransform(1143,279.7,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_21();
	this.instance_20.setTransform(1142.95,279.65,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_22();
	this.instance_21.setTransform(1142.85,279.65,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_23();
	this.instance_22.setTransform(1142.8,279.6,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_24();
	this.instance_23.setTransform(1142.7,279.35,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_25();
	this.instance_24.setTransform(1142.65,279.1,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_26();
	this.instance_25.setTransform(1142.55,278.9,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_27();
	this.instance_26.setTransform(1142.5,278.65,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_28();
	this.instance_27.setTransform(1142.4,278.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:1145.05,y:279.95}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance,p:{x:1142.35,y:278.2}}]},1).wait(1));

	// Слой_2
	this.instance_28 = new lib.CachedBmp_58();
	this.instance_28.setTransform(202.85,512.45,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_31();
	this.instance_29.setTransform(202.85,512.45,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_32();
	this.instance_30.setTransform(202.85,512.45,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_33();
	this.instance_31.setTransform(202.85,512.45,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_34();
	this.instance_32.setTransform(202.85,512.45,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_35();
	this.instance_33.setTransform(202.85,512.45,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_36();
	this.instance_34.setTransform(202.85,512.45,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_37();
	this.instance_35.setTransform(202.8,512.4,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_38();
	this.instance_36.setTransform(202.8,512.4,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_39();
	this.instance_37.setTransform(202.8,512.4,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_40();
	this.instance_38.setTransform(202.8,512.4,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_41();
	this.instance_39.setTransform(202.8,512.4,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_42();
	this.instance_40.setTransform(202.8,512.4,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_43();
	this.instance_41.setTransform(202.8,512.4,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_44();
	this.instance_42.setTransform(202.75,512.55,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_45();
	this.instance_43.setTransform(202.7,512.7,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_46();
	this.instance_44.setTransform(202.65,512.85,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_47();
	this.instance_45.setTransform(202.65,513,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_48();
	this.instance_46.setTransform(202.6,513.15,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_49();
	this.instance_47.setTransform(202.55,513.3,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_50();
	this.instance_48.setTransform(202.5,513.45,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_51();
	this.instance_49.setTransform(202.45,513.6,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_52();
	this.instance_50.setTransform(202.4,513.75,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_53();
	this.instance_51.setTransform(202.35,513.9,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_54();
	this.instance_52.setTransform(202.3,514.05,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_55();
	this.instance_53.setTransform(202.3,514.2,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_56();
	this.instance_54.setTransform(202.25,514.35,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_57();
	this.instance_55.setTransform(202.2,514.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28,p:{x:202.85,y:512.45}}]}).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_28,p:{x:202.15,y:514.65}}]},1).wait(1));

	// Слой_4
	this.instance_56 = new lib.CachedBmp_87();
	this.instance_56.setTransform(1170.1,513.5,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_60();
	this.instance_57.setTransform(1170.05,522,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_70();
	this.instance_58.setTransform(1169.95,530.5,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_69();
	this.instance_59.setTransform(1169.9,539.05,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_63();
	this.instance_60.setTransform(1169.8,547.55,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_67();
	this.instance_61.setTransform(1169.75,556.05,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_65();
	this.instance_62.setTransform(1169.7,564.55,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_66();
	this.instance_63.setTransform(1169.6,573.1,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_68();
	this.instance_64.setTransform(1169.5,590.1,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_71();
	this.instance_65.setTransform(1169.25,615.65,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_86();
	this.instance_66.setTransform(1169.55,616.85,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_85();
	this.instance_67.setTransform(1169.85,609.55,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_84();
	this.instance_68.setTransform(1170.2,602.25,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_83();
	this.instance_69.setTransform(1170.5,594.95,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_82();
	this.instance_70.setTransform(1170.85,587.65,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_81();
	this.instance_71.setTransform(1171.2,580.35,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_80();
	this.instance_72.setTransform(1171.5,573.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_56,p:{x:1170.1,y:513.5}}]}).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58,p:{x:1169.95,y:530.5}}]},1).to({state:[{t:this.instance_59,p:{x:1169.9,y:539.05}}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61,p:{x:1169.75,y:556.05}}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_61,p:{x:1169.55,y:581.6}}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_59,p:{x:1169.4,y:598.6}}]},1).to({state:[{t:this.instance_58,p:{x:1169.35,y:607.15}}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_56,p:{x:1169.2,y:624.15}}]},1).to({state:[{t:this.instance_66,p:{x:1169.55,y:616.85}}]},1).to({state:[{t:this.instance_67,p:{x:1169.85,y:609.55}}]},1).to({state:[{t:this.instance_68,p:{x:1170.2,y:602.25}}]},1).to({state:[{t:this.instance_69,p:{x:1170.5,y:594.95}}]},1).to({state:[{t:this.instance_70,p:{x:1170.85,y:587.65}}]},1).to({state:[{t:this.instance_71,p:{x:1171.2,y:580.35}}]},1).to({state:[{t:this.instance_72,p:{x:1171.5,y:573.05}}]},1).to({state:[{t:this.instance_72,p:{x:1171.85,y:565.75}}]},1).to({state:[{t:this.instance_71,p:{x:1172.15,y:558.45}}]},1).to({state:[{t:this.instance_70,p:{x:1172.5,y:551.15}}]},1).to({state:[{t:this.instance_69,p:{x:1172.85,y:543.85}}]},1).to({state:[{t:this.instance_68,p:{x:1173.15,y:536.55}}]},1).to({state:[{t:this.instance_67,p:{x:1173.5,y:529.25}}]},1).to({state:[{t:this.instance_66,p:{x:1173.8,y:521.95}}]},1).to({state:[{t:this.instance_56,p:{x:1174.15,y:514.65}}]},1).wait(1));

	// Слой_1
	this.instance_73 = new lib.CachedBmp_116();
	this.instance_73.setTransform(203,277.4,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_89();
	this.instance_74.setTransform(203.05,277.4,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_90();
	this.instance_75.setTransform(203.15,277.45,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_91();
	this.instance_76.setTransform(203.2,277.45,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_92();
	this.instance_77.setTransform(203.3,277.5,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_93();
	this.instance_78.setTransform(203.35,277.5,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_94();
	this.instance_79.setTransform(203.4,277.55,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_95();
	this.instance_80.setTransform(203.5,277.55,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_96();
	this.instance_81.setTransform(203.55,277.6,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_97();
	this.instance_82.setTransform(203.6,277.6,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_98();
	this.instance_83.setTransform(203.7,277.65,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_99();
	this.instance_84.setTransform(203.75,277.65,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_100();
	this.instance_85.setTransform(203.85,277.7,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_101();
	this.instance_86.setTransform(203.9,277.7,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_102();
	this.instance_87.setTransform(203.8,277.75,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_103();
	this.instance_88.setTransform(203.65,277.8,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_104();
	this.instance_89.setTransform(203.55,277.8,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_105();
	this.instance_90.setTransform(203.45,277.85,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_106();
	this.instance_91.setTransform(203.3,277.9,0.5,0.5);

	this.instance_92 = new lib.CachedBmp_107();
	this.instance_92.setTransform(203.2,277.95,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_108();
	this.instance_93.setTransform(203.1,278,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_109();
	this.instance_94.setTransform(202.95,278,0.5,0.5);

	this.instance_95 = new lib.CachedBmp_110();
	this.instance_95.setTransform(202.85,278.05,0.5,0.5);

	this.instance_96 = new lib.CachedBmp_111();
	this.instance_96.setTransform(202.75,278.1,0.5,0.5);

	this.instance_97 = new lib.CachedBmp_112();
	this.instance_97.setTransform(202.6,278.15,0.5,0.5);

	this.instance_98 = new lib.CachedBmp_113();
	this.instance_98.setTransform(202.5,278.2,0.5,0.5);

	this.instance_99 = new lib.CachedBmp_114();
	this.instance_99.setTransform(202.4,278.2,0.5,0.5);

	this.instance_100 = new lib.CachedBmp_115();
	this.instance_100.setTransform(202.25,278.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_73,p:{x:203,y:277.4}}]}).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_73,p:{x:202.15,y:278.3}}]},1).wait(1));

	// Слой_5
	this.instance_101 = new lib.CachedBmp_117();
	this.instance_101.setTransform(-28.4,-36.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(29));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(931.6,503.9,1039,617.0000000000001);
// library properties:
lib.properties = {
	id: 'F8619BC22D3B514FB77F6196DC11CEDA',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_117.png", id:"CachedBmp_117"},
		{src:"images/Задание 7.2_atlas_1.png", id:"Задание 7.2_atlas_1"},
		{src:"images/Задание 7.2_atlas_2.png", id:"Задание 7.2_atlas_2"},
		{src:"images/Задание 7.2_atlas_3.png", id:"Задание 7.2_atlas_3"},
		{src:"images/Задание 7.2_atlas_4.png", id:"Задание 7.2_atlas_4"},
		{src:"images/Задание 7.2_atlas_5.png", id:"Задание 7.2_atlas_5"},
		{src:"images/Задание 7.2_atlas_6.png", id:"Задание 7.2_atlas_6"},
		{src:"images/Задание 7.2_atlas_7.png", id:"Задание 7.2_atlas_7"},
		{src:"images/Задание 7.2_atlas_8.png", id:"Задание 7.2_atlas_8"},
		{src:"images/Задание 7.2_atlas_9.png", id:"Задание 7.2_atlas_9"},
		{src:"images/Задание 7.2_atlas_10.png", id:"Задание 7.2_atlas_10"},
		{src:"images/Задание 7.2_atlas_11.png", id:"Задание 7.2_atlas_11"}
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
an.compositions['F8619BC22D3B514FB77F6196DC11CEDA'] = {
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