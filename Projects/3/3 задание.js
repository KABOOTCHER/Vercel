(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"3 задание_atlas_1", frames: [[1282,0,169,169],[0,722,900,660],[0,0,1280,720],[1205,722,224,478],[902,722,301,524]]}
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



(lib.колесо = function() {
	this.initialize(ss["3 задание_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.машина = function() {
	this.initialize(ss["3 задание_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.initialize(ss["3 задание_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mothman = function() {
	this.initialize(ss["3 задание_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.MothWing = function() {
	this.initialize(ss["3 задание_atlas_1"]);
	this.gotoAndStop(4);
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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесо();
	this.instance.setTransform(0,0,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,91.3,91.3), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MothWing();
	this.instance.setTransform(0,0,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,114.4,199.1), null);


(lib.tyre = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol5();
	this.instance.setTransform(45.6,45.6,1,1,0,0,0,45.6,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-18.6,y:45.55},0).wait(1).to({rotation:-37.2},0).wait(1).to({rotation:-55.8,x:45.65,y:45.6},0).wait(1).to({rotation:-74.4,x:45.6},0).wait(1).to({rotation:-93,x:45.55,y:45.55},0).wait(1).to({rotation:-107.5,x:45.6,y:45.6},0).wait(1).to({rotation:-122,x:45.55},0).wait(1).to({rotation:-136.5,y:45.55},0).wait(1).to({rotation:-151},0).wait(1).to({rotation:-165.5,y:45.6},0).wait(1).to({rotation:-180,x:45.6},0).wait(1).to({rotation:-195,x:45.55,y:45.55},0).wait(1).to({rotation:-210},0).wait(1).to({rotation:-225,y:45.6},0).wait(1).to({rotation:-240},0).wait(1).to({rotation:-255},0).wait(1).to({rotation:-270,x:45.6},0).wait(1).to({rotation:-282.8571},0).wait(1).to({rotation:-295.7143,x:45.55,y:45.65},0).wait(1).to({rotation:-308.5714,x:45.6},0).wait(1).to({rotation:-321.4286,x:45.55},0).wait(1).to({rotation:-334.2857,x:45.6},0).wait(1).to({rotation:-347.1429,x:45.55,y:45.6},0).wait(1).to({rotation:-360,x:45.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-18.9,129.1,129.1);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(57.2,99.5,1,1,0,0,0,57.2,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:99.6,rotation:-1,x:57.25,y:99.6},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-3,x:57.2,y:99.55},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-5,x:57.25},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-4.2857,y:99.6},0).wait(1).to({rotation:-2.5714,x:57.2},0).wait(1).to({rotation:-0.8571,x:57.25},0).wait(1).to({rotation:0.8571,x:57.15,y:99.65},0).wait(1).to({rotation:2.5714,x:57.2,y:99.6},0).wait(1).to({rotation:4.2857,x:57.15},0).wait(1).to({rotation:6,x:57.2,y:99.65},0).wait(1).to({rotation:4.2857,x:57.15,y:99.6},0).wait(1).to({rotation:2.5714,x:57.2},0).wait(1).to({rotation:0.8571,x:57.15,y:99.65},0).wait(1).to({rotation:-0.8571,x:57.25,y:99.6},0).wait(1).to({rotation:-2.5714,x:57.2},0).wait(1).to({rotation:-4.2857,x:57.25},0).wait(1).to({rotation:-6,y:99.55},0).wait(1).to({rotation:-4.2857,y:99.6},0).wait(1).to({rotation:-2.5714,x:57.2},0).wait(1).to({rotation:-0.8571,x:57.25},0).wait(1).to({rotation:0.8571,x:57.15,y:99.65},0).wait(1).to({rotation:2.5714,x:57.2,y:99.6},0).wait(1).to({rotation:4.2857,x:57.15},0).wait(1).to({rotation:6,x:57.2,y:99.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-5.4,134.5,210);


(lib.car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4_copy
	this.instance = new lib.tyre("synched",0);
	this.instance.setTransform(133.2,57.2,1,1,0,0,0,45.6,45.6);

	this.instance_1 = new lib.tyre("synched",0);
	this.instance_1.setTransform(-123.95,57.2,1,1,0,0,0,45.6,45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_1,p:{startPosition:8}},{t:this.instance,p:{startPosition:8}}]},108).to({state:[]},1).wait(55));

	// машина_copy
	this.instance_2 = new lib.машина();
	this.instance_2.setTransform(211.5,-155.1,0.47,0.47,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},109).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.4,-155.1,422.9,310.2);


(lib.wing = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(57.2,99.5,1,1,0,0,0,57.2,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:99.6,rotation:-1.4,x:56.9,y:99.9,startPosition:1},0).wait(1).to({rotation:-2.8,x:56.55,y:100.25,startPosition:2},0).wait(1).to({rotation:-4.2,x:56.2,y:100.6,startPosition:3},0).wait(1).to({rotation:-5.6,x:55.85,y:100.9,startPosition:4},0).wait(1).to({rotation:-7,x:55.5,y:101.25,startPosition:5},0).wait(1).to({rotation:-4.6667,x:55.15,y:101.6,startPosition:6},0).wait(1).to({rotation:-2.3333,x:54.85,y:101.9,startPosition:7},0).wait(1).to({rotation:0,x:54.5,y:102.25,startPosition:8},0).wait(1).to({rotation:2.3333,x:54.1,y:102.6,startPosition:9},0).wait(1).to({rotation:4.6667,x:53.75,y:102.95,startPosition:10},0).wait(1).to({rotation:7,x:53.4,y:103.3,startPosition:11},0).wait(1).to({rotation:4.6667,x:54.25,y:102.05,startPosition:12},0).wait(1).to({rotation:2.3333,x:55.1,y:100.85,startPosition:13},0).wait(1).to({rotation:0,x:55.95,y:99.55,startPosition:14},0).wait(1).to({rotation:-2.3333,x:56.8,y:98.25,startPosition:15},0).wait(1).to({rotation:-4.6667,x:57.65,y:97,startPosition:16},0).wait(1).to({rotation:-7,x:58.45,y:95.8,startPosition:17},0).wait(1).to({rotation:-6.5882,x:58.5,startPosition:18},0).wait(1).to({rotation:-6.1765,x:58.45,y:95.75,startPosition:19},0).wait(1).to({rotation:-5.7647,startPosition:20},0).wait(1).to({rotation:-5.3529,x:58.5,startPosition:21},0).wait(1).to({rotation:-4.9412,startPosition:22},0).wait(1).to({rotation:-4.5294,x:58.45,y:95.8,startPosition:23},0).wait(1).to({rotation:-4.1176,startPosition:24},0).wait(1).to({rotation:-3.7059,x:58.5,startPosition:25},0).wait(1).to({rotation:-3.2941,x:58.45,y:95.85,startPosition:26},0).wait(1).to({rotation:-2.8824,x:58.5,y:95.8,startPosition:27},0).wait(1).to({rotation:-2.4706,y:95.85,startPosition:28},0).wait(1).to({rotation:-2.0588,startPosition:0},0).wait(1).to({rotation:-1.6471,y:95.8,startPosition:1},0).wait(1).to({rotation:-1.2353,y:95.85,startPosition:2},0).wait(1).to({rotation:-0.8235,startPosition:3},0).wait(1).to({rotation:-0.4118,x:58.4,startPosition:4},0).wait(1).to({rotation:0,x:58.45,y:95.8,startPosition:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-13.3,155.9,224.3);


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

	// mothman_copy
	this.instance = new lib.mothman();
	this.instance.setTransform(62.95,42.7,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109));

	// крыло_copy
	this.instance_1 = new lib.wing("synched",0);
	this.instance_1.setTransform(78.8,113.85,1,1,0,0,180,56,99.5);

	this.instance_2 = new lib.wing("synched",0);
	this.instance_2.setTransform(163,112.85,1,1,0,0,0,56,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(109));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241.8,276.9);


