(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"2_atlas_2", frames: [[0,0,1200,1406]]},
		{name:"2_atlas_3", frames: [[0,722,943,791],[945,722,551,803],[0,0,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG = function() {
	this.initialize(ss["2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.edgge = function() {
	this.initialize(ss["2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eggdog = function() {
	this.initialize(ss["2_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.maxwell = function() {
	this.initialize(ss["2_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.straw = function() {
	this.initialize(ss["2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.straw();
	this.instance.setTransform(0,0,0.1317,0.1317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,158,185.1), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.maxwell();
	this.instance.setTransform(0,0,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,601.6,338.4), null);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.edgge();
	this.instance.setTransform(-226.3,-189.8,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.3,-189.8,452.6,379.70000000000005);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.eggdog();
	this.instance.setTransform(-119,-278,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-278,181.8,265);


// stage content:
(lib.Безымянный1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// discoDog___копия
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(673.2,402.6,1.2298,1.18,0,0,180,0,0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(470).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:1.2299,scaleY:1.45,x:673.15,y:402.55},14).to({scaleY:1.1799,x:673.2,y:402.6},10).to({regY:0.1,scaleY:1.52,x:673.25,y:402.5},12).to({scaleX:1.23,scaleY:1.2247,x:673.3},5).to({regX:0.2,scaleX:1.416,scaleY:1.4099,x:639.25,y:388.75},12).to({startPosition:0},63).to({skewY:0,x:639.35},9).to({regX:0.1,scaleY:1.7968,x:639.25,y:388.8},21).to({scaleX:1.19,scaleY:1.19},11).to({startPosition:0},17).to({startPosition:0},150).to({scaleX:0.99,scaleY:0.99,x:639.3,y:388.85},7).to({regX:0,regY:0,scaleX:1.22,scaleY:1.22,x:639.25,y:388.75},7).to({scaleX:1.17,scaleY:1.17},4).to({scaleX:1,scaleY:1,x:639.3,y:388.8},39).wait(91));

	// Слой_9___копия
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(376.8,418.2,0.57,0.57,0,180,0,78.6,92.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(470).to({_off:false},0).to({_off:true},24).wait(448));

	// straw___копия
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(673.15,434.45,0.7,0.7,0,0,0,79,92.5);

	this.instance_3 = new lib.straw();
	this.instance_3.setTransform(663,-177,0.1317,0.1317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{scaleX:0.7,scaleY:0.7,x:673.15,y:434.45}}]},470).to({state:[]},205).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:659,y:437.5}}]},10).to({state:[{t:this.instance_3}]},192).wait(65));

	// eggdog___копия
	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.setTransform(1125.4,801.3,1,1,0.0009,0,0,0.2,0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(470).to({_off:false},0).to({regY:0.1,scaleY:1.62,rotation:0.0005,guide:{path:[1125.4,801.3,1125.4,801.3,1125.4,801.3]}},11).to({scaleY:0.9999,rotation:0,skewX:21.9987,guide:{path:[1125.4,801.3,1125.4,801.3,1125.4,801.3,1125.4,801.3,1125.4,801.3]}},8).to({regX:0.1,scaleY:1,skewX:-11.0006,guide:{path:[1125.4,801.3,1125.4,801.3,1125.4,801.3]}},8).to({regX:0,regY:0,skewX:0,guide:{path:[1125.4,801.3,1125.4,801.3,1125.4,801.3,1125.4,801.3,1125.4,801.3]}},6).to({startPosition:0},6).to({scaleX:1.43,scaleY:1.43},24).to({scaleX:1,scaleY:1,guide:{path:[1125.4,801.3,1125.4,801.3,1125.4,801.3,1125.4,801.3,1125.4,801.3]}},10).to({startPosition:0},2).to({startPosition:0},80).to({startPosition:0},12).to({x:1373.75,y:758.6},26).wait(279));

	// maxvell___копия
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(-175.2,576.2,1,1,0,0,0,300.8,169.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(470).to({_off:false},0).wait(1).to({x:-162.35},0).wait(1).to({x:-149.5},0).wait(1).to({x:-136.7},0).wait(1).to({x:-123.85},0).wait(1).to({x:-111},0).wait(1).to({x:-98.2},0).wait(1).to({x:-85.35},0).wait(1).to({x:-72.5},0).wait(1).to({x:-59.7},0).wait(1).to({x:-46.85},0).wait(1).to({x:-34},0).wait(1).to({x:-21.2},0).wait(1).to({x:-8.35},0).wait(1).to({x:4.5},0).wait(1).to({x:17.3},0).wait(1).to({x:30.15},0).wait(1).to({x:43},0).wait(1).to({x:55.8},0).wait(1).to({x:68.65},0).wait(1).to({x:81.5},0).wait(1).to({x:94.3},0).wait(1).to({x:107.15},0).wait(1).to({x:120},0).wait(1).to({x:132.8},0).wait(1).to({x:145.65},0).wait(1).to({x:158.5},0).wait(1).to({x:171.3},0).wait(1).to({x:184.15},0).wait(1).to({x:197},0).wait(1).to({x:209.8},0).wait(1).to({x:222.65},0).wait(1).to({x:235.5},0).wait(1).to({x:248.3},0).wait(88).to({scaleX:1.044,scaleY:1.044,x:248.35},0).wait(1).to({scaleX:1.088,scaleY:1.088,x:248.3},0).wait(1).to({scaleX:1.132,scaleY:1.132,x:248.35},0).wait(1).to({scaleX:1.176,scaleY:1.176},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:248.3,y:576.15},0).wait(1).to({scaleX:1.264,scaleY:1.264,x:248.35},0).wait(1).to({scaleX:1.308,scaleY:1.308},0).wait(1).to({scaleX:1.352,scaleY:1.352},0).wait(1).to({scaleX:1.396,scaleY:1.396},0).wait(1).to({scaleX:1.44,scaleY:1.44,y:576.2},0).wait(1).to({scaleX:1.4267,scaleY:1.4267},0).wait(1).to({scaleX:1.4133,scaleY:1.4133},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:248.3},0).wait(1).to({scaleX:1.3867,scaleY:1.3867,x:248.35,y:576.15},0).wait(1).to({scaleX:1.3733,scaleY:1.3733},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({scaleX:1.3467,scaleY:1.3467},0).wait(1).to({scaleX:1.3333,scaleY:1.3333,x:248.3,y:576.2},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:248.35},0).wait(1).to({scaleX:1.3067,scaleY:1.3067},0).wait(1).to({scaleX:1.2933,scaleY:1.2933},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:248.3},0).wait(1).to({scaleX:1.2667,scaleY:1.2667,y:576.15},0).wait(1).to({scaleX:1.2533,scaleY:1.2533,x:248.35},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.2267,scaleY:1.2267},0).wait(1).to({scaleX:1.2133,scaleY:1.2133,x:248.3,y:576.2},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.1867,scaleY:1.1867,x:248.35},0).wait(1).to({scaleX:1.1733,scaleY:1.1733},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:248.3,y:576.15},0).wait(1).to({scaleX:1.1467,scaleY:1.1467},0).wait(1).to({scaleX:1.1333,scaleY:1.1333},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:248.35},0).wait(112).to({scaleX:1.0021},0).wait(1).to({scaleX:0.8842,x:248.3},0).wait(1).to({scaleX:0.7663,x:248.25},0).wait(1).to({scaleX:0.6484},0).wait(1).to({scaleX:0.5305},0).wait(1).to({scaleX:0.4126},0).wait(1).to({scaleX:0.2947},0).wait(1).to({scaleX:0.1768},0).wait(1).to({scaleX:0.0589},0).wait(1).to({skewY:180,x:248.2},0).wait(1).to({scaleX:0.1768},0).wait(1).to({scaleX:0.2947},0).wait(1).to({scaleX:0.4126},0).wait(1).to({scaleX:0.5305},0).wait(1).to({scaleX:0.6484},0).wait(1).to({scaleX:0.7663},0).wait(1).to({scaleX:0.8842},0).wait(1).to({scaleX:1.0021,x:248.15},0).wait(1).to({scaleX:1.12},0).wait(1).to({scaleX:0.9477,x:248.2},0).wait(1).to({scaleX:0.7754,x:248.15},0).wait(1).to({scaleX:0.6031,x:248.2},0).wait(1).to({scaleX:0.4308,x:248.25},0).wait(1).to({scaleX:0.2585,x:248.2},0).wait(1).to({scaleX:0.0862,x:248.25},0).wait(1).to({skewY:0,x:248.2},0).wait(1).to({scaleX:0.2585,x:248.25},0).wait(1).to({scaleX:0.4308,x:248.2},0).wait(1).to({scaleX:0.6031,x:248.25},0).wait(1).to({scaleX:0.7754,x:248.3},0).wait(1).to({scaleX:0.9477},0).wait(1).to({scaleX:1.12,x:248.35},0).wait(2).to({scaleY:0.9333},0).wait(1).to({scaleY:0.7467,y:576.2},0).wait(1).to({scaleY:0.56,y:576.15},0).wait(1).to({scaleY:0.3733},0).wait(1).to({scaleY:0.1867,y:576.2},0).wait(1).to({scaleX:0,scaleY:0,x:425.45,y:-576.2},0).wait(1).to({scaleX:1.12,scaleY:0.1867,skewX:180,x:248.35,y:576.15},0).wait(1).to({scaleY:0.3733,y:576.2},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:0.7467,y:576.15},0).wait(1).to({scaleY:0.9333,y:576.2},0).wait(1).to({scaleY:1.12},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:0.84,y:576.15},0).wait(1).to({scaleY:0.7},0).wait(1).to({scaleY:0.56,y:576.2},0).wait(1).to({scaleY:0.42},0).wait(1).to({scaleY:0.28,y:576.15},0).wait(1).to({scaleY:0.14},0).wait(1).to({scaleY:0,y:576},0).wait(1).to({scaleY:0.14,skewX:0,y:576.2},0).wait(1).to({scaleY:0.28},0).wait(1).to({scaleY:0.42,y:576.15},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:0.7,y:576.2},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.98,y:576.15},0).wait(1).to({scaleY:1.12},0).wait(143).to({_off:true},1).wait(2));

	// BG___копия
	this.instance_6 = new lib.BG();
	this.instance_6.setTransform(0,0,0.6667,0.6667);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(470).to({_off:false},0).wait(472));

	// discoDog
	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.setTransform(639.3,388.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.17,scaleY:1.17,x:639.25,y:388.75},39).to({scaleX:1.22,scaleY:1.22},4).to({regX:0.1,regY:0.1,scaleX:0.99,scaleY:0.99,x:639.3,y:388.85},7).to({scaleX:1.19,scaleY:1.19,x:639.25,y:388.8},7).to({startPosition:0},150).to({startPosition:0},17).to({scaleX:1.416,scaleY:1.7968},11).to({regX:0.2,scaleY:1.4099,x:639.35,y:388.75},21).to({skewY:180,x:639.25},9).to({startPosition:0},63).to({regX:0.1,scaleX:1.23,scaleY:1.2247,x:673.3,y:402.5},12).to({scaleX:1.2299,scaleY:1.52,x:673.25},5).to({regY:0.2,scaleY:1.1799,x:673.2,y:402.6},12).to({scaleY:1.45,x:673.15,y:402.55},10).to({regX:0,regY:0.3,scaleX:1.2298,scaleY:1.18,x:673.2,y:402.6},14).to({_off:true},89).wait(472));

	// Слой_9
	this.instance_8 = new lib.Символ2();
	this.instance_8.setTransform(376.8,418.2,0.57,0.57,0,180,0,78.6,92.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(436).to({_off:false},0).wait(1).to({regX:79,regY:92.6,x:370.2,y:418.65},0).wait(1).to({x:361.1,y:419.35},0).wait(1).to({x:349.7,y:420.3},0).wait(1).to({x:335.95,y:421.4},0).wait(1).to({x:319.95,y:422.7},0).wait(1).to({x:301.65,y:424.2},0).wait(1).to({x:281,y:425.85},0).wait(1).to({x:258.1,y:427.7},0).wait(1).to({x:232.9,y:429.75},0).wait(1).to({x:205.4,y:431.95},0).wait(1).to({x:175.55,y:434.35},0).wait(1).to({x:144,y:436.95},0).wait(1).to({x:114.2,y:439.35},0).wait(1).to({x:86.7,y:441.55},0).wait(1).to({x:61.45,y:443.6},0).wait(1).to({x:38.6,y:445.45},0).wait(1).to({x:18,y:447.1},0).wait(1).to({x:-0.35,y:448.6},0).wait(1).to({x:-16.35,y:449.9},0).wait(1).to({x:-30.05,y:451},0).wait(1).to({x:-41.5,y:451.95},0).wait(1).to({x:-50.6,y:452.65},0).wait(1).to({x:-57.45,y:453.25},0).to({_off:true},1).wait(482));

	// straw
	this.instance_9 = new lib.straw();
	this.instance_9.setTransform(663,-177,0.1317,0.1317);

	this.instance_10 = new lib.Символ2();
	this.instance_10.setTransform(659,437.5,1,1,0,0,0,79,92.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},63).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(472));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({_off:false},0).wait(1).to({regY:92.6,scaleX:1.019,scaleY:1.019,x:684.7,y:425.95},0).wait(1).to({scaleX:1.038,scaleY:1.038,x:710.4,y:414.35},0).wait(1).to({scaleX:1.057,scaleY:1.057,x:736.15,y:402.8},0).wait(1).to({scaleX:1.076,scaleY:1.076,x:761.85,y:391.15},0).wait(1).to({scaleX:1.095,scaleY:1.095,x:787.6,y:379.55},0).wait(1).to({scaleX:1.114,scaleY:1.114,x:813.3,y:367.95},0).wait(1).to({scaleX:1.133,scaleY:1.133,x:839.05,y:356.35},0).wait(1).to({scaleX:1.152,scaleY:1.152,x:864.75,y:344.7},0).wait(1).to({scaleX:1.171,scaleY:1.171,x:890.5,y:333.15},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:916.2,y:321.55},0).wait(1).to({scaleX:1.213,scaleY:1.213,x:910.45,y:324.2},0).wait(1).to({scaleX:1.236,scaleY:1.236,x:904.65,y:326.9},0).wait(1).to({scaleX:1.259,scaleY:1.259,x:898.85,y:329.6},0).wait(1).to({scaleX:1.282,scaleY:1.282,x:893.1,y:332.3},0).wait(1).to({scaleX:1.305,scaleY:1.305,x:887.3,y:335},0).wait(1).to({scaleX:1.328,scaleY:1.328,x:881.5,y:337.65},0).wait(1).to({scaleX:1.351,scaleY:1.351,x:875.7,y:340.35},0).wait(1).to({scaleX:1.374,scaleY:1.374,x:869.9,y:343.05},0).wait(1).to({scaleX:1.397,scaleY:1.397,x:864.1,y:345.75},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:858.35,y:348.45},0).wait(1).to({scaleX:1.3776,scaleY:1.3776,x:852.55,y:351.1},0).wait(1).to({scaleX:1.3353,scaleY:1.3353,x:846.75,y:353.8},0).wait(1).to({scaleX:1.2929,scaleY:1.2929,x:840.95,y:356.5},0).wait(1).to({scaleX:1.2506,scaleY:1.2506,x:835.2,y:359.15},0).wait(1).to({scaleX:1.2082,scaleY:1.2082,x:829.4,y:361.85},0).wait(1).to({scaleX:1.1659,scaleY:1.1659,x:823.6,y:364.55},0).wait(1).to({scaleX:1.1235,scaleY:1.1235,x:817.8,y:367.25},0).wait(1).to({scaleX:1.0812,scaleY:1.0812,x:812,y:369.9},0).wait(1).to({scaleX:1.0388,scaleY:1.0388,x:806.2,y:372.6},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:800.4,y:375.25},0).wait(1).to({scaleX:0.9541,scaleY:0.9541,x:794.65,y:377.95},0).wait(1).to({scaleX:0.9118,scaleY:0.9118,x:788.9,y:380.7},0).wait(1).to({scaleX:0.8694,scaleY:0.8694,x:783.1,y:383.35},0).wait(1).to({scaleX:0.8271,scaleY:0.8271,x:777.3,y:386.05},0).wait(1).to({scaleX:0.7847,scaleY:0.7847,x:771.5,y:388.7},0).wait(1).to({scaleX:0.7424,scaleY:0.7424,x:765.7,y:391.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:759.9,y:394.05},0).wait(1).to({x:754.15,y:396.75},0).wait(1).to({x:748.35,y:399.45},0).wait(1).to({x:742.55,y:402.15},0).wait(1).to({x:736.75,y:404.8},0).wait(1).to({x:730.95,y:407.5},0).wait(1).to({x:725.2,y:410.2},0).wait(1).to({x:719.4,y:412.9},0).wait(1).to({x:713.6,y:415.55},0).wait(1).to({x:707.8,y:418.25},0).wait(1).to({x:702,y:420.95},0).wait(1).to({x:696.25,y:423.65},0).wait(1).to({x:690.45,y:426.35},0).wait(1).to({x:684.65,y:429},0).wait(1).to({x:678.85,y:431.7},0).wait(1).to({x:673.1,y:434.4},0).wait(139).to({_off:true},1).wait(10).to({_off:false,regY:92.5,x:673.15,y:434.45},0).wait(1).to({regY:92.6,x:673.1},0).wait(116).to({rotation:-6.9615,x:649.55,y:432},0).wait(1).to({rotation:-13.9231,x:625.95,y:429.45},0).wait(1).to({rotation:-20.8846,x:602.4,y:426.95},0).wait(1).to({rotation:-27.8462,x:578.85,y:424.4},0).wait(1).to({rotation:-34.8077,x:555.25,y:421.9},0).wait(1).to({rotation:-41.7692,x:531.7,y:419.35},0).wait(1).to({rotation:-48.7308,x:508.1,y:416.85},0).wait(1).to({rotation:-55.6923,x:484.55,y:414.35},0).wait(1).to({rotation:-62.6538,x:461,y:411.85},0).wait(1).to({rotation:-69.6154,x:437.35,y:409.3},0).wait(1).to({rotation:-76.5769,x:413.8,y:406.75},0).wait(1).to({rotation:-83.5385,x:390.2,y:404.25},0).wait(1).to({rotation:-90.5,x:366.6,y:401.75},0).wait(1).to({rotation:-97.4615,x:343,y:399.2},0).wait(1).to({rotation:-104.4231,x:344.55,y:401.15},0).wait(1).to({rotation:-111.3846,x:345.95,y:403.1},0).wait(1).to({rotation:-118.3462,x:347.4,y:405.1},0).wait(1).to({rotation:-125.3077,x:348.9,y:407.1},0).wait(1).to({rotation:-132.2692,x:350.3,y:409.1},0).wait(1).to({rotation:-139.2308,x:351.8,y:411.05},0).wait(1).to({rotation:-146.1923,x:353.2,y:413.05},0).wait(1).to({rotation:-153.1538,x:354.65,y:415.05},0).wait(1).to({rotation:-160.1154,x:356.15,y:417.05},0).wait(1).to({rotation:-167.0769,x:357.6,y:419},0).wait(1).to({rotation:-174.0385,x:359.05,y:421},0).wait(1).to({rotation:-181,x:360.5,y:423},0).wait(29).to({scaleX:0.525,scaleY:0.525,x:360.55},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:423.05},0).wait(1).to({scaleX:0.175,scaleY:0.175},0).wait(1).to({scaleX:0,scaleY:0,rotation:-360,x:-360.55,y:-423.1},0).wait(30).to({_off:true},1).wait(472));

	// eggdog
	this.instance_11 = new lib.Анимация1("synched",0);
	this.instance_11.setTransform(1380.4,683.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({guide:{path:[1380.4,684,1374.9,673.8,1369.4,663.6,1363.2,663.6,1356.9,663.6,1349.1,668.3,1341.2,673,1341.2,676.9,1341.2,680.8,1338.9,680.8,1336.5,680.8,1336.5,687.8,1336.5,694.9,1322.4,687.1,1308.2,679.3,1302,673,1295.7,666.7,1287.1,666.7,1278.4,666.7,1278.4,673,1278.4,679.3,1268.2,679.3,1258,679.3,1256.7,689,1253.3,691.8,1243.9,679.2,1234.5,666.7,1229,661.2,1223.5,655.7,1211,655.7,1198.4,655.7,1189,667.5,1179.6,679.3,1174.1,671.4,1168.6,663.6,1163.9,663.6,1159.2,663.6,1142,658.9,1124.7,654.2,1112.2,670.6,1099.6,687.1,1093.4,674.5,1087.1,662,1067.5,662,1047.8,662,1038.4,675.3,1029,688.7]}},26).to({startPosition:0},12).to({startPosition:0},80).to({startPosition:0},2).to({scaleX:1.43,scaleY:1.43,guide:{path:[1029,688.7,1029,688.7,1029,688.7]}},10).to({scaleX:1,scaleY:1},24).to({startPosition:0},6).to({regX:0.1,regY:0.1,skewX:-11.0006,y:697.05},6).to({regX:0.2,scaleY:0.9999,skewX:21.9987,x:1029.05,y:697},8).to({scaleY:1.62,rotation:0.0005,skewX:0,x:1029,y:696.9},8).to({regY:0.2,scaleY:1,rotation:0.0009,y:697},11).to({_off:true},277).wait(472));

	// maxvell
	this.instance_12 = new lib.Символ1();
	this.instance_12.setTransform(-175.2,576.2,1,1,0,0,0,300.8,169.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({x:-162.35},0).wait(1).to({x:-149.5},0).wait(1).to({x:-136.7},0).wait(1).to({x:-123.85},0).wait(1).to({x:-111},0).wait(1).to({x:-98.2},0).wait(1).to({x:-85.35},0).wait(1).to({x:-72.5},0).wait(1).to({x:-59.7},0).wait(1).to({x:-46.85},0).wait(1).to({x:-34},0).wait(1).to({x:-21.2},0).wait(1).to({x:-8.35},0).wait(1).to({x:4.5},0).wait(1).to({x:17.3},0).wait(1).to({x:30.15},0).wait(1).to({x:43},0).wait(1).to({x:55.8},0).wait(1).to({x:68.65},0).wait(1).to({x:81.5},0).wait(1).to({x:94.3},0).wait(1).to({x:107.15},0).wait(1).to({x:120},0).wait(1).to({x:132.8},0).wait(1).to({x:145.65},0).wait(1).to({x:158.5},0).wait(1).to({x:171.3},0).wait(1).to({x:184.15},0).wait(1).to({x:197},0).wait(1).to({x:209.8},0).wait(1).to({x:222.65},0).wait(1).to({x:235.5},0).wait(1).to({x:248.3},0).wait(88).to({scaleX:1.044,scaleY:1.044,x:248.35},0).wait(1).to({scaleX:1.088,scaleY:1.088,x:248.3},0).wait(1).to({scaleX:1.132,scaleY:1.132,x:248.35},0).wait(1).to({scaleX:1.176,scaleY:1.176},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:248.3,y:576.15},0).wait(1).to({scaleX:1.264,scaleY:1.264,x:248.35},0).wait(1).to({scaleX:1.308,scaleY:1.308},0).wait(1).to({scaleX:1.352,scaleY:1.352},0).wait(1).to({scaleX:1.396,scaleY:1.396},0).wait(1).to({scaleX:1.44,scaleY:1.44,y:576.2},0).wait(1).to({scaleX:1.4267,scaleY:1.4267},0).wait(1).to({scaleX:1.4133,scaleY:1.4133},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:248.3},0).wait(1).to({scaleX:1.3867,scaleY:1.3867,x:248.35,y:576.15},0).wait(1).to({scaleX:1.3733,scaleY:1.3733},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({scaleX:1.3467,scaleY:1.3467},0).wait(1).to({scaleX:1.3333,scaleY:1.3333,x:248.3,y:576.2},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:248.35},0).wait(1).to({scaleX:1.3067,scaleY:1.3067},0).wait(1).to({scaleX:1.2933,scaleY:1.2933},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:248.3},0).wait(1).to({scaleX:1.2667,scaleY:1.2667,y:576.15},0).wait(1).to({scaleX:1.2533,scaleY:1.2533,x:248.35},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.2267,scaleY:1.2267},0).wait(1).to({scaleX:1.2133,scaleY:1.2133,x:248.3,y:576.2},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.1867,scaleY:1.1867,x:248.35},0).wait(1).to({scaleX:1.1733,scaleY:1.1733},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:248.3,y:576.15},0).wait(1).to({scaleX:1.1467,scaleY:1.1467},0).wait(1).to({scaleX:1.1333,scaleY:1.1333},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:248.35},0).wait(112).to({scaleX:1.0021},0).wait(1).to({scaleX:0.8842,x:248.3},0).wait(1).to({scaleX:0.7663,x:248.25},0).wait(1).to({scaleX:0.6484},0).wait(1).to({scaleX:0.5305},0).wait(1).to({scaleX:0.4126},0).wait(1).to({scaleX:0.2947},0).wait(1).to({scaleX:0.1768},0).wait(1).to({scaleX:0.0589},0).wait(1).to({skewY:180,x:248.2},0).wait(1).to({scaleX:0.1768},0).wait(1).to({scaleX:0.2947},0).wait(1).to({scaleX:0.4126},0).wait(1).to({scaleX:0.5305},0).wait(1).to({scaleX:0.6484},0).wait(1).to({scaleX:0.7663},0).wait(1).to({scaleX:0.8842},0).wait(1).to({scaleX:1.0021,x:248.15},0).wait(1).to({scaleX:1.12},0).wait(1).to({scaleX:0.9477,x:248.2},0).wait(1).to({scaleX:0.7754,x:248.15},0).wait(1).to({scaleX:0.6031,x:248.2},0).wait(1).to({scaleX:0.4308,x:248.25},0).wait(1).to({scaleX:0.2585,x:248.2},0).wait(1).to({scaleX:0.0862,x:248.25},0).wait(1).to({skewY:0,x:248.2},0).wait(1).to({scaleX:0.2585,x:248.25},0).wait(1).to({scaleX:0.4308,x:248.2},0).wait(1).to({scaleX:0.6031,x:248.25},0).wait(1).to({scaleX:0.7754,x:248.3},0).wait(1).to({scaleX:0.9477},0).wait(1).to({scaleX:1.12,x:248.35},0).wait(2).to({scaleY:0.9333},0).wait(1).to({scaleY:0.7467,y:576.2},0).wait(1).to({scaleY:0.56,y:576.15},0).wait(1).to({scaleY:0.3733},0).wait(1).to({scaleY:0.1867,y:576.2},0).wait(1).to({scaleX:0,scaleY:0,x:425.45,y:-576.2},0).wait(1).to({scaleX:1.12,scaleY:0.1867,skewX:180,x:248.35,y:576.15},0).wait(1).to({scaleY:0.3733,y:576.2},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:0.7467,y:576.15},0).wait(1).to({scaleY:0.9333,y:576.2},0).wait(1).to({scaleY:1.12},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:0.84,y:576.15},0).wait(1).to({scaleY:0.7},0).wait(1).to({scaleY:0.56,y:576.2},0).wait(1).to({scaleY:0.42},0).wait(1).to({scaleY:0.28,y:576.15},0).wait(1).to({scaleY:0.14},0).wait(1).to({scaleY:0,y:576},0).wait(1).to({scaleY:0.14,skewX:0,y:576.2},0).wait(1).to({scaleY:0.28},0).wait(1).to({scaleY:0.42,y:576.15},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:0.7,y:576.2},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.98,y:576.15},0).wait(1).to({scaleY:1.12},0).wait(143).to({_off:true},1).wait(472));

	// BG
	this.instance_13 = new lib.BG();
	this.instance_13.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},470).wait(472));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(164,165.2,1279.2,806.5);
// library properties:
lib.properties = {
	id: 'EBD6E1CDCA4E1948A7BCA714C1CEFFE3',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2_atlas_1.png", id:"2_atlas_1"},
		{src:"images/2_atlas_2.png", id:"2_atlas_2"},
		{src:"images/2_atlas_3.png", id:"2_atlas_3"}
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
an.compositions['EBD6E1CDCA4E1948A7BCA714C1CEFFE3'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;