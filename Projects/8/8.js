(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"8_atlas_1", frames: [[0,0,1920,1686]]},
		{name:"8_atlas_2", frames: [[0,0,1280,1024],[0,1026,920,920]]}
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
	this.initialize(ss["8_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.duck = function() {
	this.initialize(ss["8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Hunter = function() {
	this.initialize(ss["8_atlas_2"]);
	this.gotoAndStop(1);
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.duck();
	this.instance.setTransform(-76.4,-67.1,0.0796,0.0796);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-67.1,152.9,134.3);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Hunter();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,920,920), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AoNm6IQbAAIAAN1IwbAAg");
	this.shape.setTransform(52.575,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#734002").s().p("AoNG7IAAt1IQbAAIAAN1g");
	this.shape_1.setTransform(52.575,44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,107.2,90.6), null);


// stage content:
(lib._8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [7,22,24,38];
	// timeline functions:
	this.frame_7 = function() {
		playSound("_13sfxduckquack");
	}
	this.frame_22 = function() {
		playSound("_13sfxduckquack");
	}
	this.frame_24 = function() {
		playSound("_10sfxgunshot");
	}
	this.frame_38 = function() {
		playSound("_14sfxdeadduckfalls");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(15).call(this.frame_22).wait(2).call(this.frame_24).wait(14).call(this.frame_38).wait(57));

	// Armature_17
	this.ikNode_6 = new lib.Symbol3();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(141.55,752.4,1,1,23.5178,0,0,53.9,53.1);

	this.ikNode_7 = new lib.Symbol4();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.setTransform(214.25,594.45,0.4292,0.4292,23.5166,0,0,280,532.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:23.5166,x:214.25,y:594.45,regX:280,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:1,scaleY:1,rotation:23.5178,x:141.55,y:752.4}}]}).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:22.7896,x:212.25,y:593.45,regX:280,regY:532.5}},{t:this.ikNode_6,p:{regX:54,scaleX:0.9999,scaleY:0.9999,rotation:22.7902,x:141.65,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:22.0643,x:210.2,y:592.65,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:22.0638,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:21.3365,x:208.2,y:591.8,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:21.3366,x:141.55,y:752.25}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:20.6078,x:206.2,y:590.9,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:20.6106,x:141.45,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:19.8808,x:204.1,y:590.1,regX:280,regY:532.5}},{t:this.ikNode_6,p:{regX:54,scaleX:0.9999,scaleY:0.9999,rotation:19.8831,x:141.65,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:19.1539,x:202,y:589.35,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:19.1558,x:141.55,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:18.4285,x:199.9,y:588.6,regX:280,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:18.4297,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:17.7025,x:197.9,y:587.85,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:17.7031,x:141.55,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:16.973,x:195.8,y:587.15,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:16.976,x:141.55,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:16.2479,x:193.7,y:586.5,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:16.2488,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:15.5192,x:191.55,y:585.8,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:15.5223,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:14.7952,x:189.5,y:585.2,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:14.7959,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:14.0693,x:187.35,y:584.5,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:54,scaleX:0.9999,scaleY:0.9999,rotation:14.0691,x:141.65,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:13.3415,x:185.15,y:584.05,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:13.3411,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:12.6141,x:183.1,y:583.55,regX:280.2,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:12.6143,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:11.8884,x:180.9,y:582.95,regX:280,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:11.8878,x:141.5,y:752.25}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:11.1609,x:178.7,y:582.4,regX:280,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:1,scaleY:1,rotation:11.1613,x:141.55,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:10.4349,x:176.55,y:581.95,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:10.4342,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:9.7048,x:174.4,y:581.55,regX:279.9,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:9.7085,x:141.5,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4291,scaleY:0.4291,rotation:8.978,x:172.3,y:581.1,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:1,scaleY:1,rotation:8.9809,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:8.2525,x:170.1,y:580.8,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:54,scaleX:0.9999,scaleY:0.9999,rotation:8.2534,x:141.65,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:7.5245,x:167.95,y:580.5,regX:280,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:7.5278,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:6.7978,x:165.75,y:580.15,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:1,scaleY:1,rotation:6.8007,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:6.072,x:163.5,y:579.8,regX:279.9,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:6.074,x:141.55,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:5.3451,x:161.35,y:579.5,regX:280,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:5.3464,x:141.5,y:752.25}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:4.6192,x:159.15,y:579.3,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:4.6206,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:3.892,x:156.95,y:579.05,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:3.8929,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:3.1654,x:154.75,y:578.9,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:1,scaleY:1,rotation:3.1666,x:141.5,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:2.4392,x:152.6,y:578.7,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:2.4392,x:141.55,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:1.7115,x:150.4,y:578.65,regX:280.1,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:1.7131,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:0.984,x:148.2,y:578.5,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:54,scaleX:0.9999,scaleY:0.9999,rotation:0.9863,x:141.65,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:0.2567,x:146,y:578.5,regX:280.2,regY:532.6}},{t:this.ikNode_6,p:{regX:53.9,scaleX:1,scaleY:1,rotation:0.2597,x:141.5,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-0.4604,x:143.75,y:578.45,regX:280.2,regY:532.6}},{t:this.ikNode_6,p:{regX:54,scaleX:1,scaleY:1,rotation:-0.4625,x:141.65,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.1857,x:141.6,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.1892,x:141.55,y:752.35}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).to({state:[{t:this.ikNode_7,p:{scaleX:0.4292,scaleY:0.4292,rotation:-1.9132,x:139.25,y:578.4,regX:280.1,regY:532.5}},{t:this.ikNode_6,p:{regX:53.9,scaleX:0.9999,scaleY:0.9999,rotation:-1.9151,x:141.5,y:752.3}}]},1).wait(1));

	// fire
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgVAJQAAgCABgCAgVAJQAAgEABgFIASgbIgGATIAAgBIAAABIASgHIgMAZIAWgPIgSAXIAVgFIgZAOQgDgBgDgBIgGADQgHgDgBgIQAAgDABgFg");
	this.shape.setTransform(386.0417,379.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgJAaIAIgEIgKABIAKgNIgLAHIAIgPIgJAAIAEgJIATgIIgMAaIAVgPIgRAXIAVgGIgZAOIgHgBgAgVAAIASgaIgGASIgLANIgCAFIABgKg");
	this.shape_1.setTransform(386.075,379.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgKAIIABgIIABgDIALgOIAAgBIAAABIgEALIAJgBIgIAPIALgHIgKANIAJgBIgHADIgFADQgHgDgBgIg");
	this.shape_2.setTransform(384.8167,380.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AggAJIBBgR");
	this.shape_3.setTransform(391.75,371.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.667)").ss(0.7,1,1).p("AgfgXIgnAjQgDAGgCAFIAsguIAAABIBAgTIgqBDIBKgnIg6A8IBHgOIhYAjQgMgBgJgCIgTAGQgYgIgDgSQgBgKADgMQAAgLADgNIA9hGgAgfgWIgPAbIAggCIgdAoIAmgSIghAhIAfgCIgYAJ");
	this.shape_4.setTransform(391.6625,375.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgfAIIBAgRIhAATg");
	this.shape_5.setTransform(391.75,371.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhNAtQgBgJADgMQAAgMADgNIA9hGIgUAwIgnAjQgDAFgCAHQACgHADgFIAngjIgsAvIAsgvIAAACIgPAaIAggCIgdAoIAmgSIghAhIAfgBIgYAIIgTAGQgYgHgDgTgAgfBBIAYgIIgfABIAhghIgmASIAdgoIggACIAPgaIBAgUIgqBDIBKgnIg6A8IBHgOIhYAkIgVgEgAgfgXg");
	this.shape_6.setTransform(391.6625,375.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Ag3AOIBvgb");
	this.shape_7.setTransform(397.45,365.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.333)").ss(0.4,1,1).p("Ag1gkIBugfIhJBtIB/hAIhjBhIB5gWIiXA5QgUgCgQgEIggALQgpgOgEgdQgCgPAGgTQgCgTAGgWIBohvIgiBMIAAACIgaAsIA3gEIgyBAIBBgbIg5A0IA2gDIgqAOAh/AmIBKhMIhEA5QgFAJgBAKg");
	this.shape_8.setTransform(397.2882,370.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AiDBIQgCgPAGgUQgCgSAGgWIBohvIgiBMIhEA5QgFAJgBAJIBKhLIAAACIBugeIhJBsIB/hAIhjBhIB5gWIiXA6QgUgDgQgEIAqgOIg2AEIA5g1IhBAcIAyhAIg3ADIAagsIgaAsIA3gDIgyBAIBBgcIg5A1IA2gEIgqAOIggALQgpgNgEgegAh5ATIBEg5IhKBLQABgJAFgJgAg1gmIBugcIhuAegAg1gmgAA5hCg");
	this.shape_9.setTransform(397.2882,370.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Ai1A0QgCgaAIgeICTiaIgvBpIAEgCIgEAGICbgrIhnCWICzhYIiMCGICrgfIjVBPQgdgDgWgFIguAPQg5gTgGgoQgDgVAIgbQADgOAHgM");
	this.shape_10.setTransform(402.9091,366.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AhQCTIA8gSIhNADIBQhIIhbAmIBHhZIhOAFIAlg8ICcgrIhnCWICyhYIiLCGICrgeIjVBPQgdgEgXgFgAiygBICUiaIgwBqIhgBPQgHAMgCANQgCgaAHgeg");
	this.shape_11.setTransform(403.1789,365.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhUAwQgDgUAIgbQACgNAHgMIBfhQIAEgDIgEAHIgkA9IBNgFIhGBYIBagmIhQBIIBNgEIg8ASIgsAQQg5gTgGgpg");
	this.shape_12.setTransform(392.7841,371.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("Ag8AQIB5gf");
	this.shape_13.setTransform(398.775,363.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.251)").ss(0.3,1,1).p("Ag6gmIB4gjIhPB3ICKhFIhsBpICFgYIimA/QgWgDgSgEIgjAMQgsgPgFggQgCgQAGgWIBShTIhLA/QgFAKgCAKQgCgUAGgYIBzh6IglBTIAAAEIgdAvIA8gEIg3BGIBHgeIg+A5IA8gDIgvAP");
	this.shape_14.setTransform(398.625,369.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AiQBPQgCgQAGgWQgCgUAGgYIBzh6IglBTIB4geIh4AiIAAgEIhLA/QgFAKgCAKIBShTIAAAEIgdAvIA8gEIg3BGIBHgeIg+A5IA8gDIgvAPIAvgPIg8ADIA+g5IhHAeIA3hGIg8AEIAdgvIB4giIhPB2ICKhGIhsBqICFgYIimA+QgWgCgSgEIgjALQgsgOgFgggAiFAVIBLg/IhSBTQACgKAFgKgAg6gqgAA+hIg");
	this.shape_15.setTransform(398.625,369.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgrALIBWgW");
	this.shape_16.setTransform(394.45,368.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.502)").ss(0.5,1,1).p("AgpgcIBWgZIg5BXIBigzIhNBNIBfgRIh2AtQgQgCgMgDIgZAJQgggLgDgXQgCgMAEgQQgBgPAFgRIBRhZIgaA9IAAACIgVAjIArgDIgnAzIAzgWIgtAqIArgCIghAKAhkAeIA7g8Ig1AtQgEAHgCAIg");
	this.shape_17.setTransform(394.3295,372.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AhmA6QgCgMAEgQQgBgPAFgRIBRhZIgaA9Ig1AtQgEAHgCAIIA7g8IAAACIBWgZIg5BXIBigzIhNBNIBfgRIh2AtQgQgCgMgDIAhgKIgrACIAtgqIgzAWIAngzIgrADIAVgjIgVAjIArgDIgnAzIAzgWIgtAqIArgCIghAKIgZAJQgggLgDgXgAheAPIA1gtIg7A8QACgIAEgHgAgpgeIBWgXIhWAZgAgpgegAAtg1g");
	this.shape_18.setTransform(394.3295,372.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AgZAHIAzgN");
	this.shape_19.setTransform(390.1,373.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.749)").ss(0.8,1,1).p("AgYgTIggAdQgCAEgBAGgAgZA2IgPAFQgTgHgCgPQgBgIADgJQgBgKADgLIAwg5IgPAnIAAACIgNAWIAagCIgXAhIAegPIgaAbIAZgBgAgYgRIAzgQIgiA3IA7ggIgvAxIA5gLIhGAdQgJgBgIgC");
	this.shape_20.setTransform(390.0357,376.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgZAGIAzgNIgzAPg");
	this.shape_21.setTransform(390.1,373.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("Ag9AlQgBgIADgJQgBgLADgKIAwg5IgPAnIggAdIgDAKIADgKIAggdIgjAnIAjgnIAAACIgNAVIAagCIgXAiIAegPIgaAbIAZgBIgUAHIgPAFQgTgHgCgPgAgZA2IAUgHIgZABIAagbIgeAPIAXgiIgaACIANgVIAzgQIgiA3IA7ghIgvAyIA5gLIhGAcIgRgCgAgYgTg");
	this.shape_22.setTransform(390.0357,376.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AgTAJQAAgFABgEIAQgZIgFARIAAAAIAAABIAQgHIgLAYIATgOIgPAVIASgFIgWANQgDgBgCgBIgFADQgGgDgBgHQAAgDAAgEQABgDAAgC");
	this.shape_23.setTransform(385.725,379.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgIAIIAAgIIABgDIAKgNIAAAAIAAABIgDAKIAHgBIgHANIAJgGIgIAMIAIgBIgGADIgEACQgGgDgBgGg");
	this.shape_24.setTransform(384.625,380.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgHAYIAGgDIgJABIAJgMIgKAGIAIgOIgJABIAFgJIAQgHIgLAXIASgNIgOAUIASgEIgWAMIgFgBgAgSAAIAPgYIgEARIgLAMIgBAEIABgJg");
	this.shape_25.setTransform(385.75,379.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},32).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[]},1).wait(55));

	// duck
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(1346.25,387.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({guide:{path:[1346.2,387.5,1338.1,383.5,1329,380.6,1319.6,378,1315.5,376.7,1308.6,374.6,1304.2,371.8,1298.6,368.3,1293.6,361.9,1291.7,359.5,1284.2,343.6,1275.9,325.6,1269.2,314.9,1266.1,309.9,1258,299.7,1251.7,291.8,1247.9,283.6,1239.3,265.6,1223.7,248.6,1209.5,233.1,1191.6,220.8,1174.6,209.1,1158.4,203,1142.1,196.8,1131.2,198,1086.2,203.1,1058,196.5,1038.4,192,1019.2,178.7,1009.1,171.4,1003.9,167.9,994.8,161.8,986.5,158.1,964.5,148.2,931.7,148.2,928.5,148.2,896.3,155.4,864.1,162.5,856.8,162.5,841.2,162.5,823.3,155.5,811.7,151,803.6,144.7,795.2,138.1,790.6,129.6,790.6,128.2,790.6,126.8,791.9,126.8,795.7,126.1,799.4,125.4,801.3,125.4,805.7,125.4,808,128.4,809.8,130.7,810.6,135.4,810.6,139.7,810.6,144,806.7,144.3,803.6,144.7,795,145.7,792.7,146.9,786.4,150,786.4,160.9,786.4,168.3,789.5,172.8,791.2,175.2,796.4,179.4,801.2,183.3,803.3,186.9,806.4,192.4,806.4,201.5,806.4,210.4,803.7,216.2,802.3,219.2,797.8,224.8,793.7,230,791.9,234.6,789.2,241.8,789.2,253,789.2,261.7,792,274.4,794.8,287,794.8,294.3,794.8,303.2,789.9,312.3,783.1,323.1,779.2,329.4,771.9,340.9,768.4,352.1,763.5,367.5,763.5,387.3,763.5,402.9,769.9,427.1,773.5,440.8,774.3,444.3,776.3,453.2,776.3,459.4,776.3,469.4,772.5,482.3,770.3,489.9,764.2,505.6,758.2,521.2,755.9,529.2,752.1,542.3,752.1,552.7,752.1,563.7,754.4,571.3,755.5,575.2,759.3,583,762.8,590.2,764.2,596.3,766.5,605.7,766.5,619.7,766.5,638.9,757.8,663.9,755.4,671,749.9,685.6,745,699.2,742.1,709.5], orient:'fixed'}},79).to({alpha:0},14).wait(1));

	// BG
	this.instance_1 = new lib.BG();
	this.instance_1.setTransform(0,-2,1,1.1421);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,358,782.7,809.5999999999999);
// library properties:
lib.properties = {
	id: 'EF7FEEDF107FBE4F9EBBA8D6767B5C4F',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/8_atlas_1.png", id:"8_atlas_1"},
		{src:"images/8_atlas_2.png", id:"8_atlas_2"},
		{src:"sounds/_10sfxgunshot.mp3", id:"_10sfxgunshot"},
		{src:"sounds/_13sfxduckquack.mp3", id:"_13sfxduckquack"},
		{src:"sounds/_14sfxdeadduckfalls.mp3", id:"_14sfxdeadduckfalls"}
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
an.compositions['EF7FEEDF107FBE4F9EBBA8D6767B5C4F'] = {
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