// stage content:
(lib._3задание = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(296.45,-290.3,1,1,165.0008,0,0,120.9,137.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[296.6,-290.2,287,-170.4,321.2,-60.1,356.3,53.2,427.7,148.6,506.2,253.4,636.1,247.3,755.1,241.7,874.2,246.1,973.2,249.7,1051.6,305.7,1181.5,470.8,1311.3,635.9,1425.7,719.9,1568.1,761.2,1921.4,863.6,2289.5,853.8,2300.1,853.5,2310.8,853.3], orient:'fixed'},startPosition:51},51).wait(58));

	// Слой_1
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(-375.35,342.3,1,1,90,0,0,120.9,137.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:541.6,y:219.1,startPosition:38},27).to({regX:121,rotation:39.2559,x:815.4,y:-38.9,startPosition:41},14).to({x:971.85,y:-238.35,startPosition:50},9).wait(59));

	// car
	this.instance_2 = new lib.car("synched",0);
	this.instance_2.setTransform(1467.05,512.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:1452.9613,y:512.8689,startPosition:1},0).wait(1).to({x:1438.8726,y:512.9377,startPosition:2},0).wait(1).to({x:1424.784,y:513.0066,startPosition:3},0).wait(1).to({x:1410.6953,y:513.0755,startPosition:4},0).wait(1).to({x:1396.6066,y:513.1443,startPosition:5},0).wait(1).to({x:1382.5179,y:513.2132,startPosition:6},0).wait(1).to({x:1368.4292,y:513.2821,startPosition:7},0).wait(1).to({x:1354.3406,y:513.3509,startPosition:8},0).wait(1).to({x:1340.2519,y:513.4198,startPosition:9},0).wait(1).to({x:1326.1632,y:513.4887,startPosition:10},0).wait(1).to({x:1312.0745,y:513.5575,startPosition:11},0).wait(1).to({x:1297.9858,y:513.6264,startPosition:12},0).wait(1).to({x:1283.8972,y:513.6953,startPosition:13},0).wait(1).to({x:1269.8085,y:513.7642,startPosition:14},0).wait(1).to({x:1255.7198,y:513.833,startPosition:15},0).wait(1).to({x:1241.6311,y:513.9019,startPosition:16},0).wait(1).to({x:1227.5425,y:513.9708,startPosition:17},0).wait(1).to({x:1213.4538,y:514.0396,startPosition:18},0).wait(1).to({x:1199.3651,y:514.1085,startPosition:19},0).wait(1).to({x:1185.2764,y:514.1774,startPosition:20},0).wait(1).to({x:1171.1877,y:514.2462,startPosition:21},0).wait(1).to({x:1157.0991,y:514.3151,startPosition:22},0).wait(1).to({x:1143.0104,y:514.384,startPosition:23},0).wait(1).to({x:1128.9217,y:514.4528,startPosition:24},0).wait(1).to({x:1114.833,y:514.5217,startPosition:25},0).wait(1).to({x:1100.7443,y:514.5906,startPosition:26},0).wait(1).to({x:1086.6557,y:514.6594,startPosition:27},0).wait(1).to({x:1072.567,y:514.7283,startPosition:28},0).wait(1).to({x:1058.4783,y:514.7972,startPosition:29},0).wait(1).to({x:1044.3896,y:514.866,startPosition:30},0).wait(1).to({x:1030.3009,y:514.9349,startPosition:31},0).wait(1).to({x:1016.2123,y:515.0038,startPosition:32},0).wait(1).to({x:1002.1236,y:515.0726,startPosition:33},0).wait(1).to({x:988.0349,y:515.1415,startPosition:34},0).wait(1).to({x:973.9462,y:515.2104,startPosition:35},0).wait(1).to({x:959.8575,y:515.2792,startPosition:36},0).wait(1).to({x:945.7689,y:515.3481,startPosition:37},0).wait(1).to({x:931.6802,y:515.417,startPosition:38},0).wait(1).to({x:917.5915,y:515.4858,startPosition:39},0).wait(1).to({x:903.5028,y:515.5547,startPosition:40},0).wait(1).to({x:889.4142,y:515.6236,startPosition:41},0).wait(1).to({x:875.3255,y:515.6925,startPosition:42},0).wait(1).to({x:861.2368,y:515.7613,startPosition:43},0).wait(1).to({x:847.1481,y:515.8302,startPosition:44},0).wait(1).to({x:833.0594,y:515.8991,startPosition:45},0).wait(1).to({x:818.9708,y:515.9679,startPosition:46},0).wait(1).to({x:804.8821,y:516.0368,startPosition:47},0).wait(1).to({x:790.7934,y:516.1057,startPosition:48},0).wait(1).to({x:776.7047,y:516.1745,startPosition:49},0).wait(1).to({x:762.616,y:516.2434,startPosition:50},0).wait(1).to({x:748.5274,y:516.3123,startPosition:51},0).wait(1).to({x:734.4387,y:516.3811,startPosition:52},0).wait(1).to({x:720.35,y:516.45,startPosition:53},0).wait(1).to({x:706.2613,y:516.5189,startPosition:54},0).wait(1).to({x:692.1726,y:516.5877,startPosition:55},0).wait(1).to({x:678.084,y:516.6566,startPosition:56},0).wait(1).to({x:663.9953,y:516.7255,startPosition:57},0).wait(1).to({x:649.9066,y:516.7943,startPosition:58},0).wait(1).to({x:635.8179,y:516.8632,startPosition:59},0).wait(1).to({x:621.7292,y:516.9321,startPosition:60},0).wait(1).to({x:607.6406,y:517.0009,startPosition:61},0).wait(1).to({x:593.5519,y:517.0698,startPosition:62},0).wait(1).to({x:579.4632,y:517.1387,startPosition:63},0).wait(1).to({x:565.3745,y:517.2075,startPosition:64},0).wait(1).to({x:551.2858,y:517.2764,startPosition:65},0).wait(1).to({x:537.1972,y:517.3453,startPosition:66},0).wait(1).to({x:523.1085,y:517.4142,startPosition:67},0).wait(1).to({x:509.0198,y:517.483,startPosition:68},0).wait(1).to({x:494.9311,y:517.5519,startPosition:69},0).wait(1).to({x:480.8425,y:517.6208,startPosition:70},0).wait(1).to({x:466.7538,y:517.6896,startPosition:71},0).wait(1).to({x:452.6651,y:517.7585,startPosition:72},0).wait(1).to({x:438.5764,y:517.8274,startPosition:73},0).wait(1).to({x:424.4877,y:517.8962,startPosition:74},0).wait(1).to({x:410.3991,y:517.9651,startPosition:75},0).wait(1).to({x:396.3104,y:518.034,startPosition:76},0).wait(1).to({x:382.2217,y:518.1028,startPosition:77},0).wait(1).to({x:368.133,y:518.1717,startPosition:78},0).wait(1).to({x:354.0443,y:518.2406,startPosition:79},0).wait(1).to({x:339.9557,y:518.3094,startPosition:80},0).wait(1).to({x:325.867,y:518.3783,startPosition:81},0).wait(1).to({x:311.7783,y:518.4472,startPosition:82},0).wait(1).to({x:297.6896,y:518.516,startPosition:83},0).wait(1).to({x:283.6009,y:518.5849,startPosition:84},0).wait(1).to({x:269.5123,y:518.6538,startPosition:85},0).wait(1).to({x:255.4236,y:518.7226,startPosition:86},0).wait(1).to({x:241.3349,y:518.7915,startPosition:87},0).wait(1).to({x:227.2462,y:518.8604,startPosition:88},0).wait(1).to({x:213.1575,y:518.9292,startPosition:89},0).wait(1).to({x:199.0689,y:518.9981,startPosition:90},0).wait(1).to({x:184.9802,y:519.067,startPosition:91},0).wait(1).to({x:170.8915,y:519.1358,startPosition:92},0).wait(1).to({x:156.8028,y:519.2047,startPosition:93},0).wait(1).to({x:142.7142,y:519.2736,startPosition:94},0).wait(1).to({x:128.6255,y:519.3425,startPosition:95},0).wait(1).to({x:114.5368,y:519.4113,startPosition:96},0).wait(1).to({x:100.4481,y:519.4802,startPosition:97},0).wait(1).to({x:86.3594,y:519.5491,startPosition:98},0).wait(1).to({x:72.2708,y:519.6179,startPosition:99},0).wait(1).to({x:58.1821,y:519.6868,startPosition:100},0).wait(1).to({x:44.0934,y:519.7557,startPosition:101},0).wait(1).to({x:30.0047,y:519.8245,startPosition:102},0).wait(1).to({x:15.916,y:519.8934,startPosition:103},0).wait(1).to({x:1.8274,y:519.9623,startPosition:104},0).wait(1).to({x:-12.2613,y:520.0311,startPosition:105},0).wait(1).to({x:-26.35,y:520.1,startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1));

	// Symbol_3
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(12.2,635.95,1,1,44.9994,0,0,120.9,138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,guide:{path:[12.4,635.9,128.4,619,243.1,593.8,359.3,568.3,469.6,525.6,576.6,484.2,681.1,430,784.9,376.1,884.8,315.2,970.1,263.2,1051.5,211.1,1094.4,170.3,1145.2,141.9,1241.9,87.9,1347.3,50,1445.2,14.8,1549.8,17.3,1628.5,19.2,1706,13.5,1763.8,9.3,1821.3,14.8]},startPosition:108},108).wait(1));

	// BG
	this.instance_4 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(125.1,-80.1,2323.2000000000003,1086.8);
// library properties:
lib.properties = {
	id: '031ECA5C1A2BBA4991F64D6A8C9197C9',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/3 задание_atlas_1.png", id:"3 задание_atlas_1"}
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
an.compositions['031ECA5C1A2BBA4991F64D6A8C9197C9'] = {
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