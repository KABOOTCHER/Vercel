(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"8.2_atlas_1", frames: [[0,0,1600,900]]},
		{name:"8.2_atlas_2", frames: [[0,1602,1118,190],[502,0,1248,425],[1059,941,397,363],[502,427,555,920],[0,0,500,1193],[1059,427,389,512],[0,1349,1204,251]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(ss["8.2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["8.2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.гоблин = function() {
	this.initialize(ss["8.2_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.зелье = function() {
	this.initialize(ss["8.2_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.луук = function() {
	this.initialize(ss["8.2_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.мешокмонет = function() {
	this.initialize(ss["8.2_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.стрела = function() {
	this.initialize(ss["8.2_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.initialize(ss["8.2_atlas_1"]);
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


(lib.Символ14 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A+6MZQlIAAjojoQjojoAAlJIAAAAQAAlIDojoQDojoFIAAMA91AAAQFIAADoDoQDoDoAAFIIAAAAQAAFJjoDoQjoDolIAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-277.1,-79.2,554.3,158.5), null);


(lib.Символ10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-275.7,-46,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-311.9,-106.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.9,-106.3,624,212.5);


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
	this.instance = new lib.стрела();
	this.instance.setTransform(212.6,0,0.1766,0.1961,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,212.6,49.2), null);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.мешокмонет();
	this.instance.setTransform(-21.95,-28.9,0.1129,0.1129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-28.9,43.9,57.8);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.зелье();
	this.instance.setTransform(-51.75,-85.75,0.1865,0.1865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-85.7,103.5,171.5);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.зелье();
	this.instance.setTransform(-51.75,-85.75,0.1865,0.1865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-85.7,103.5,171.5);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.гоблин();
	this.instance.setTransform(-157.7,-144.2,0.7945,0.7945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-144.2,315.4,288.4);


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
	this.instance = new lib.гоблин();
	this.instance.setTransform(-157.7,-144.2,0.7945,0.7945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-144.2,315.4,288.4);


(lib.Символ11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ10("synched",0);
	this.instance.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-311.9,-106.3,624,212.5), null);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация4("synched",0);
	this.instance.setTransform(0.05,0.05,0.5131,0.5131,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-26.5,-44,53.1,88.1), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(0,0.2,0.6551,0.6551,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-33.9,-56.1,67.8,112.4), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация4("synched",0);
	this.instance.setTransform(0,0,0.148,0.148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-7.6,-12.6,15.3,25.4), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация6("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-21.9,-28.9,43.9,57.8), null);


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
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(0,0,0.6609,0.6609);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-34.2,-56.6,68.4,113.4), null);


(lib.Символ6 = function(mode,startPosition,loop,reversed) {
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
	this.movieClip_2 = new lib.Символ3();
	this.movieClip_2.name = "movieClip_2";

	this.movieClip_3 = new lib.Символ4();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(-0.2,-16.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_3},{t:this.movieClip_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-21.9,-28.9,43.9,57.8), null);


// stage content:
(lib._82 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [83];
	// timeline functions:
	this.frame_83 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_11.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("https://www.youtube.com/watch?v=SqKN7yOZ7pg&t=1s", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(83).call(this.frame_83).wait(41));

	// Слой_5
	this.movieClip_11 = new lib.Символ14();
	this.movieClip_11.name = "movieClip_11";
	this.movieClip_11.setTransform(357.2,109.1);
	this.movieClip_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_11).wait(83).to({_off:false},0).wait(41));

	// Слой_2
	this.movieClip_9 = new lib.Символ11();
	this.movieClip_9.name = "movieClip_9";
	this.movieClip_9.setTransform(358.8,-153.1);
	this.movieClip_9._off = true;

	this.instance = new lib.Символ10("synched",0);
	this.instance.setTransform(358.8,106.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_9}]},69).to({state:[{t:this.instance}]},14).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_9).wait(69).to({_off:false},0).to({_off:true,y:106.3,mode:"synched",startPosition:0},14).wait(41));

	// стрела
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(1089.3,636.6,1,1,0,0,0,106.3,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1070.95,y:627.7},0).wait(1).to({x:1052.65,y:618.8},0).wait(1).to({x:1034.35,y:609.9},0).wait(1).to({x:1016.05,y:601},0).wait(1).to({x:997.75,y:592.1},0).wait(1).to({x:979.4,y:583.25},0).wait(1).to({x:961.1,y:574.35},0).wait(1).to({x:942.8,y:565.45},0).wait(1).to({x:924.5,y:556.55},0).wait(1).to({x:906.2,y:547.65},0).wait(1).to({x:887.9,y:538.8},0).wait(1).to({x:890.85,y:527.8},0).wait(1).to({x:893.85,y:516.8},0).wait(1).to({x:896.8,y:505.8},0).wait(1).to({x:899.8,y:494.8},0).wait(1).to({x:902.75,y:483.8},0).wait(1).to({x:905.75,y:472.8},0).wait(1).to({x:908.7,y:461.8},0).wait(1).to({x:911.7,y:450.8},0).wait(1).to({x:914.7,y:439.8},0).wait(1).to({x:920.7},0).wait(1).to({x:926.75},0).wait(1).to({x:932.8},0).wait(1).to({x:938.85},0).wait(1).to({x:944.85},0).wait(1).to({x:950.9},0).wait(1).to({x:956.95},0).wait(1).to({x:963},0).wait(1).to({x:969},0).wait(1).to({x:975.05},0).wait(1).to({x:981.1},0).wait(1).to({x:987.15},0).wait(1).to({x:993.2},0).wait(1).to({x:999.65},0).wait(1).to({x:1006.15},0).wait(1).to({x:1012.65},0).wait(1).to({x:1019.15},0).wait(1).to({x:1025.65},0).wait(1).to({x:1032.1},0).wait(1).to({x:1038.6},0).wait(1).to({x:1045.1},0).wait(1).to({x:1051.6},0).wait(1).to({x:1058.1},0).wait(1).to({x:1064.6},0).wait(1).to({x:1071.05},0).wait(1).to({x:1061.75},0).wait(1).to({x:1052.4},0).wait(1).to({x:1043.1},0).wait(1).to({x:1033.75},0).wait(1).to({x:1024.45},0).wait(1).to({x:1015.1},0).wait(1).to({x:1005.75},0).wait(1).to({x:996.45},0).wait(1).to({x:987.1},0).wait(1).to({x:977.8},0).wait(1).to({x:968.45},0).wait(1).to({x:899.3},0).wait(1).to({x:830.15},0).wait(1).to({x:760.95},0).wait(1).to({x:691.8},0).wait(1).to({x:622.65},0).wait(1).to({x:553.45},0).wait(1).to({x:484.3},0).wait(1).to({x:415.15},0).wait(1).to({x:346},0).wait(1).to({x:292.65,y:439.85},0).wait(1).to({x:239.3,y:439.95},0).wait(1).to({x:185.95,y:440},0).wait(1).to({x:132.65,y:440.1},0).wait(1).to({x:79.35,y:440.2},0).wait(1).to({x:26,y:440.25},0).wait(1).to({x:-27.3,y:440.35},0).wait(1).to({x:-80.65,y:440.4},0).wait(1).to({x:-134,y:440.5},0).wait(1).to({x:-187.35,y:440.6},0).wait(49));

	// тетева
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BABABA").ss(3,1,1).p("AA/tMIh9aZ");
	this.shape.setTransform(1098.55,436.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BABABA").ss(3,1,1).p("AhGNNQC/tMhCtN");
	this.shape_1.setTransform(1099.3942,436.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BABABA").ss(3,1,1).p("AhjNNQFBtLjEtO");
	this.shape_2.setTransform(1102.2463,436.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BABABA").ss(3,1,1).p("AiCNNQHCtKlEtP");
	this.shape_3.setTransform(1105.3436,436.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BABABA").ss(3,1,1).p("AiiNNQJDtJnFtQ");
	this.shape_4.setTransform(1108.5169,436.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BABABA").ss(3,1,1).p("AjCNNQLEtJpGtQ");
	this.shape_5.setTransform(1111.7036,436.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BABABA").ss(3,1,1).p("AjiNNQNGtIrItR");
	this.shape_6.setTransform(1114.9154,436.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BABABA").ss(3,1,1).p("AkCNNQPHtHtJtS");
	this.shape_7.setTransform(1118.1222,436.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BABABA").ss(3,1,1).p("AkiNNQRItGvKtT");
	this.shape_8.setTransform(1121.3335,436.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BABABA").ss(3,1,1).p("AlCNNQTJtFxLtU");
	this.shape_9.setTransform(1124.5603,436.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BABABA").ss(3,1,1).p("AliNNQVKtEzMtV");
	this.shape_10.setTransform(1127.7768,436.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BABABA").ss(3,1,1).p("AmDNNQXMtE1OtV");
	this.shape_11.setTransform(1131.0073,436.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BABABA").ss(3,1,1).p("AkltMQXPNW5NND");
	this.shape_12.setTransform(1134.2214,436.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BABABA").ss(3,1,1).p("Al1NNQWVs70Xte");
	this.shape_13.setTransform(1129.6476,436.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BABABA").ss(3,1,1).p("AlHNNQTeszxgtm");
	this.shape_14.setTransform(1125.0838,436.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BABABA").ss(3,1,1).p("AkaNNQQnsruptu");
	this.shape_15.setTransform(1120.5117,436.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BABABA").ss(3,1,1).p("AjsNNQNvsjrxt2");
	this.shape_16.setTransform(1115.9465,436.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BABABA").ss(3,1,1).p("Ai+NNQK3sbo5t+");
	this.shape_17.setTransform(1111.3941,436.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BABABA").ss(3,1,1).p("AiRNNQIAsUmCuF");
	this.shape_18.setTransform(1106.8828,436.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BABABA").ss(3,1,1).p("AhlNNQFJsMjMuN");
	this.shape_19.setTransform(1102.4466,436.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BABABA").ss(3,1,1).p("Ag/NNQCRsEgUuV");
	this.shape_20.setTransform(1098.6758,436.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BABABA").ss(3,1,1).p("Ag7NNQglr8Ciud");
	this.shape_21.setTransform(1098.2078,436.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BABABA").ss(3,1,1).p("AgTNNQjcr0FZul");
	this.shape_22.setTransform(1094.2744,436.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BABABA").ss(3,1,1).p("ACWtMQoQOtGSLs");
	this.shape_23.setTransform(1089.826,436.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BABABA").ss(3,1,1).p("AgRNNQjlrsFiut");
	this.shape_24.setTransform(1094.0483,436.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BABABA").ss(3,1,1).p("Ag3NNQg4rsC1ut");
	this.shape_25.setTransform(1097.8912,436.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BABABA").ss(3,1,1).p("Ag+NNQB1rsAIut");
	this.shape_26.setTransform(1098.55,436.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BABABA").ss(3,1,1).p("AAhtMQClOtkiLs");
	this.shape_27.setTransform(1101.5457,436.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BABABA").ss(3,1,1).p("AhPNNQDpsEhsuV");
	this.shape_28.setTransform(1100.2661,436.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BABABA").ss(3,1,1).p("AhENNQCxscg0t9");
	this.shape_29.setTransform(1099.1291,436.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BABABA").ss(3,1,1).p("Ag+NNQB3s1AGtk");
	this.shape_30.setTransform(1098.55,436.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},33).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(33).to({_off:true},1).wait(30).to({_off:false},0).wait(60));

	// лук
	this.instance_2 = new lib.луук();
	this.instance_2.setTransform(1109.3,311,0.1766,0.1961,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124));

	// гоблин
	this.instance_3 = new lib.гоблин();
	this.instance_3.setTransform(80,232,0.7945,0.7945);

	this.instance_4 = new lib.Анимация2("synched",0);
	this.instance_4.setTransform(237.7,376.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация3("synched",0);
	this.instance_5.setTransform(-295.3,377.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},65).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},8).to({state:[]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({rotation:-19.6899,x:131.1,y:376.4},2).to({_off:true,rotation:0,x:-295.3,y:377.2},8).wait(49));

	// деньги
	this.movieClip_5 = new lib.Символ6();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.setTransform(226.95,419.9);
	this.movieClip_5._off = true;

	this.instance_6 = new lib.Анимация6("synched",0);
	this.instance_6.setTransform(273.75,459.85);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(65).to({_off:false},0).to({_off:true,x:273.75,y:459.85,mode:"synched",startPosition:0},4).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65).to({_off:false},4).to({scaleX:1.8443,scaleY:1.8443,x:235.7,y:603.1},7).to({x:150.9},4).to({scaleX:1.506,scaleY:1.506},8).to({scaleX:1.8443,scaleY:1.8443},8).to({scaleX:1.506,scaleY:1.506},10).to({scaleX:1.8443,scaleY:1.8443},8).wait(10));

	// зелье
	this.movieClip_7 = new lib.Символ8();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.setTransform(375.85,360.8);
	this.movieClip_7._off = true;

	this.movieClip_1 = new lib.Символ2();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(409,539.25);
	this.movieClip_1._off = true;

	this.instance_7 = new lib.Анимация5("synched",0);
	this.instance_7.setTransform(409,539.25,0.9563,0.9563);
	this.instance_7._off = true;

	this.movieClip_4 = new lib.Символ5();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(409,539.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_7}]},71).to({state:[{t:this.movieClip_1}]},7).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.movieClip_4}]},8).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_7).wait(71).to({_off:false},0).to({_off:true,x:409,y:539.25},7).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(71).to({_off:false},7).to({_off:true,scaleX:0.9563,scaleY:0.9563,mode:"synched",startPosition:0},10).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78).to({_off:false},10).to({regY:0.1,scaleX:0.5617,scaleY:0.5617,y:539.3},8).to({regY:0.2,scaleX:0.9942,scaleY:0.9942,y:539.35},10).to({_off:true,regY:0,scaleX:1,scaleY:1,y:539.25,mode:"independent"},8).wait(10));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(187,100.6,1093.1,619.4);
// library properties:
lib.properties = {
	id: '0672884216D80342BE84CEE1A2CB5C67',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/8.2_atlas_1.png", id:"8.2_atlas_1"},
		{src:"images/8.2_atlas_2.png", id:"8.2_atlas_2"}
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
an.compositions['0672884216D80342BE84CEE1A2CB5C67'] = {
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