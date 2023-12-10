(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание 4_atlas_1", frames: [[0,0,1735,2048]]},
		{name:"Задание 4_atlas_2", frames: [[0,0,1735,2048]]},
		{name:"Задание 4_atlas_3", frames: [[0,0,1878,943],[0,945,1695,783]]},
		{name:"Задание 4_atlas_4", frames: [[0,0,1525,854],[0,856,1253,894]]},
		{name:"Задание 4_atlas_5", frames: [[0,687,1227,742],[0,1431,1549,546],[0,0,1555,685]]},
		{name:"Задание 4_atlas_6", frames: [[0,670,908,880],[0,0,1240,668],[1242,0,683,974],[910,976,683,974]]},
		{name:"Задание 4_atlas_7", frames: [[0,1374,1174,555],[685,0,1087,570],[0,0,683,974],[0,976,1662,396]]},
		{name:"Задание 4_atlas_8", frames: [[0,0,1170,492],[0,846,1070,502],[0,494,1639,350],[1072,846,646,777]]},
		{name:"Задание 4_atlas_9", frames: [[862,1696,512,278],[710,1022,418,269],[710,855,781,165],[578,622,1037,231],[0,1453,1519,241],[1521,1019,467,454],[1521,1475,446,444],[1617,492,422,525],[1157,0,702,490],[0,855,708,596],[0,0,576,853],[0,1696,860,337],[578,0,577,620]]},
		{name:"Задание 4_atlas_10", frames: [[1803,942,35,31],[0,1214,281,9],[681,706,24,25],[1355,1406,142,50],[1552,790,249,216],[0,1225,935,52],[839,802,249,216],[806,334,77,95],[879,1335,607,35],[937,1226,604,70],[507,1191,46,29],[0,690,311,40],[595,1020,251,203],[1818,737,190,203],[848,1184,361,36],[1905,1369,107,70],[393,1439,86,66],[879,1298,638,35],[0,203,328,257],[1803,975,28,29],[892,0,394,263],[1200,1440,81,62],[1905,1441,85,59],[1341,974,181,31],[0,497,335,191],[2028,0,18,18],[1966,1191,53,24],[1592,1224,349,102],[560,1279,317,78],[2028,20,15,15],[389,1123,186,66],[2027,143,21,22],[337,583,342,170],[1211,1182,85,27],[1651,1328,300,39],[0,755,342,170],[283,462,38,33],[2027,167,21,21],[2010,690,34,101],[1448,1372,54,22],[560,1403,461,27],[1519,1298,52,24],[0,462,281,31],[0,1423,112,63],[560,1372,541,29],[612,1462,53,50],[849,1440,272,24],[1103,1372,343,32],[344,755,361,29],[560,1432,287,28],[265,732,62,20],[445,1191,60,23],[706,993,89,23],[1958,260,81,18],[595,993,109,24],[1023,1406,330,32],[518,557,23,23],[0,732,263,21],[0,1145,387,67],[481,1439,75,74],[337,497,179,79],[0,1279,230,142],[1123,1440,75,74],[344,786,493,117],[0,0,558,201],[1341,802,197,170],[806,431,62,102],[1287,1020,52,52],[389,1191,54,26],[595,905,174,86],[771,905,63,84],[518,497,36,58],[1958,143,67,115],[1761,1369,142,61],[760,1462,44,27],[329,1123,57,19],[1165,468,118,64],[1761,1432,142,43],[2015,985,27,34],[251,1092,76,42],[1298,1182,40,41],[1351,1458,64,56],[555,1191,38,30],[848,1020,228,162],[667,1462,49,51],[251,927,85,83],[1417,1458,57,53],[1567,1452,67,64],[1165,265,98,201],[1986,488,62,94],[1986,584,50,104],[718,1462,40,47],[1543,1226,44,59],[1958,0,68,141],[1287,1074,52,52],[1287,1128,52,52],[1992,1441,52,52],[114,1423,79,77],[1519,1328,130,122],[336,1445,52,52],[558,1462,52,52],[195,1445,71,67],[1943,1221,94,89],[1288,0,346,262],[393,1279,165,158],[1827,281,202,205],[1840,942,173,167],[232,1279,159,164],[1283,1440,66,70],[1827,488,157,247],[330,203,225,292],[560,0,330,332],[1499,1452,66,66],[1078,1020,207,160],[681,583,121,121],[2010,835,38,39],[268,1445,66,67],[2010,876,38,39],[707,706,78,78],[1651,1369,108,108],[892,265,271,271],[2010,793,38,40],[251,1012,78,78],[1966,1111,78,78],[1304,554,246,246],[806,538,247,246],[557,334,247,247],[1569,542,247,246],[1055,554,247,246],[1569,281,256,259],[2015,952,31,31],[313,690,22,22],[2015,917,33,33],[1636,0,320,279],[1953,1312,60,53],[1090,802,249,216],[344,905,249,216],[0,927,249,216],[1840,1111,124,108],[1288,264,279,288],[1592,1008,246,214],[1341,1008,249,216]]}
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



(lib.CachedBmp_1220 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1219 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1221 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1218 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1224 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1217 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1222 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1214 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1216 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1215 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1212 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1211 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1210 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1209 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1213 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1207 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1203 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1204 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1206 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1202 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1205 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1208 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1201 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1200 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1199 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1195 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1196 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1193 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1194 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1197 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1198 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1191 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1192 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1188 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1190 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1186 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1187 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1189 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1184 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1183 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1185 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1180 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1182 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1181 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1179 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1174 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1176 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1175 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1177 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1178 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1173 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1172 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1168 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1170 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1169 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1167 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1164 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1166 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1171 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1163 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1165 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1159 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1161 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1162 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1158 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1155 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1157 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1156 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1160 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1153 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1152 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1151 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1146 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1148 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1150 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1145 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1149 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1147 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1142 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1141 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1143 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1139 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1144 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1154 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1140 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1138 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1135 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1137 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1134 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1133 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1131 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1136 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1130 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1129 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1127 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1128 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1132 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1126 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1125 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1123 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1121 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1122 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1119 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1118 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1120 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1124 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1116 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1115 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1114 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1117 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1113 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1110 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1112 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1111 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1109 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1108 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1104 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1107 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1102 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1106 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1103 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1105 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1100 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1101 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1098 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1095 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1097 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1096 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1099 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1094 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1093 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1091 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1092 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1087 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1090 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1089 = function() {
	this.initialize(ss["Задание 4_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1085 = function() {
	this.initialize(ss["Задание 4_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1084 = function() {
	this.initialize(ss["Задание 4_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1086 = function() {
	this.initialize(ss["Задание 4_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1083 = function() {
	this.initialize(ss["Задание 4_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1082 = function() {
	this.initialize(ss["Задание 4_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1080 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1081 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1079 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1077 = function() {
	this.initialize(ss["Задание 4_atlas_9"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1072 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1088 = function() {
	this.initialize(ss["Задание 4_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1071 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1070 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1074 = function() {
	this.initialize(ss["Задание 4_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1078 = function() {
	this.initialize(ss["Задание 4_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1076 = function() {
	this.initialize(ss["Задание 4_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1065 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1067 = function() {
	this.initialize(ss["Задание 4_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1069 = function() {
	this.initialize(ss["Задание 4_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1075 = function() {
	this.initialize(img.CachedBmp_1075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2429,1163);


(lib.CachedBmp_1063 = function() {
	this.initialize(ss["Задание 4_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1060 = function() {
	this.initialize(ss["Задание 4_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1073 = function() {
	this.initialize(img.CachedBmp_1073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2242,1516);


(lib.CachedBmp_1068 = function() {
	this.initialize(img.CachedBmp_1068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2501,1172);


(lib.CachedBmp_1058 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1057 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1056 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1055 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1054 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1053 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1061 = function() {
	this.initialize(img.CachedBmp_1061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2080,704);


(lib.CachedBmp_1052 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1050 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение2 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.Сова2_Монтажнаяобласть1копия = function() {
	this.initialize(ss["Задание 4_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Сова_Монтажнаяобласть1копия = function() {
	this.initialize(ss["Задание 4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.коготь_Монтажнаяобласть1копия = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.крыло3_Монтажнаяобласть1копия = function() {
	this.initialize(ss["Задание 4_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.жордочка_Монтажнаяобласть1копия = function() {
	this.initialize(ss["Задание 4_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крыло2_Монтажнаяобласть1копия = function() {
	this.initialize(ss["Задание 4_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.крыло1_Монтажнаяобласть1копия = function() {
	this.initialize(ss["Задание 4_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1049 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1048 = function() {
	this.initialize(ss["Задание 4_atlas_10"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1059 = function() {
	this.initialize(ss["Задание 4_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1062 = function() {
	this.initialize(img.CachedBmp_1062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3089,1148);


(lib.CachedBmp_1064 = function() {
	this.initialize(img.CachedBmp_1064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4015,1032);


(lib.CachedBmp_1066 = function() {
	this.initialize(img.CachedBmp_1066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4276,1382);// helper functions:

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


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Растровоеизображение2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,124,108), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1224();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-1.5,-1.5,124.5,108), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1224();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-1.5,-1.5,124.5,108), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1222();
	this.instance.setTransform(-1.5,-1.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-1.5,-1.4,124.5,108), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.коготь_Монтажнаяобласть1копия();
	this.instance.setTransform(0,0,0.2778,0.2778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,77.5,80), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.крыло1_Монтажнаяобласть1копия();
	this.instance.setTransform(0,0,0.2814,0.2814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,192.2,274.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.крыло2_Монтажнаяобласть1копия();
	this.instance.setTransform(0,0,0.2784,0.2807);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,190.1,273.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.крыло3_Монтажнаяобласть1копия();
	this.instance.setTransform(0,0,0.2798,0.2798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,191.1,272.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Сова2_Монтажнаяобласть1копия();
	this.instance.setTransform(0,0,0.2842,0.2842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,183.6,220.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1221();
	this.instance.setTransform(1.35,35.65,0.2108,0.2108);

	this.instance_1 = new lib.CachedBmp_1220();
	this.instance_1.setTransform(0,35.55,0.2108,0.2108);

	this.instance_2 = new lib.CachedBmp_1219();
	this.instance_2.setTransform(0.8,35.45,0.2108,0.2108);

	this.instance_3 = new lib.CachedBmp_1218();
	this.instance_3.setTransform(25.9,48.5,0.2108,0.2108);

	this.instance_4 = new lib.CachedBmp_1217();
	this.instance_4.setTransform(12.65,35.7,0.2108,0.2108);

	this.instance_5 = new lib.CachedBmp_1216();
	this.instance_5.setTransform(70.55,35.85,0.2108,0.2108);

	this.instance_6 = new lib.CachedBmp_1215();
	this.instance_6.setTransform(68.75,38.4,0.2108,0.2108);

	this.instance_7 = new lib.CachedBmp_1214();
	this.instance_7.setTransform(281,1.9,0.2108,0.2108);

	this.instance_8 = new lib.CachedBmp_1213();
	this.instance_8.setTransform(221.95,0.55,0.2108,0.2108);

	this.instance_9 = new lib.CachedBmp_1212();
	this.instance_9.setTransform(227.8,2.9,0.2108,0.2108);

	this.instance_10 = new lib.CachedBmp_1211();
	this.instance_10.setTransform(222.8,0.05,0.2108,0.2108);

	this.instance_11 = new lib.CachedBmp_1210();
	this.instance_11.setTransform(182.5,1.2,0.2108,0.2108);

	this.instance_12 = new lib.CachedBmp_1209();
	this.instance_12.setTransform(182.95,2.75,0.2108,0.2108);

	this.instance_13 = new lib.CachedBmp_1208();
	this.instance_13.setTransform(180.45,0,0.2108,0.2108);

	this.instance_14 = new lib.CachedBmp_1207();
	this.instance_14.setTransform(265.7,6.3,0.2108,0.2108);

	this.instance_15 = new lib.CachedBmp_1206();
	this.instance_15.setTransform(224.35,0,0.2108,0.2108);

	this.instance_16 = new lib.CachedBmp_1205();
	this.instance_16.setTransform(188.2,1.55,0.2108,0.2108);

	this.instance_17 = new lib.CachedBmp_1204();
	this.instance_17.setTransform(74,51.65,0.2108,0.2108);

	this.instance_18 = new lib.CachedBmp_1203();
	this.instance_18.setTransform(6.35,38.25,0.2108,0.2108);

	this.instance_19 = new lib.CachedBmp_1202();
	this.instance_19.setTransform(15.35,43.95,0.2108,0.2108);

	this.instance_20 = new lib.CachedBmp_1201();
	this.instance_20.setTransform(4.5,36.7,0.2108,0.2108);

	this.instance_21 = new lib.CachedBmp_1200();
	this.instance_21.setTransform(6.25,37.45,0.2108,0.2108);

	this.instance_22 = new lib.CachedBmp_1199();
	this.instance_22.setTransform(4.15,35.9,0.2108,0.2108);

	this.instance_23 = new lib.CachedBmp_1198();
	this.instance_23.setTransform(17.35,35.5,0.2108,0.2108);

	this.instance_24 = new lib.CachedBmp_1197();
	this.instance_24.setTransform(11.3,37.75,0.2108,0.2108);

	this.instance_25 = new lib.CachedBmp_1196();
	this.instance_25.setTransform(186.3,1,0.2108,0.2108);

	this.instance_26 = new lib.CachedBmp_1195();
	this.instance_26.setTransform(196.85,12.4,0.2108,0.2108);

	this.instance_27 = new lib.CachedBmp_1194();
	this.instance_27.setTransform(204.2,34.1,0.2108,0.2108);

	this.instance_28 = new lib.CachedBmp_1193();
	this.instance_28.setTransform(191.3,36.25,0.2108,0.2108);

	this.instance_29 = new lib.CachedBmp_1192();
	this.instance_29.setTransform(199.3,35.8,0.2108,0.2108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,298.1,60.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1191();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,7.5,7.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1190();
	this.instance.setTransform(-1.45,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-1.4,-1.5,171,85), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1189();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-1.5,-1.5,171,85), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1183();
	this.instance.setTransform(368.55,-54.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1182();
	this.instance_1.setTransform(145.8,-55.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1181();
	this.instance_2.setTransform(336.05,-34.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1180();
	this.instance_3.setTransform(336.2,-36.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1179();
	this.instance_4.setTransform(137.9,-54.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1178();
	this.instance_5.setTransform(-138.8,-58.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_1177();
	this.instance_6.setTransform(-102.35,-54.3,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_1176();
	this.instance_7.setTransform(-146.7,-57.05,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_1175();
	this.instance_8.setTransform(113.1,3.25,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_1174();
	this.instance_9.setTransform(-344.3,25.15,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_1173();
	this.instance_10.setTransform(-378.4,-58.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_1172();
	this.instance_11.setTransform(-134.05,-56,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_1171();
	this.instance_12.setTransform(74.45,12.1,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_1170();
	this.instance_13.setTransform(-362.2,-57.8,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_1169();
	this.instance_14.setTransform(334.8,-50.85,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_1168();
	this.instance_15.setTransform(346.4,-50.85,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_1167();
	this.instance_16.setTransform(310.75,-41.05,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_1166();
	this.instance_17.setTransform(193.1,-42.95,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_1165();
	this.instance_18.setTransform(184.45,-52.1,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_1164();
	this.instance_19.setTransform(188.75,-46.95,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_1163();
	this.instance_20.setTransform(235.65,-47.9,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_1162();
	this.instance_21.setTransform(92.95,-55.5,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_1161();
	this.instance_22.setTransform(-341.05,-57.7,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_1160();
	this.instance_23.setTransform(-373.15,-56.7,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_1159();
	this.instance_24.setTransform(39.35,-54.5,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_1158();
	this.instance_25.setTransform(-318.6,-56,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_1157();
	this.instance_26.setTransform(-329.9,-52.25,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_1156();
	this.instance_27.setTransform(-367.9,-51.1,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_1155();
	this.instance_28.setTransform(-310.35,-41.3,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_1154();
	this.instance_29.setTransform(-380.75,-60.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.7,-60.1,760,120.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1153();
	this.instance.setTransform(-35.9,-30.95,0.2108,0.2108);

	this.instance_1 = new lib.CachedBmp_1152();
	this.instance_1.setTransform(-41.55,-4.7,0.2108,0.2108);

	this.instance_2 = new lib.CachedBmp_1151();
	this.instance_2.setTransform(-41.3,-1.2,0.2108,0.2108);

	this.instance_3 = new lib.CachedBmp_1150();
	this.instance_3.setTransform(-41.6,-2.35,0.2108,0.2108);

	this.instance_4 = new lib.CachedBmp_1149();
	this.instance_4.setTransform(-42.4,-4.7,0.2108,0.2108);

	this.instance_5 = new lib.CachedBmp_1148();
	this.instance_5.setTransform(-0.15,-53.6,0.2108,0.2108);

	this.instance_6 = new lib.CachedBmp_1147();
	this.instance_6.setTransform(1.9,-50.05,0.2108,0.2108);

	this.instance_7 = new lib.CachedBmp_1146();
	this.instance_7.setTransform(4.15,-43.3,0.2108,0.2108);

	this.instance_8 = new lib.CachedBmp_1145();
	this.instance_8.setTransform(-41,-6.6,0.2108,0.2108);

	this.instance_9 = new lib.CachedBmp_1144();
	this.instance_9.setTransform(-39.35,-4.7,0.2108,0.2108);

	this.instance_10 = new lib.CachedBmp_1143();
	this.instance_10.setTransform(12.3,-53.95,0.2108,0.2108);

	this.instance_11 = new lib.CachedBmp_1142();
	this.instance_11.setTransform(27.7,-53.6,0.2108,0.2108);

	this.instance_12 = new lib.CachedBmp_1141();
	this.instance_12.setTransform(47.7,-58.55,0.2108,0.2108);

	this.instance_13 = new lib.CachedBmp_1140();
	this.instance_13.setTransform(40.05,-56.85,0.2108,0.2108);

	this.instance_14 = new lib.CachedBmp_1139();
	this.instance_14.setTransform(29.5,-58.1,0.2108,0.2108);

	this.instance_15 = new lib.CachedBmp_1138();
	this.instance_15.setTransform(49.1,-55.85,0.2108,0.2108);

	this.instance_16 = new lib.CachedBmp_1137();
	this.instance_16.setTransform(45.9,-51.6,0.2108,0.2108);

	this.instance_17 = new lib.CachedBmp_1136();
	this.instance_17.setTransform(47.7,-57.9,0.2108,0.2108);

	this.instance_18 = new lib.CachedBmp_1135();
	this.instance_18.setTransform(45.3,-58.15,0.2108,0.2108);

	this.instance_19 = new lib.CachedBmp_1134();
	this.instance_19.setTransform(-30.25,-44.9,0.2108,0.2108);

	this.instance_20 = new lib.CachedBmp_1133();
	this.instance_20.setTransform(-37.75,-12.9,0.2108,0.2108);

	this.instance_21 = new lib.CachedBmp_1132();
	this.instance_21.setTransform(-35.65,-12.4,0.2108,0.2108);

	this.instance_22 = new lib.CachedBmp_1131();
	this.instance_22.setTransform(-59.25,40.9,0.2108,0.2108);

	this.instance_23 = new lib.CachedBmp_1130();
	this.instance_23.setTransform(-59.5,44.15,0.2108,0.2108);

	this.instance_24 = new lib.CachedBmp_1129();
	this.instance_24.setTransform(-54.75,-5.4,0.2108,0.2108);

	this.instance_25 = new lib.CachedBmp_1128();
	this.instance_25.setTransform(-59.65,34.15,0.2108,0.2108);

	this.instance_26 = new lib.CachedBmp_1127();
	this.instance_26.setTransform(-58.75,34.05,0.2108,0.2108);

	this.instance_27 = new lib.CachedBmp_1126();
	this.instance_27.setTransform(-52,36.05,0.2108,0.2108);

	this.instance_28 = new lib.CachedBmp_1125();
	this.instance_28.setTransform(-58.9,28.9,0.2108,0.2108);

	this.instance_29 = new lib.CachedBmp_1124();
	this.instance_29.setTransform(-46.65,-49.8,0.2108,0.2108);

	this.instance_30 = new lib.CachedBmp_1123();
	this.instance_30.setTransform(20.5,-38.2,0.2108,0.2108);

	this.instance_31 = new lib.CachedBmp_1122();
	this.instance_31.setTransform(21.9,-39.6,0.2108,0.2108);

	this.instance_32 = new lib.CachedBmp_1121();
	this.instance_32.setTransform(28.8,-47.25,0.2108,0.2108);

	this.instance_33 = new lib.CachedBmp_1120();
	this.instance_33.setTransform(26.7,-44.9,0.2108,0.2108);

	this.instance_34 = new lib.CachedBmp_1119();
	this.instance_34.setTransform(20.05,-44.4,0.2108,0.2108);

	this.instance_35 = new lib.CachedBmp_1118();
	this.instance_35.setTransform(19.7,-53.7,0.2108,0.2108);

	this.instance_36 = new lib.CachedBmp_1117();
	this.instance_36.setTransform(-32.9,-51.8,0.2108,0.2108);

	this.instance_37 = new lib.CachedBmp_1116();
	this.instance_37.setTransform(-5.15,-12.8,0.2108,0.2108);

	this.instance_38 = new lib.CachedBmp_1115();
	this.instance_38.setTransform(-6.6,-15.7,0.2108,0.2108);

	this.instance_39 = new lib.CachedBmp_1114();
	this.instance_39.setTransform(-5.35,-21.8,0.2108,0.2108);

	this.instance_40 = new lib.CachedBmp_1113();
	this.instance_40.setTransform(-4.95,-37.3,0.2108,0.2108);

	this.instance_41 = new lib.CachedBmp_1112();
	this.instance_41.setTransform(-3.8,-40.05,0.2108,0.2108);

	this.instance_42 = new lib.CachedBmp_1111();
	this.instance_42.setTransform(-20.25,-22.75,0.2108,0.2108);

	this.instance_43 = new lib.CachedBmp_1110();
	this.instance_43.setTransform(-49.4,-2.4,0.2108,0.2108);

	this.instance_44 = new lib.CachedBmp_1109();
	this.instance_44.setTransform(-29.8,-17,0.2108,0.2108);

	this.instance_45 = new lib.CachedBmp_1108();
	this.instance_45.setTransform(-52.1,-13.1,0.2108,0.2108);

	this.instance_46 = new lib.CachedBmp_1107();
	this.instance_46.setTransform(-40.5,-39.65,0.2108,0.2108);

	this.instance_47 = new lib.CachedBmp_1106();
	this.instance_47.setTransform(-22.3,-33.15,0.2108,0.2108);

	this.instance_48 = new lib.CachedBmp_1105();
	this.instance_48.setTransform(-51.45,-53.3,0.2108,0.2108);

	this.instance_49 = new lib.CachedBmp_1104();
	this.instance_49.setTransform(-41.85,-34,0.2108,0.2108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-58.5,119.30000000000001,117.2);


(lib.Хвост = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ22();
	this.instance.setTransform(62,54,1,1,0,0,0,124,108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:62,regY:54,rotation:-5.9998,x:-5.3,y:6.8},0).wait(1).to({rotation:-11.9997,x:-9.8,y:14.05},0).wait(1).to({rotation:-17.9995,x:-13.65,y:21.85},0).wait(1).to({rotation:-23.9994,x:-16.6,y:29.9},0).wait(1).to({rotation:-29.9992,x:-18.65,y:38.2},0).wait(1).to({rotation:-24.9993,x:-17,y:31.25},0).wait(1).to({rotation:-19.9995,x:-14.75,y:24.5},0).wait(1).to({rotation:-14.9996,x:-11.8,y:17.9},0).wait(1).to({rotation:-9.9997,x:-8.4,y:11.65},0).wait(1).to({rotation:-4.9999,x:-4.45,y:5.65},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-54,161.4,170);


(lib.Ухо = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ19();
	this.instance.setTransform(0,-52.6,1,1,0,0,0,60.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:60.8,regY:52.5,x:0.1,y:-3.6},0).wait(1).to({y:-7.15},0).wait(1).to({y:-10.7},0).wait(1).to({y:-14.25},0).wait(1).to({y:-17.8},0).wait(1).to({y:-15},0).wait(1).to({y:-12.2},0).wait(1).to({y:-9.45},0).wait(1).to({y:-6.65},0).wait(1).to({y:-3.85},0).wait(1).to({y:-1.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-71.7,124.5,125.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ12();
	this.instance.setTransform(2.95,-1.55,1,1,0,0,0,3.8,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:3.8,x:2.25,y:-0.95},0).wait(1).to({x:1.55,y:-0.3},0).wait(1).to({x:0.8,y:0.4},0).wait(1).to({x:0.1,y:1.05},0).wait(1).to({x:-0.65,y:1.7},0).wait(1).to({x:-1.2,y:1.2},0).wait(1).to({x:-1.8,y:0.65},0).wait(1).to({x:-2.4,y:0.1},0).wait(1).to({x:-3,y:-0.4},0).wait(1).to({x:-3.6,y:-0.95},0).wait(1).to({x:-4.2,y:-1.5},0).wait(1).to({x:-3.6,y:-2.05},0).wait(1).to({x:-3.05,y:-2.65},0).wait(1).to({x:-2.5,y:-3.25},0).wait(1).to({x:-1.9,y:-3.85},0).wait(1).to({x:-1.35,y:-4.45},0).wait(1).to({x:-0.8,y:-5.05},0).wait(1).to({y:-4.5},0).wait(1).to({y:-3.95},0).wait(1).to({y:-3.4},0).wait(1).to({y:-2.85},0).wait(1).to({y:-2.3},0).wait(1).to({y:-1.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8.8,14.7,14.200000000000001);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ2("synched",0);
	this.instance.setTransform(138.95,-136,2.3713,2.3609,0,0,0,58.6,-57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:2.361,rotation:-8.9999,x:22.9658,y:20.066},0).wait(1).to({scaleX:2.3714,rotation:-17.9998,x:48.7878,y:36.2916},0).wait(1).to({rotation:-26.9998,x:76.8301,y:48.278},0).wait(1).to({rotation:-35.9997,x:106.4022,y:55.7301},0).wait(1).to({scaleX:2.3713,rotation:-44.9996,x:136.776,y:58.4643},0).wait(1).to({scaleY:2.3609,rotation:-37.4997,x:111.4289,y:56.5167},0).wait(1).to({scaleY:2.361,rotation:-29.9997,x:86.5528,y:51.2772},0).wait(1).to({scaleX:2.3714,rotation:-22.4998,x:62.5734,y:42.8357},0).wait(1).to({scaleX:2.3713,rotation:-14.9999,x:39.901,y:31.3364},0).wait(1).to({scaleX:2.3714,rotation:-7.4999,x:18.9235,y:16.9762},0).wait(1).to({scaleX:2.3713,rotation:0,x:-0.0001,y:0.0008},0).wait(1).to({scaleX:2.3714,rotation:-7.4999,x:18.9235,y:16.9762},0).wait(1).to({scaleX:2.3713,rotation:-14.9999,x:39.901,y:31.3364},0).wait(1).to({scaleX:2.3714,rotation:-22.4998,x:62.5734,y:42.8357},0).wait(1).to({scaleX:2.3713,rotation:-29.9997,x:86.5528,y:51.2772},0).wait(1).to({scaleY:2.3609,rotation:-37.4997,x:111.4289,y:56.5167},0).wait(1).to({scaleY:2.361,rotation:-44.9996,x:136.776,y:58.4643},0).wait(1).to({scaleY:2.3609,rotation:-37.4997,x:111.4289,y:56.5167},0).wait(1).to({scaleY:2.361,rotation:-29.9997,x:86.5528,y:51.2772},0).wait(1).to({scaleX:2.3714,rotation:-22.4998,x:62.5734,y:42.8357},0).wait(1).to({scaleX:2.3713,rotation:-14.9999,x:39.901,y:31.3364},0).wait(1).to({scaleX:2.3714,rotation:-7.4999,x:18.9235,y:16.9762},0).wait(1).to({scaleX:2.3713,rotation:0,x:-0.0001,y:0.0008},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.4,-139.4,441.79999999999995,394.70000000000005);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ9();
	this.instance.setTransform(-84.05,41,1,1,0,0,0,0,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.1,regY:41,rotation:2.9998,x:2.1,y:4.5},0).wait(1).to({rotation:5.9996,x:3.9,y:9.05},0).wait(1).to({rotation:8.9993,x:5.45,y:13.7},0).wait(1).to({rotation:11.9991,x:6.8,y:18.4},0).wait(1).to({rotation:14.9989,x:7.85,y:23.15},0).wait(1).to({rotation:12.4991,x:7,y:19.2},0).wait(1).to({rotation:9.9993,x:5.9,y:15.25},0).wait(1).to({rotation:7.4995,x:4.75,y:11.4},0).wait(1).to({rotation:4.9996,x:3.4,y:7.55},0).wait(1).to({rotation:2.4998,x:1.75,y:3.7},0).wait(1).to({rotation:0,x:0.05,y:0},0).wait(1).to({rotation:2.4998,x:1.75,y:3.7},0).wait(1).to({rotation:4.9996,x:3.4,y:7.55},0).wait(1).to({rotation:7.4995,x:4.75,y:11.4},0).wait(1).to({rotation:9.9993,x:5.9,y:15.25},0).wait(1).to({rotation:12.4991,x:7,y:19.2},0).wait(1).to({rotation:14.9989,x:7.85,y:23.15},0).wait(1).to({rotation:12.4991,x:7,y:19.2},0).wait(1).to({rotation:9.9993,x:5.9,y:15.25},0).wait(1).to({rotation:7.4995,x:4.75,y:11.4},0).wait(1).to({rotation:4.9996,x:3.4,y:7.55},0).wait(1).to({rotation:2.4998,x:1.75,y:3.7},0).wait(1).to({rotation:0,x:0.05,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-42.5,187.2,128.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ7();
	this.instance.setTransform(84.15,41,1,1,0,0,0,168.2,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84,regY:41,rotation:-2.9998,x:-2.05,y:4.5},0).wait(1).to({rotation:-5.9996,x:-3.85,y:9.05},0).wait(1).to({rotation:-8.9993,x:-5.45,y:13.7},0).wait(1).to({rotation:-11.9991,x:-6.75,y:18.45},0).wait(1).to({rotation:-14.9989,x:-7.8,y:23.15},0).wait(1).to({rotation:-12.4991,x:-6.95,y:19.2},0).wait(1).to({rotation:-9.9993,x:-5.9,y:15.25},0).wait(1).to({rotation:-7.4994,x:-4.65,y:11.35},0).wait(1).to({rotation:-4.9996,x:-3.3,y:7.55},0).wait(1).to({rotation:-2.4998,x:-1.75,y:3.75},0).wait(1).to({rotation:0,x:-0.05,y:0},0).wait(1).to({rotation:-2.4998,x:-1.75,y:3.75},0).wait(1).to({rotation:-4.9996,x:-3.3,y:7.55},0).wait(1).to({rotation:-7.4994,x:-4.65,y:11.35},0).wait(1).to({rotation:-9.9993,x:-5.9,y:15.25},0).wait(1).to({rotation:-12.4991,x:-6.95,y:19.2},0).wait(1).to({rotation:-14.9989,x:-7.8,y:23.15},0).wait(1).to({rotation:-12.4991,x:-6.95,y:19.2},0).wait(1).to({rotation:-9.9993,x:-5.9,y:15.25},0).wait(1).to({rotation:-7.4994,x:-4.65,y:11.35},0).wait(1).to({rotation:-4.9996,x:-3.3,y:7.55},0).wait(1).to({rotation:-2.4998,x:-1.75,y:3.75},0).wait(1).to({rotation:0,x:-0.05,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-42.5,187.2,128.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3("synched",0);
	this.instance.setTransform(-0.8,-0.6,1,1,0,0,0,-0.8,0.1);

	this.instance_1 = new lib.CachedBmp_1187();
	this.instance_1.setTransform(-186,38,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1186();
	this.instance_2.setTransform(-301.25,46.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1185();
	this.instance_3.setTransform(-376.2,-51.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1184();
	this.instance_4.setTransform(-375.6,-56.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.7,-60.8,760,120.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ13();
	this.instance.setTransform(0,0,1,1,0,0,0,149,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0099,scaleY:1.0099,y:0.05},0).wait(1).to({scaleX:1.0197,scaleY:1.0197,x:0.05},0).wait(1).to({scaleX:1.0296,scaleY:1.0296,x:0},0).wait(1).to({scaleX:1.0395,scaleY:1.0395,x:0.05},0).wait(1).to({scaleX:1.0493,scaleY:1.0493,x:0},0).wait(1).to({scaleX:1.0411,scaleY:1.0411},0).wait(1).to({scaleX:1.0328,scaleY:1.0328,x:0.05},0).wait(1).to({scaleX:1.0245,scaleY:1.0245,x:0},0).wait(1).to({scaleX:1.0162,scaleY:1.0162},0).wait(1).to({scaleX:1.008,scaleY:1.008,x:0.05},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:0},0).wait(1).to({scaleX:1.0073,scaleY:1.0073,x:0.05,y:0},0).wait(1).to({scaleX:1.015,scaleY:1.015},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,y:0.05},0).wait(1).to({scaleX:1.0303,scaleY:1.0303,x:0,y:0},0).wait(1).to({scaleX:1.038,scaleY:1.038,y:0.05},0).wait(1).to({scaleX:1.0456,scaleY:1.0456,y:0},0).wait(1).to({scaleX:1.038,scaleY:1.038,y:0.05},0).wait(1).to({scaleX:1.0303,scaleY:1.0303,y:0},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,y:0.05},0).wait(1).to({scaleX:1.015,scaleY:1.015,x:0.05,y:0},0).wait(1).to({scaleX:1.0073,scaleY:1.0073},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,y:0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.3,-31.5,312.70000000000005,63.1);


(lib.Нога2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ21();
	this.instance.setTransform(0,0,1,1,0,0,0,60.7,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:60.8,regY:52.5,x:-23.85,y:-0.1},0).wait(1).to({x:-47.85},0).wait(1).to({x:-71.85},0).wait(1).to({x:-95.85},0).wait(1).to({x:-119.85},0).wait(1).to({x:-99.75},0).wait(1).to({x:-79.65},0).wait(1).to({x:-59.6},0).wait(1).to({x:-39.5},0).wait(1).to({x:-19.4},0).wait(1).to({x:0.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.1,-54.1,244.89999999999998,108);


(lib.Нога1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ20();
	this.instance.setTransform(0,0,1,1,0,0,0,60.7,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:60.8,regY:52.5,x:24.2,y:-0.1},0).wait(1).to({x:48.25},0).wait(1).to({x:72.25},0).wait(1).to({x:96.3},0).wait(1).to({x:120.4},0).wait(1).to({x:100.45},0).wait(1).to({x:80.5},0).wait(1).to({x:60.6},0).wait(1).to({x:40.65},0).wait(1).to({x:20.7},0).wait(1).to({x:0.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-54.1,244.8,108);


(lib.Крыло3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,-59.85,1,1,0,0,0,96.1,77.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:137.1,rotation:2.9998,x:-3.1,y:0},0).wait(1).to({rotation:5.9996,x:-6.3,y:-0.25},0).wait(1).to({rotation:8.9993,x:-9.35,y:-0.65},0).wait(1).to({rotation:11.9991,x:-12.45,y:-1.2},0).wait(1).to({rotation:14.9989,x:-15.5,y:-1.95},0).wait(1).to({rotation:12.4991,x:-12.95,y:-1.35},0).wait(1).to({rotation:9.9993,x:-10.35,y:-0.85},0).wait(1).to({rotation:7.4995,x:-7.8,y:-0.4},0).wait(1).to({rotation:4.9996,x:-5.2,y:-0.15},0).wait(1).to({rotation:2.4998,x:-2.6,y:0},0).wait(1).to({rotation:0,x:0,y:0.05},0).wait(1).to({rotation:-2.4998,x:2.65,y:0},0).wait(1).to({rotation:-4.9996,x:5.25,y:-0.1},0).wait(1).to({rotation:-7.4994,x:7.9,y:-0.4},0).wait(1).to({rotation:-9.9993,x:10.45,y:-0.85},0).wait(1).to({rotation:-12.4991,x:12.95,y:-1.35},0).wait(1).to({rotation:-14.9989,x:15.6,y:-1.95},0).wait(1).to({rotation:-12.4991,x:12.95,y:-1.35},0).wait(1).to({rotation:-9.9993,x:10.45,y:-0.85},0).wait(1).to({rotation:-7.4994,x:7.9,y:-0.4},0).wait(1).to({rotation:-4.9996,x:5.25,y:-0.1},0).wait(1).to({rotation:-2.4998,x:2.65,y:0},0).wait(1).to({rotation:0,x:0,y:0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-159.3,287.70000000000005,314.6);


(lib.Крыло2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-0.05,-79.8,1,1,0,0,0,95,56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:95.1,regY:136.7,rotation:-2.9998,x:4.25,y:-0.1},0).wait(1).to({rotation:-5.9996,x:8.45,y:-0.45},0).wait(1).to({rotation:-8.9993,x:12.6,y:-1},0).wait(1).to({rotation:-11.9991,x:16.65,y:-1.7},0).wait(1).to({rotation:-14.9989,x:20.75,y:-2.7},0).wait(1).to({rotation:-12.4991,x:17.35,y:-1.9},0).wait(1).to({rotation:-9.9993,x:13.95,y:-1.2},0).wait(1).to({rotation:-7.4994,x:10.5,y:-0.65},0).wait(1).to({rotation:-4.9996,x:7.05,y:-0.3},0).wait(1).to({rotation:-2.4998,x:3.55,y:-0.1},0).wait(1).to({rotation:0,x:0.05,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-159.3,254.4,313.3);


(lib.Крыло1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ15();
	this.instance.setTransform(-0.05,-105.45,1,1,0,0,0,95.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:95.6,regY:136.3,rotation:1.9451,x:-3.55,y:0},0).wait(1).to({rotation:3.8901,x:-7.05,y:-0.15},0).wait(1).to({rotation:5.8351,x:-10.65,y:-0.5},0).wait(1).to({rotation:7.7802,x:-14.25,y:-0.9},0).wait(1).to({rotation:9.7253,x:-17.7,y:-1.4},0).wait(1).to({rotation:8.1488,x:-14.85,y:-1},0).wait(1).to({rotation:6.5724,x:-12.05,y:-0.6},0).wait(1).to({rotation:4.9959,x:-9.1,y:-0.3},0).wait(1).to({rotation:3.4195,x:-6.2,y:-0.1},0).wait(1).to({rotation:1.8431,x:-3.35,y:0},0).wait(1).to({rotation:0.2666,x:-0.45,y:0.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-151.9,234.4,300.9);


(lib.Коготь = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ18();
	this.instance.setTransform(10.45,8.6,1,1,0,0,0,49.2,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:38.7,regY:40,rotation:-7.093,x:-1,y:1.4},0).wait(1).to({rotation:-14.186,x:-1.85,y:2.9},0).wait(1).to({rotation:-21.279,x:-2.45,y:4.4},0).wait(1).to({rotation:-28.372,x:-2.85,y:6.05},0).wait(1).to({rotation:-35.465,x:-3.1,y:7.75},0).wait(1).to({rotation:-29.5172,x:-2.9,y:6.35},0).wait(1).to({rotation:-23.5693,x:-2.6,y:4.95},0).wait(1).to({rotation:-17.6215,x:-2.15,y:3.6},0).wait(1).to({rotation:-11.6736,x:-1.55,y:2.3},0).wait(1).to({rotation:-5.7258,x:-0.85,y:1.15},0).wait(1).to({rotation:0.2221,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-47.6,109.5,110.4);


(lib.Голова = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ14();
	this.instance.setTransform(0,0,1,1,0,0,0,91.8,110.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-2.9998,x:0.05,y:0.05},0).wait(1).to({rotation:-5.9996,y:0},0).wait(1).to({rotation:-8.9993,x:0,y:0.05},0).wait(1).to({rotation:-11.9991,x:0.05,y:0},0).wait(1).to({rotation:-14.9989,y:0.05},0).wait(1).to({rotation:-12.4991},0).wait(1).to({rotation:-9.9993,y:0},0).wait(1).to({rotation:-7.4994},0).wait(1).to({rotation:-4.9996,y:0.05},0).wait(1).to({rotation:-2.4998},0).wait(1).to({rotation:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.2,-130.3,234.5,260.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ4("synched",0);
	this.instance.setTransform(-0.8,-0.6,1,1,0,0,0,-0.8,-0.6);

	this.instance_1 = new lib.CachedBmp_1188();
	this.instance_1.setTransform(-378.3,-59.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.7,-60.8,760,120.5);


// stage content:
(lib.Задание4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Слой_6
	this.instance = new lib.Хвост("synched",0);
	this.instance.setTransform(181.2,851.35);

	this.instance_1 = new lib.Нога2("synched",0);
	this.instance_1.setTransform(422.3,956.15);

	this.instance_2 = new lib.Нога1("synched",0);
	this.instance_2.setTransform(301.6,956.15);

	this.instance_3 = new lib.Ухо("synched",0);
	this.instance_3.setTransform(543.25,747.1);

	this.instance_4 = new lib.CachedBmp_1054();
	this.instance_4.setTransform(588.9,707.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1053();
	this.instance_5.setTransform(541.5,693,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_1052();
	this.instance_6.setTransform(420.45,692.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_1052();
	this.instance_7.setTransform(359.5,797.85,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_1050();
	this.instance_8.setTransform(239.8,797.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_1049();
	this.instance_9.setTransform(300.3,798.15,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_1048();
	this.instance_10.setTransform(420.3,798.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(24));

	// Крыло3
	this.instance_11 = new lib.Крыло3("synched",0);
	this.instance_11.setTransform(1645.75,856.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24));

	// Крыло2
	this.instance_12 = new lib.Крыло2("synched",0);
	this.instance_12.setTransform(1646.7,857.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24));

	// Крыло1
	this.instance_13 = new lib.Крыло1("synched",0);
	this.instance_13.setTransform(1646.2,859.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24));

	// Сова
	this.instance_14 = new lib.Коготь("synched",0);
	this.instance_14.setTransform(1576.4,880.55);

	this.instance_15 = new lib.Голова("synched",0);
	this.instance_15.setTransform(1570.1,643.75);

	this.instance_16 = new lib.Сова_Монтажнаяобласть1копия();
	this.instance_16.setTransform(1399,491,0.2869,0.2869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(24));

	// Слой_8
	this.instance_17 = new lib.жордочка_Монтажнаяобласть1копия();
	this.instance_17.setTransform(1408,790,0.1646,0.1646);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(23).to({x:1407,y:789},0).wait(1));

	// Кит
	this.instance_18 = new lib.Символ11("synched",0);
	this.instance_18.setTransform(1103.3,379.85);

	this.instance_19 = new lib.Символ10("synched",0);
	this.instance_19.setTransform(951.65,541.2);

	this.instance_20 = new lib.Символ8("synched",0);
	this.instance_20.setTransform(883.2,123.35);

	this.instance_21 = new lib.Символ6("synched",0);
	this.instance_21.setTransform(715.15,123.35);

	this.instance_22 = new lib.CachedBmp_1058();
	this.instance_22.setTransform(1094.95,370.55,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_1057();
	this.instance_23.setTransform(1095.15,371.7,0.5,0.5);

	this.instance_24 = new lib.Символ5("synched",0);
	this.instance_24.setTransform(1020.6,359.45,1,1,0,0,0,-0.8,-0.6);

	this.instance_25 = new lib.CachedBmp_1056();
	this.instance_25.setTransform(1090.85,369.55,0.5,0.5);

	this.instance_26 = new lib.Символ1("synched",0);
	this.instance_26.setTransform(1047.35,388.25,2.3713,2.361);

	this.instance_27 = new lib.CachedBmp_1055();
	this.instance_27.setTransform(640.55,162.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(24));

	// Слой_9
	this.instance_28 = new lib.CachedBmp_1103();
	this.instance_28.setTransform(73.05,576,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_1102();
	this.instance_29.setTransform(109.15,1005.15,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_1101();
	this.instance_30.setTransform(744.2,934.3,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_1100();
	this.instance_31.setTransform(748.1,935.05,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_1099();
	this.instance_32.setTransform(1869.9,1031.25,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_1098();
	this.instance_33.setTransform(1435.8,633.15,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_1097();
	this.instance_34.setTransform(1834.15,542.55,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_1096();
	this.instance_35.setTransform(1117.15,872.5,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_1095();
	this.instance_36.setTransform(1661.7,418.45,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_1094();
	this.instance_37.setTransform(1294.15,96.9,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_1093();
	this.instance_38.setTransform(479.5,375.7,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_1092();
	this.instance_39.setTransform(1757.4,33.55,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_1091();
	this.instance_40.setTransform(131.05,51.85,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_1090();
	this.instance_41.setTransform(1443.15,601.7,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_1089();
	this.instance_42.setTransform(1235.85,631.25,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_1088();
	this.instance_43.setTransform(1044.05,509.2,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_1087();
	this.instance_44.setTransform(1812,884.75,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_1086();
	this.instance_45.setTransform(1311.6,758.6,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_1085();
	this.instance_46.setTransform(1095.6,759.4,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_1084();
	this.instance_47.setTransform(997.2,707.35,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_1083();
	this.instance_48.setTransform(1060.25,801.5,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_1082();
	this.instance_49.setTransform(1399.15,854.4,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_1081();
	this.instance_50.setTransform(1563.55,621.05,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_1080();
	this.instance_51.setTransform(793.65,817.2,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_1079();
	this.instance_52.setTransform(636.4,854.45,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_1078();
	this.instance_53.setTransform(328.45,798.35,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_1077();
	this.instance_54.setTransform(-133.45,331.45,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_1076();
	this.instance_55.setTransform(-118.8,338.4,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_1075();
	this.instance_56.setTransform(-63.45,391.6,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_1074();
	this.instance_57.setTransform(113,650.9,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_1073();
	this.instance_58.setTransform(-76.75,364.25,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_1072();
	this.instance_59.setTransform(681.75,455.25,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_1071();
	this.instance_60.setTransform(636.4,437.3,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_1070();
	this.instance_61.setTransform(-49.8,-34.25,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_1069();
	this.instance_62.setTransform(371.65,430.6,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_1068();
	this.instance_63.setTransform(-82.3,193.5,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_1067();
	this.instance_64.setTransform(805.3,409.55,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_1066();
	this.instance_65.setTransform(-64.35,128.6,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_1065();
	this.instance_66.setTransform(645.45,446,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_1064();
	this.instance_67.setTransform(-12.75,-30,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_1063();
	this.instance_68.setTransform(37.35,54.7,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_1062();
	this.instance_69.setTransform(-46.85,-14.25,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_1061();
	this.instance_70.setTransform(355.05,12.1,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_1060();
	this.instance_71.setTransform(442.2,54.25,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_1059();
	this.instance_72.setTransform(604.55,23.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(826.6,505.8,1247.1,641.6000000000001);
// library properties:
lib.properties = {
	id: '177C422C1C26EC43A68A4F391F83BDD7',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1075.png", id:"CachedBmp_1075"},
		{src:"images/CachedBmp_1073.png", id:"CachedBmp_1073"},
		{src:"images/CachedBmp_1068.png", id:"CachedBmp_1068"},
		{src:"images/CachedBmp_1061.png", id:"CachedBmp_1061"},
		{src:"images/CachedBmp_1062.png", id:"CachedBmp_1062"},
		{src:"images/CachedBmp_1064.png", id:"CachedBmp_1064"},
		{src:"images/CachedBmp_1066.png", id:"CachedBmp_1066"},
		{src:"images/Задание 4_atlas_1.png", id:"Задание 4_atlas_1"},
		{src:"images/Задание 4_atlas_2.png", id:"Задание 4_atlas_2"},
		{src:"images/Задание 4_atlas_3.png", id:"Задание 4_atlas_3"},
		{src:"images/Задание 4_atlas_4.png", id:"Задание 4_atlas_4"},
		{src:"images/Задание 4_atlas_5.png", id:"Задание 4_atlas_5"},
		{src:"images/Задание 4_atlas_6.png", id:"Задание 4_atlas_6"},
		{src:"images/Задание 4_atlas_7.png", id:"Задание 4_atlas_7"},
		{src:"images/Задание 4_atlas_8.png", id:"Задание 4_atlas_8"},
		{src:"images/Задание 4_atlas_9.png", id:"Задание 4_atlas_9"},
		{src:"images/Задание 4_atlas_10.png", id:"Задание 4_atlas_10"}
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
an.compositions['177C422C1C26EC43A68A4F391F83BDD7'] = {
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