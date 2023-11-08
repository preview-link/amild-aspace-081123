(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.batu1 = function() {
	this.initialize(img.batu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.batu2 = function() {
	this.initialize(img.batu2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.bgbawah = function() {
	this.initialize(img.bgbawah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.bglangit = function() {
	this.initialize(img.bglangit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.bm = function() {
	this.initialize(img.bm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,552);


(lib.bolong = function() {
	this.initialize(img.bolong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,65);


(lib.BukanMain05 = function() {
	this.initialize(img.BukanMain05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,331);


(lib.BukanMain06 = function() {
	this.initialize(img.BukanMain06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,331);


(lib.BukanMain07 = function() {
	this.initialize(img.BukanMain07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,331);


(lib.BukanMain08 = function() {
	this.initialize(img.BukanMain08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,331);


(lib.BukanMain10 = function() {
	this.initialize(img.BukanMain10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,331);


(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.c2 = function() {
	this.initialize(img.c2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.CTAcopy = function() {
	this.initialize(img.CTAcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,908,277);


(lib.gitar1 = function() {
	this.initialize(img.gitar1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.guitar2 = function() {
	this.initialize(img.guitar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.o1 = function() {
	this.initialize(img.o1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.o2 = function() {
	this.initialize(img.o2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.o3 = function() {
	this.initialize(img.o3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.o4 = function() {
	this.initialize(img.o4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.rumah = function() {
	this.initialize(img.rumah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.slide1 = function() {
	this.initialize(img.slide1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,750);// helper functions:

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


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.o1();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.o2();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.o3();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.o4();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.guitar2();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AUODMQgVgHgLgTQgFgJgEgLQgEgLgCgTQgCgTgCgeIAAhPIAAhOQACgeACgSQACgUAEgLQAEgKAFgKQAFgJAIgHQAIgGALgEQAKgEAPgBQAOgCAUgBQAnABAUAHQAVAHAKATIAJAUQAEALADAUQACASABAeIABBOIgBBPQgBAegCATQgDATgEALQgDALgGAJQgGAKgGAGQgIAGgKAEQgLAEgPACQgPABgTAAQgoABgTgIgAU7h8QgGADgBAFIgCAJIgCATIgBAgIgBA3IABA0IABAgIACASIACAJQABAGAGACQAEACAKAAQAKAAAFgCQAEgCACgGIADgJIABgSIAAggIABg0IgBg3IAAggIgBgTIgDgJQgCgFgEgDQgFgDgKABQgKgBgEADgAFXDAQgXgTAAgwIAAggQACgPACgKIBHAAQgBADAAAEIAAAIQAAAXAEAKQAFAIAQABQARgBAFgHQAFgIAAgaQAAgPgEgJQgGgIgLgHQgJgHgLgFIgWgLIgWgKQgKgGgIgGQgRgPgDgaQgEgZAAgoQAAgdAFgTQAEgUAMgMQALgNATgFQAUgGAeAAQAbAAAUAFQASAFAMAKQAMAKAFASQAFARAAAaIgBAaQgBAKgDAHIhGAAIABgGIAAgMQAAgSgEgIQgFgHgQAAQgQAAgEAHQgEAIAAASQAAATAEAHQAFAHAKAGIAWAMIAUAJIASAIIAPAJQAJAHAGAGQAIAHADALQAFAMACASQACAQAAAZQAAAlgFAYQgFAZgMAOQgMAPgWAHQgVAFgeAAQgzABgYgUgApbDOQgVgHgLgRIgIgOQgEgIgCgLQgCgMgCgQQgBgRAAgZIAAkaIBXAAIAAEaIABAWQAAAJACAEQAEAEAEABQAFABAIAAQAJAAAEgBQAEgBAEgEQACgEABgJIAAgWIAAkaIBVAAIAAEaIgCAqIgEAcIgGATIgIAOQgFAIgHAGQgHAGgLAEQgLACgPACIgiABQgnAAgUgFgAQcDNIAAmYIBUAAIAAE9IBYAAIAABbgAM3DNIgzi4IgGAAIABAPIAAAPIAACaIhWAAIAAmYIBWAAIAACVIAAALIgBALIAGAAIA3irIBZAAIAAADIg+C2IBCDcIAAADgAIsDNIAAmYIBXAAIAAGYgADYDNIgIhfIgpAAIgGBfIhWAAIAsmYICPAAIApGYgACrAbIAiAAIgPiRIgGAAgAhiDNIhhjbIgDAAIAADbIhOAAIAAmYIBTAAIA6CNIADAAIAAiNIBOAAIAAGYgAmQDNIAAmYIBXAAIAAGYgAr8DNIAAj1IgEAAIg9D1IgmAAIg+j1IgEAAIAAD1IhMAAIAAmYIB3AAIAmCxIAEAAIAqixIB3AAIAAGYgAzHDNIAAmYIC1AAIAABWIhhAAIAABIIBfAAIAABSIhfAAIAABNIBgAAIAABbgA13DNIAAlCIhAAAIAAhWIDWAAIAABWIhAAAIAAFCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.3,-21.1,292.70000000000005,42.3);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.guitar2();
	this.instance.setTransform(-194.4,-214.7,0.8102,0.8102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.4,-214.7,388.9,429.4);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AETBGQgJgGgFgJQgEgKgBgPIAXgEQAAAIACAHQACAGADAEQAEADAGAAQAGAAADgEQACgEAAgGQAAgJgEgGQgEgGgHgGIgTgQQgIgGgEgIQgFgJAAgMQAAgRAKgJQAKgKASAAQAKAAAHAEQAHADAEAFQAEAGACAHQACAHAAAIIgWAEIgCgMQgBgGgDgDQgDgDgGAAQgGAAgDAEQgDAEAAAGQAAAHADAFQADAFAGAFIASAQQAJAGAHAKQAGAKAAAPQAAAKgFAIQgEAJgIAEQgJAFgLAAQgNAAgIgFgAiZBGQgJgGgEgJQgFgKAAgPIAWgEQABAIACAHQABAGAEAEQADADAGAAQAHAAACgEQADgEAAgGQAAgJgEgGQgFgGgHgGIgSgQQgIgGgFgIQgEgJAAgMQAAgRAKgJQAKgKARAAQALAAAHAEQAGADAEAFQAFAGABAHQACAHABAIIgXAEIgBgMQgBgGgDgDQgDgDgGAAQgGAAgDAEQgDAEAAAGQAAAHADAFQADAFAGAFIASAQQAJAGAGAKQAGAKAAAPQAAAKgEAIQgFAJgIAEQgIAFgLAAQgNAAgJgFgApRBFQgKgGgDgLQgDgLAAgPIAAhiIAaAAIAABlIAAANQABAGAEADQADAEAHAAQAHAAADgEQADgDABgGIABgNIAAhlIAaAAIAABiQAAAPgEALQgDALgJAGQgJAGgQAAQgRAAgIgGgAM2BJIAAiRIAbAAIAACRgALRBJIAAiRIAjAAQARAAAKAFQAKAFAFAKQAEAKAAAPIAAA1QAAAPgEALQgFAKgJAGQgKAFgRAAgALsA2IAIAAQAJAAAEgDQAEgDABgGIABgQIAAg2IgBgPQgCgFgEgDQgEgCgIAAIgIAAgAJ+BJIgFgiIgaAAIgGAiIgZAAIAeiRIAcAAIAdCRgAJiAWIAUAAIgKg8gAIFBJIAAg4IgehZIAZAAIASA6IARg6IAYAAIgdBZIAAA4gAHJBJIgkhWIAABWIgXAAIAAiRIATAAIAjBSIAAhSIAWAAIAACRgAFdBJIAAiRIAbAAIAACRgADcBJIgFgiIgaAAIgGAiIgZAAIAeiRIAcAAIAdCRgADAAWIAUAAIgKg8gAB5BJIgRhDIgNAAIAABDIgaAAIAAiRIAjAAQAOAAALADQAKAEAFAIQAFAJAAAOQAAAJgBAHQgCAHgEAFQgEAFgGACIAUBIgABbgKIAJAAQAHAAAFgCQAFgCACgFQACgFAAgIQAAgLgEgFQgFgGgLAAIgKAAgAAQBJIAAiRIAaAAIAACRgAhPBJIAAiRIArAAQANAAAIAFQAJAFADAJQADAJAAANQAAAPgEAIQgEAIgJAEQgJAEgMAAIgOAAIAABBgAg0gKIAKAAQAHAAAEgCQAEgCACgFQABgEAAgIIgBgNQgBgFgEgCQgEgCgIAAIgKAAgAjPBJIgkhWIAABWIgXAAIAAiRIATAAIAjBSIAAhSIAWAAIAACRgAk7BJIAAiRIAbAAIAACRgAmOBJIgkhWIAABWIgXAAIAAiRIATAAIAjBSIAAhSIAWAAIAACRgAn6BJIAAiRIAbAAIAACRgAqKBJIgChlIgVBlIgQAAIgVhlIgCBlIgUAAIADiRIAbAAIAVBkIAWhkIAaAAIADCRgAsoBJIAAiRIA9AAIAAATIgjAAIAAAqIAcAAIAAARIgcAAIAAAwIAjAAIAAATgAtnBJIAAh9IgXAAIAAgUIBIAAIAAAUIgXAAIAAB9gANoA7IAAgYIAXAAIAAAYgANogBIAAgYIAXAAIAAAYg");
	this.shape.setTransform(-0.0712,-0.3075,0.8443,0.8443);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,-6.6,151.1,12.6);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CTAcopy();
	this.instance.setTransform(-82,-4,0.2064,0.2064);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-4,187.5,57.2);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.batu1();
	this.instance.setTransform(-142.35,-157.2,0.5932,0.5932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-157.2,284.70000000000005,314.4);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.batu2();
	this.instance.setTransform(-216,-162,0.5652,0.5652);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,-162,271.3,299.6);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rumah();
	this.instance.setTransform(-133.45,-147.35,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.4,-147.3,266.9,294.70000000000005);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.c1();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arrow();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.slide1();
	this.instance.setTransform(-240,-265,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,320,480);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gitar1();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,480,530);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AaTDMQgVgHgLgTQgFgJgEgLQgEgLgCgTQgCgTgCgeIAAhPIAAhOQACgeACgSQACgUAEgLQAEgKAFgKQAFgJAIgHQAIgGALgEQAKgEAPgBQAOgDAUAAQAnABAUAHQAUAHALATIAJAUQAEALADAUQACASABAeIABBOIgBBPQgBAegCATQgDATgEALQgDALgGAJQgGAKgGAGQgIAGgKAEQgLAEgPACQgPABgTAAQgoABgTgIgAbAh8QgGADgBAFIgCAKIgCASIgBAgIgBA3IABA0IABAgIACASIACAJQABAGAGACQAEADAKgBQAKABAFgDQAEgCACgGIADgJIABgSIAAggIABg0IgBg3IAAggIgBgSIgDgKQgCgFgEgDQgFgCgKAAQgKAAgEACgALcDAQgXgTAAgwIAAggQACgPACgKIBHAAQgBADAAAEIAAAIQAAAXAEAKQAFAIAQABQARgBAFgHQAFgIAAgaQAAgQgEgIQgFgIgMgHQgJgHgLgFIgWgLIgVgKQgLgGgIgGQgRgPgDgaQgEgZAAgoQAAgcAFgVQAEgTAMgMQALgMATgGQAUgGAeAAQAbAAAUAFQASAFAMAKQAMAKAFASQAFARAAAaIgBAaQgBAKgDAHIhGAAIABgHIAAgLQAAgSgEgIQgFgHgQAAQgQAAgEAHQgEAIAAASQAAATAEAHQAFAHAKAGIAWAMIAUAJIASAIIAPAJQAJAHAGAGQAIAHADALQAFAMACASQACAQAAAZQAAAlgFAYQgFAZgMAOQgMAPgWAHQgVAFgeAAQgzABgYgUgAIDDOQgVgHgLgRIgIgPQgEgHgCgLQgCgMgCgQQgBgRgBgZIAAkaIBYAAIAAEaIABAWQAAAJACAEQADAEAFABQAFACAJgBQAHABAFgCQAFgBADgEQACgEABgJIAAgWIAAkaIBVAAIAAEaIgCAqIgEAcIgGASIgIAPQgFAJgHAFQgHAGgMAEQgKACgPACIgiABQgnAAgUgFgAWhDNIAAmYIBUAAIAAE9IBYAAIAABbgAS8DNIgzi4IgFAAIAAAPIAAAPIAACaIhWAAIAAmYIBWAAIAACVIAAALIAAALIAFAAIA3irIBZAAIAAACIg+C3IBCDcIAAADgAOxDNIAAmYIBXAAIAAGYgAFiDNIAAj1IgDAAIg+D1IglAAIg/j1IgEAAIAAD1IhMAAIAAmYIB3AAIAmCyIAEAAIAqiyIB3AAIABGYgAhMDNIhhjbIgDAAIAADbIhOAAIAAmYIBUAAIA5COIADAAIAAiOIBOAAIAAGYgAl6DNIAAmYIBXAAIAAGYgAoqDNIAAlCIhAAAIAAhWIDWAAIAABWIhBAAIAAFCgArPDNIgHhfIgpAAIgGBfIhWAAIAsmYICOAAIApGYgAr7AcIAhAAIgOiSIgGAAgAvADNIAAj1IgEAAIg9D1IgmAAIg/j1IgDAAIAAD1IhNAAIAAmYIB4AAIAlCyIAEAAIAqiyIB3AAIABGYgA0uDNIg0i4IgFAAIABAPIAAAPIAACaIhXAAIAAmYIBXAAIAACVIAAALIgBALIAFAAIA4irIBYAAIAAACIg+C3IBDDcIAAADgA46DNIAAmYIBXAAIAAGYgA6LDNIhgjbIgEAAIAADbIhMAAIAAmYIBTAAIA4COIAEAAIAAiOIBNAAIAAGYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.2,-21.1,370.5,42.3);


(lib.ghwai = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bolong();
	this.instance.setTransform(8,7,0.9352,0.9352);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADA").s().p("AgGAjIAFgQIABgTIgBgPQgBgIgFgLIAGAAQAEAJACAIQADAKAAAHQAAAHgDAKQgCAJgEAJg");
	this.shape.setTransform(261.975,50.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFADA").s().p("AgJAXQgEgDgBgIIAJgBQAAAEACACQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAEgCQAGAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_1.setTransform(259.275,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFADA").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAADADQAEAEABAGIgIABQgBgGgEAAQgCAAgCADQgBACgBAKIADgDIAEgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgGAAQgFAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgCgEAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(255.775,49.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFADA").s().p("AgJAXQgEgDgBgIIAJgBIACAGQAAAAABABQABAAAAAAQABABAAAAQAAAAAAAAQADAAABgDQACgCAAgGQAAgFgCgCQgBgCgDABQgDAAgDACIgHgBIAFgbIAVAAIAAAKIgPAAIgBAJIAFgCQAFAAADAEQAFAFAAAIQAAAHgEAGQgEAGgHAAQgFAAgEgEg");
	this.shape_3.setTransform(252.275,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFADA").s().p("AgJAVQgFgGAAgPQAAgNAFgHQAEgGAGAAQAFAAAEADQADAEABAGIgIABQgBgGgEAAQgBAAgDADQgCAEAAAIIAEgDIADgBQAFAAAEAEQAEAFAAAHQAAAIgEAFQgFAFgFAAQgGAAgEgGgAgDABQgBADAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQABgCAAgGQAAgFgBgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_4.setTransform(248.775,49.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFADA").s().p("AgIAFIAAgJIAQAAIAAAJg");
	this.shape_5.setTransform(245.95,50.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFADA").s().p("AgHAaQAAgJADgNQAEgKAFgKIgSAAIAAgJIAbAAIAAAHIgHANQgEAHgBAIQgCAIAAAIg");
	this.shape_6.setTransform(243.125,49.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFADA").s().p("AgIAaQAAgJAEgNQADgKAGgKIgSAAIAAgJIAcAAIAAAHQgEAFgEAIIgGAPQgBAIAAAIg");
	this.shape_7.setTransform(239.65,49.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFADA").s().p("AABAbIAAgmQgDAGgGACIAAgJIAGgGQAEgDABgFIAHAAIAAA1g");
	this.shape_8.setTransform(235.9,49.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFADA").s().p("AgHAFIAAgJIAPAAIAAAJg");
	this.shape_9.setTransform(233.325,50.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFADA").s().p("AgJAVQgEgFAAgQQAAgPAEgFQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgCAEAAALQAAAMACADQABAEACAAQACAAACgEQABgDAAgMQAAgLgBgEQgCgDgCAAQgCAAgBADg");
	this.shape_10.setTransform(230.525,49.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFADA").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAGAAAOQAAAPgEAGQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQABABAAABQAAAAABABQAAAAABABQAAAAAAAAQADAAABgEQABgDAAgMQAAgLgBgEQgBgDgDAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAABgBAAg");
	this.shape_11.setTransform(227.025,49.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFADA").s().p("AgKAXQgDgFAAgHQAAgFACgDQABgDAEgCIgFgEQgCgDABgEQAAgGADgEQADgDAGAAQAHAAACAEQAEADAAAGQAAAEgBADIgFAEQAFACABADQABACAAAGQAAAFgBADQgCADgEADQgCACgFAAQgFAAgFgEgAgDAEQgCADAAADQAAAEACADQACACABAAQACAAADgCQABgCAAgFQAAgEgCgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACgAgDgRIgBAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQABAAAAAAQABAAAAABQAAAAAAAAIAEgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_12.setTransform(223.55,49.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFADA").s().p("AgJAVQgEgGAAgPQAAgOAEgGQAEgGAFAAQAHAAADAGQAEAFAAAPQAAAQgEAFQgDAGgHAAQgFAAgEgGgAgDgPQgBAEAAALQAAAMABADQACAEABAAQADAAABgEQACgDAAgMQAAgLgCgEQgBgDgDAAQgBAAgCADg");
	this.shape_13.setTransform(220.025,49.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFADA").s().p("AACAjQgEgJgCgIQgCgKgBgIQABgHACgKQACgIAEgJIAGAAIgGATIgCAPQAAAKACAJIAGAQg");
	this.shape_14.setTransform(217.3,50.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFADA").s().p("AAIAbIgLgZIgHAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
	this.shape_15.setTransform(212.375,49.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFADA").s().p("AgOAVQgGgHAAgOQAAgIACgGQADgHAFgDQAEgDAGAAQAJAAAGAHQAGAIAAAMQAAAOgGAHQgGAHgJAAQgIAAgGgHgAgIgNQgDAEAAAJQAAAKADAEQAEAFAEAAQAFAAAEgFQADgEAAgKQAAgJgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_16.setTransform(207.475,49.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFADA").s().p("AAIAbIgKgZIgIAJIAAAQIgJAAIAAg1IAJAAIAAAYIARgYIAMAAIgRAVIASAgg");
	this.shape_17.setTransform(203,49.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFADA").s().p("AgOAVQgGgIgBgNQAAgIAEgGQADgHAEgDQAFgDAFAAQAKAAAFAHQAHAIAAAMQgBAOgGAHQgFAHgKAAQgJAAgFgHgAgHgNQgEAEAAAJQAAAKAEAEQADAFAEAAQAFAAAEgFQADgFAAgJQAAgJgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_18.setTransform(198.1,49.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFADA").s().p("AAJAbIgKgUQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgEgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQADABACAEQACADAAAFQAAAHgDADQgDAEgFAAIAEAFIAFAIIAGALgAgKgDIANgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDgCIgNgBg");
	this.shape_19.setTransform(193.625,49.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_20.setTransform(189.125,49.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFADA").s().p("AANAbIAAgpIgJApIgHAAIgJgpIAAApIgIAAIAAg1IANAAIAHAkIAIgkIANAAIAAA1g");
	this.shape_21.setTransform(184.375,49.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFADA").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_22.setTransform(179.125,49.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFADA").s().p("AgDAbIAAgsIgOAAIAAgJIAiAAIAAAJIgMAAIAAAsg");
	this.shape_23.setTransform(176.3,49.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFADA").s().p("AAJAbIgRgiIAAAiIgIAAIAAg1IAJAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_24.setTransform(172.1,49.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_25.setTransform(167.875,49.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFADA").s().p("AAJAbIAAgYIgRAAIAAAYIgIAAIAAg1IAIAAIAAAVIARAAIAAgVIAJAAIAAA1g");
	this.shape_26.setTransform(163.45,49.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFADA").s().p("AAJAbIgKgUIgCgCIgFgBIgCAAIAAAXIgJAAIAAg1IATAAQAGAAADACQAEACABADQACADAAAFQAAAHgDADQgDAEgFAAIAFAFIAKATgAgKgDIAHAAIAHgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgEIgBgEIgDgCIgNgBg");
	this.shape_27.setTransform(159.125,49.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFADA").s().p("AgQAbIAAg1IAgAAIAAAJIgXAAIAAAMIAVAAIAAAIIgVAAIAAAPIAYAAIAAAJg");
	this.shape_28.setTransform(154.675,49.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFADA").s().p("AgRAbIAAg1IARAAQAGAAADACQADAAACAEQACADAAAFQAAAEgBADIgFAEQAEABACADQACADAAAFQAAAGgCAEQgEAFgDAAIgLABgAgJASIAPgBIACgCIABgEIgBgFIgDgCIgGgBIgIAAgAgJgEIAMgBIADgCQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBIgBgEIgDgBIgHgBIgGAAg");
	this.shape_29.setTransform(150.325,49.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFADA").s().p("AAJAbIgRgiIAAAiIgJAAIAAg1IAJAAIARAjIAAgjIAJAAIAAA1g");
	this.shape_30.setTransform(143.95,49.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFADA").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgGAGIAMAAIgGgTg");
	this.shape_31.setTransform(139.45,49.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFADA").s().p("AAIAbIgQgiIAAAiIgIAAIAAg1IAIAAIARAjIAAgjIAIAAIAAA1g");
	this.shape_32.setTransform(134.925,49.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFADA").s().p("AAMAbIgDgMIgRAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
	this.shape_33.setTransform(130.425,49.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFADA").s().p("AgEAbIAAgXIgQgeIALAAIAJAVIALgVIAJAAIgQAeIAAAXg");
	this.shape_34.setTransform(126.65,49.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFADA").s().p("AANAbIgFgMIgQAAIgEAMIgJAAIARg1IAIAAIASA1gAgFAGIALAAIgGgTg");
	this.shape_35.setTransform(122.85,49.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFADA").s().p("AgPAaIAAgzIAJAAIAAAqIAWAAIAAAJg");
	this.shape_36.setTransform(118.85,49.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFADA").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_37.setTransform(263.9,43.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgGAGIAMAAIgGgVg");
	this.shape_38.setTransform(168.05,40.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFADA").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_39.setTransform(162.85,40.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAPIAZAAIAAAJIgZAAIAAARIAbAAIAAAKg");
	this.shape_40.setTransform(157.925,40.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_41.setTransform(153.125,40.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFADA").s().p("AAKAfIgLgXIgDgCIgGgBIgCAAIAAAaIgKAAIAAg9IAWAAQAIAAACACQAEACACAEQACAEAAAFQAAAHgDAFQgEAEgGABIAGAFIAFAKIAHAMgAgMgEIAIAAIAIAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgDgBgBIgDgDIgIgBIgIAAg");
	this.shape_42.setTransform(147.925,40.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAPIAYAAIAAAJIgYAAIAAARIAbAAIAAAKg");
	this.shape_43.setTransform(142.775,40.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFADA").s().p("AgEAfIAAgzIgPAAIAAgKIAnAAIAAAKIgPAAIAAAzg");
	this.shape_44.setTransform(138.075,40.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_45.setTransform(131.45,40.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFADA").s().p("AgEAfIAAgaIgTgjIAMAAIALAZIAMgZIAMAAIgTAjIAAAag");
	this.shape_46.setTransform(127.125,40.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgUAAIgDAOIgLAAIAUg9IAJAAIAUA9gAgGAGIAMAAIgGgVg");
	this.shape_47.setTransform(122.75,40.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFADA").s().p("AgUALIAKgBQACALAIABQAEgBAEgCQACgCAAgEIgBgDIgCgDIgJgDIgJgEQgDgCgCgDQgCgEAAgEQAAgHADgCQACgEAEgDQAGgCADAAQAJAAAFAFQAEAEABAKIgKAAQgBgFgCgCQgCgCgEAAQgDABgDABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABACAHADQAJACACACQAFADABADQACAEAAAFQAAAIgFAFQgGAGgKAAQgRAAgDgVg");
	this.shape_48.setTransform(117.725,40.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFADA").s().p("AAJAfIgSgnIAAAnIgKAAIAAg9IAKAAIATAoIAAgoIAKAAIAAA9g");
	this.shape_49.setTransform(260.5,40.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_50.setTransform(255.3,40.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_51.setTransform(250.375,40.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFADA").s().p("AgRAYQgHgHAAgRQAAgKAEgHQAEgIAEgCQAFgEAHAAQALAAAHAIQAGAJABAOQAAAPgIAJQgGAIgLAAQgJAAgIgIgAgJgPQgEAEAAALQAAALAEAFQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgKgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_52.setTransform(244.75,40.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgCIgFgBIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEACQADABACAFQADAEAAAFQAAAIgEAEQgDADgHACIAGAFIAMAWgAgMgEIAIAAIAIAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQABgCAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgIAAIgIAAg");
	this.shape_53.setTransform(239.575,40.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFADA").s().p("AgRAYQgHgIAAgQQAAgKAEgHQADgHAGgDQAFgEAGAAQALAAAHAIQAHAIAAAPQgBAPgGAJQgHAIgLAAQgJAAgIgIgAgJgPQgEAFAAAKQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgGAAgKQAAgLgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_54.setTransform(233.95,40.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFADA").s().p("AgKAcQgGgDgDgIQgDgHAAgKQAAgKADgHQADgGAGgEQAFgEAGAAQAKAAAFAFQAGAFABAIIgKADQgBgGgDgCQgEgCgEAAQgFAAgEAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAHgBIAGgEIAAgIIgNAAIAAgJIAXAAIAAAXQgEAEgFADQgGADgHAAQgHAAgFgEg");
	this.shape_55.setTransform(228.3,40.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFADA").s().p("AgKAcQgGgEgDgHQgEgHAAgKQAAgKAEgHQADgGAFgEQAGgEAGAAQAKAAAFAFQAFAEACAJIgKADQgBgFgDgDQgEgCgEAAQgGAAgDAFQgEAFAAAKQAAAKAEAGQAEAFAFAAIAGgBIAGgEIAAgIIgLAAIAAgJIAWAAIAAAXQgFAFgFACQgFADgHAAQgHAAgFgEg");
	this.shape_56.setTransform(222.725,40.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFADA").s().p("AAKAfIgUgnIAAAnIgJAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_57.setTransform(217.35,40.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_58.setTransform(212.45,40.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFADA").s().p("AgEAfIAAgyIgPAAIAAgLIAnAAIAAALIgPAAIAAAyg");
	this.shape_59.setTransform(207.75,40.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgCIgFgBIgCAAIAAAaIgLAAIAAg9IAWAAQAHAAAEACQAEABACAFQACADAAAGQAAAIgEAEQgCADgIACQAFACABADIAMAWgAgLgEIAHAAIAIAAIADgDIABgFIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgHAAIgIAAg");
	this.shape_60.setTransform(201.125,40.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAALIgaAAIAAANIAZAAIAAAKIgZAAIAAAQIAbAAIAAALg");
	this.shape_61.setTransform(195.975,40.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFADA").s().p("AAJAfIgMgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAcIAUgcIAOAAIgTAYIAUAlg");
	this.shape_62.setTransform(191.175,40.525);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFADA").s().p("AAKAfIgTgnIAAAnIgKAAIAAg9IAKAAIAUAoIAAgoIAJAAIAAA9g");
	this.shape_63.setTransform(185.7,40.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgTAAIgFAOIgLAAIAUg9IAKAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_64.setTransform(180.5,40.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJALIAAASIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_65.setTransform(175.575,40.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFADA").s().p("AgEAIQACgBACgCQAAgCAAgDIgEAAIAAgMIAJAAIAAAJQAAAHgCACQgBAEgEADg");
	this.shape_66.setTransform(225.025,34.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFADA").s().p("AAKAfIgOgdIgIAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_67.setTransform(221.7,31.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFADA").s().p("AgQAYQgIgIAAgPQAAgLAEgHQADgGAFgFQAFgDAHAAQALAAAHAJQAHAIAAAOQAAAQgIAIQgGAIgLAAQgKAAgGgIgAgJgPQgEAGAAAJQAAAKAEAGQAEAFAFAAQAGAAAEgFQAEgFAAgLQAAgLgEgEQgEgFgGgBQgFABgEAFg");
	this.shape_68.setTransform(216.075,31.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_69.setTransform(210.925,31.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFADA").s().p("AgQAYQgIgIABgPQAAgKACgIQADgGAGgFQAFgDAHAAQAKAAAIAJQAGAIAAAOQABAQgIAIQgGAIgLAAQgKAAgGgIgAgKgPQgDAFAAAKQAAALAEAFQAEAFAFAAQAHAAADgFQAEgGAAgKQAAgKgEgFQgEgFgGgBQgFABgFAFg");
	this.shape_70.setTransform(205.3,31.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFADA").s().p("AALAfIgMgXIgDgDIgFAAIgDAAIAAAaIgKAAIAAg9IAWAAQAHAAAEABQAEADABAEQADAEAAAFQAAAHgEAFQgEAEgGABIAGAEIAMAXgAgMgEIAIAAIAIAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgIgBIgIAAg");
	this.shape_71.setTransform(200.125,31.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAkAAIAAAKIgaAAIAAAOIAYAAIAAAKIgYAAIAAARIAbAAIAAAKg");
	this.shape_72.setTransform(194.975,31.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFADA").s().p("AAPAfIAAgwIgKAwIgJAAIgKgwIAAAwIgKAAIAAg9IAQAAIAIApIAJgpIAQAAIAAA9g");
	this.shape_73.setTransform(189.5,31.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFADA").s().p("AAOAfIgEgOIgTAAIgFAOIgKAAIATg9IAKAAIAVA9gAgHAGIAOAAIgHgVg");
	this.shape_74.setTransform(182.1,31.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFADA").s().p("AAKAfIgTgoIAAAoIgKAAIAAg9IAKAAIATApIAAgpIAKAAIAAA9g");
	this.shape_75.setTransform(176.9,31.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFADA").s().p("AgSAfIAAg9IAlAAIAAAKIgbAAIAAAOIAZAAIAAAKIgZAAIAAARIAbAAIAAAKg");
	this.shape_76.setTransform(171.975,31.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFADA").s().p("AAKAfIgLgXQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgFAAIgCAAIAAAaIgKAAIAAg9IAWAAQAHAAADABQAFADABAEQACADAAAGQAAAIgDAEQgDADgHACIAGAEIAMAXgAgMgEIAIAAIAIAAIADgDQABgBAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIgDgDIgIgBIgIAAg");
	this.shape_77.setTransform(167.175,31.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFADA").s().p("AAPAfIgFgOIgUAAIgDAOIgMAAIAVg9IAJAAIAVA9gAgGAGIANAAIgHgVg");
	this.shape_78.setTransform(161.7,31.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFADA").s().p("AAKAfIgNgdIgJAKIAAATIgKAAIAAg9IAKAAIAAAbIAUgbIAOAAIgTAYIAUAlg");
	this.shape_79.setTransform(156.775,31.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFADA").s().p("AgFAXIAAgMIALAAIAAAMgAgFgKIAAgMIALAAIAAAMg");
	this.shape_80.setTransform(215.975,21.975);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFADA").s().p("AAMAgIgYgpIAAApIgMAAIAAg/IAMAAIAZAqIAAgqIAMAAIAAA/g");
	this.shape_81.setTransform(211.225,21.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFADA").s().p("AASAgIgGgPIgYAAIgGAPIgNAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_82.setTransform(204.775,21.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFADA").s().p("AgGAgIAAg0IgTAAIAAgLIAzAAIAAALIgTAAIAAA0g");
	this.shape_83.setTransform(199.5,21.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFADA").s().p("AASAgIgGgPIgYAAIgFAPIgOAAIAZg/IAMAAIAaA/gAgIAHIAQAAIgIgXg");
	this.shape_84.setTransform(194.175,21.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFADA").s().p("AgOAdQgHgEgEgIQgEgIAAgJQAAgJAFgIQADgIAIgEQAHgDAIAAQALAAAHAFQAIAFABAJIgMACQgCgFgDgCQgEgDgGAAQgHAAgGAFQgEAFAAALQAAALAEAFQAGAGAHAAQAFAAADgCIAHgDIAAgJIgPAAIAAgJIAcAAIAAAYQgEAEgHADQgIADgJAAQgJAAgHgEg");
	this.shape_85.setTransform(187.4,21.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFADA").s().p("AAMAgIgZgpIAAApIgMAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_86.setTransform(180.75,21.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFADA").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_87.setTransform(176.3,21.075);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFADA").s().p("AANAgIgPgXIgEgDIgJgBIAAAbIgNAAIAAg/IAbAAQAIAAAGACQAFABADAFQADAEAAAGQAAAHgFAFQgEADgIACIAHAFIAPAXgAgPgEIAUgBIAEgCQABgCAAgDQAAgEgCgBQgBgDgDAAIgJAAIgKAAg");
	this.shape_88.setTransform(172.125,21.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFADA").s().p("AgXAgIAAg/IAuAAIAAALIgiAAIAAAOIAgAAIAAAKIggAAIAAARIAjAAIAAALg");
	this.shape_89.setTransform(165.7,21.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFADA").s().p("AgXAgIAAg/IAUAAIAPABQAFABAEAFQAEAEgBAJQAAAGgBAEQgDACgDADQgCACgEABIgNABIgJAAIAAAYgAgLgCIAIAAQAHAAABgBQADgBACgCIABgFQAAgEgCgCQgBgCgEgBIgIAAIgHAAg");
	this.shape_90.setTransform(159.75,21.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFADA").s().p("AhxByQgwgvAAhDQAAhCAwgvQAvgwBCAAQBDAAAvAwQAwAvAABCQAABDgwAvQgvAwhDAAQhCAAgvgwgAhlhlQgrAqAAA7QAAA8ArAqQAqArA7AAQA8AAAqgrQArgqAAg8QAAg7grgqQgqgrg8AAQg7AAgqArg");
	this.shape_91.setTransform(293.825,35.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFADA").s().p("AgIAmIAAgcIgeAAIAAgTIAeAAIAAgcIASAAIAAAcIAdAAIAAATIgdAAIAAAcg");
	this.shape_92.setTransform(302.05,36.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFADA").s().p("AgXAwQgMgJAAgQQAAgJAEgIQAEgGAKgEQgIgDgEgHQgDgFAAgIQAAgMAIgIQAIgIAQAAQAQAAAIAIQAIAIAAAMQAAAIgDAGQgFAGgHADQAKAEAEAGQAFAHAAAJQAAAPgKAKQgKAJgQAAQgNAAgKgIgAgLAJQgDAFAAAHQAAAIAEAFQAFAFAFAAQAHAAAEgFQAEgEAAgJQAAgIgEgEQgFgFgGAAQgHAAgEAFgAgJgjQgEAEAAAGQAAAGAEADQADAEAGAAQAGAAADgEQAEgDAAgGQAAgHgEgDQgDgDgGAAQgGAAgDADg");
	this.shape_93.setTransform(293.275,36.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFADA").s().p("AADA3IAAhOQgLALgPAFIAAgTQAIgDAKgIQAIgHAEgKIARAAIAABtg");
	this.shape_94.setTransform(284.125,35.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040202").s().p("A4/FoIAArPMAx/AAAIAALPg");
	this.shape_95.setTransform(160,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,72);


(lib.bm_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_27
	this.instance = new lib.BukanMain05();
	this.instance.setTransform(0,0,1.6,1.6);

	this.instance_1 = new lib.BukanMain06();
	this.instance_1.setTransform(0,0,1.6,1.6);

	this.instance_2 = new lib.BukanMain07();
	this.instance_2.setTransform(0,0,1.6,1.6);

	this.instance_3 = new lib.BukanMain08();
	this.instance_3.setTransform(0,0,1.6,1.6);

	this.instance_4 = new lib.BukanMain10();
	this.instance_4.setTransform(0,0,1.6,1.6);

	this.instance_5 = new lib.bm();
	this.instance_5.setTransform(0,0,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},112).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,529.9);


(lib.bgbawah_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpBASLMAAAggzMBSDAAAMAAAAgzg");
	mask.setTransform(2.55,116.3);

	// Layer_1
	this.instance = new lib.bgbawah();
	this.instance.setTransform(-240,-276);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgbawah_1, new cjs.Rectangle(-240,22.6,480,210), null);


(lib.bgatas = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bglangit();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgatas, new cjs.Rectangle(-240,-265,320,480), null);


(lib.t2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_20 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_57 = new cjs.Graphics().p("A5UEtIAApZMAypAAAIAAJZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_graphics_57,x:168.475,y:84.925}).wait(143));

	// T2
	this.instance = new lib.Tween14("synched",0);
	this.instance.setTransform(165.25,140.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({y:84.6},15,cjs.Ease.sineOut).wait(128));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311.6,115);


(lib.t1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiYAEfIAAo9MBExAAAIAAI9g");
	mask.setTransform(224.575,33.3);

	// T1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(204.15,90.15);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:34.5},15,cjs.Ease.sineOut).wait(185));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389.4,62.1);


(lib.o4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween17("synched",0);
	this.instance.setTransform(20.7,9,1,1,0,0,0,20.7,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:23.4,y:6.3},9).to({x:18.9},11).to({x:23.4,y:11.7},9).to({x:20.7,y:9},11).to({startPosition:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.8,-267.7,484.5,535.4);


(lib.o3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween18("synched",0);
	this.instance.setTransform(-73.7,-40.5,1,1,0,0,0,-73.7,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-75.5},10).to({x:-73.7,y:-38.7},10).to({x:-71,y:-40.5},10).to({x:-73.7,y:-43.2},10).to({y:-40.5},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.8,-267.7,484.5,534.5);


(lib.o2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(89,-65.6,1,1,0,0,0,89,-65.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-63.8},10).to({x:87.2,y:-65.6},10).to({x:90.8},10).to({x:89,y:-67.4},9).to({y:-65.6},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.8,-266.8,483.6,533.6);


(lib.o1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween20("synched",0);
	this.instance.setTransform(-15.2,-70.1,1,1,0,0,0,-15.2,-70.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-71.9},10).to({x:-17,y:-70.1},9).to({x:-15.2,y:-68.3},11).to({x:-13.4,y:-70.1},9).to({x:-15.2},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.8,-266.8,483.6,533.6);


(lib.GITAR3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_21
	this.instance = new lib.Tween16("synched",0);
	this.instance.setTransform(240,265,0.4873,0.4873);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({scaleX:1.0339,scaleY:1.0339},6).to({scaleX:1,scaleY:1},3).to({rotation:-2.2414,x:238.2,y:263.2},2).to({rotation:-3.3609,x:241.8},1).to({regX:0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-4.4811,x:240.15,y:267},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-5.6027,x:238.2,y:265.05},1).to({regX:0.1,rotation:-6.7231,x:241.95,y:265.1},1).to({regX:0,rotation:-8.9672,x:240,y:265},2).to({rotation:-6.973,x:241.8,y:263.2},2).to({rotation:-5.9772,x:241.85,y:266.8},1).to({rotation:-4.9829,x:241.9,y:263.25},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-3.9876,x:238.3,y:265.1},1).to({scaleX:1,scaleY:1,rotation:-2.9916,x:241.9},1).to({rotation:0,x:240,y:265},3).to({x:237.3,y:267.7},9).to({x:240,y:265},9).to({rotation:-2.2414,x:238.2,y:263.2},2).to({rotation:-3.3609,x:241.8},1).to({regX:0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-4.4811,x:240.15,y:267},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-5.6027,x:238.2,y:265.05},1).to({regX:0.1,rotation:-6.7231,x:241.95,y:265.1},1).to({regX:0,rotation:-8.9672,x:240,y:265},2).to({rotation:-6.973,x:241.8,y:263.2},2).to({rotation:-5.9772,x:241.85,y:266.8},1).to({rotation:-4.9829,x:241.9,y:263.25},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-3.9876,x:238.3,y:265.1},1).to({scaleX:1,scaleY:1,rotation:-2.9916,x:241.9},1).to({rotation:0,x:240,y:265},3).to({startPosition:0},1).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-34.2,556.6999999999999,598.3000000000001);


(lib.GITAR2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_19
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(689.75,217.1,1,1,0,0,0,-10.8,-20.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({x:196.6,y:217},10,cjs.Ease.sineOut).wait(5).to({startPosition:0},0).to({rotation:-2.9476,x:194.75,y:215.2},2).to({regX:-10.7,rotation:-4.4196,x:197.55,y:217},1).to({regX:-10.8,regY:-20.6,rotation:-5.8944,x:194.75,y:215.3},1).to({regX:-10.7,scaleX:0.9999,scaleY:0.9999,rotation:-8.8445,x:196.75,y:218.95},2).to({scaleX:1,scaleY:1,rotation:-10.3193,x:198.6,y:217.15},1).to({regX:-10.8,rotation:-13.2665,x:196.65,y:217.1},2).wait(1).to({regX:0,regY:0,rotation:-11.3197,x:212.209,y:235.2037},0).wait(1).to({regX:-10.8,regY:-20.6,rotation:-9.3228,x:198.5,y:217.1},0).wait(1).to({regX:0,regY:0,rotation:-7.3661,x:210.1056,y:236.1594},0).wait(1).to({regX:-10.8,regY:-20.6,scaleX:0.9999,scaleY:0.9999,rotation:-5.4131,x:194.95,y:217.1},0).wait(1).to({regX:0,regY:0,rotation:-3.5067,x:207.9128,y:237.9185},0).wait(1).to({regX:-10.8,regY:-20.6,rotation:-1.6964,x:196.75,y:218.85},0).wait(1).to({regX:0,regY:0,rotation:-0.0346,x:208.5516,y:238.5481},0).wait(1).to({regX:-10.7,regY:-20.5,scaleX:1,scaleY:1,rotation:1.434,x:198.65,y:217.2},0).wait(1).to({regX:0,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:2.6815,x:206.3672,y:238.175},0).wait(1).to({regX:-10.7,regY:-20.4,rotation:3.6948,x:194.95,y:217.25},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:4.4781,x:205.045,y:237.347},0).wait(1).to({regX:-10.7,regY:-20.4,rotation:5.0485,x:196.7,y:215.4},0).wait(1).to({regX:0,regY:0,rotation:5.4294,x:205.3886,y:237.6881},0).wait(1).to({rotation:5.6417,x:205.2985,y:238.2664},0).wait(1).to({regX:-10.8,regY:-20.7,rotation:5.7079,x:196.6,y:217},0).to({_off:true},18).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-19,921.5,507.2);


(lib.GITAR1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_17
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(198.6,226.4,1,1,0,0,0,-41.4,-38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:202.2,y:228.2},6).to({regX:-41.3,rotation:-4.1039,x:200.5,y:229.95},2).to({regX:-41.2,rotation:-8.2071,x:202.4,y:228.2},2).to({scaleX:0.9999,scaleY:0.9999,rotation:-12.3124,x:202.45,y:230.05},2).to({rotation:-14.3647,x:201.25,y:228.85},1).to({regX:-41.4,scaleX:1,scaleY:1,rotation:-18.4698,x:201.35,y:229.1},2).wait(1).to({regX:0,regY:0,rotation:-16.2906,x:251.4817,y:254.0926},0).wait(1).to({regX:-41.3,regY:-38.6,scaleX:0.9999,scaleY:0.9999,rotation:-14.0507,x:200.55,y:228.2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-11.8498,x:249.788,y:258.4141},0).wait(1).to({regX:-41.3,regY:-38.6,scaleX:0.9999,scaleY:0.9999,rotation:-9.6775,x:202.35,y:230},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-7.604,x:246.9952,y:262.3708},0).wait(1).to({regX:-41.2,regY:-38.6,scaleX:0.9999,scaleY:0.9999,rotation:-5.7075,x:199.7,y:229.15},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-4.0574,x:245.5258,y:263.7089},0).wait(1).to({regX:-41.2,regY:-38.5,scaleX:0.9999,scaleY:0.9999,rotation:-2.6974,x:203.35,y:227.35},0).wait(1).to({regX:0,regY:0,rotation:-1.6401,x:244.0456,y:266.7218},0).wait(1).to({regX:-41.2,regY:-38.5,rotation:-0.8726,x:200.55,y:230.9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-0.3658,x:242.4672,y:268.025},0).wait(1).to({rotation:-0.0862,x:242.5306,y:267.6239},0).wait(1).to({regX:-41.4,regY:-38.6,rotation:0,x:201.3,y:229.1},0).to({x:200.4,y:228.2},2).to({x:203.1,y:227.3},1).to({x:200.4,y:229.1},2).to({x:201.3},1).wait(8).to({startPosition:0},0).to({x:-278.7},10,cjs.Ease.sineOut).to({_off:true},1).wait(147));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477.3,-74.8,1041.8,654.8);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_21
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(107.2,357.45,0.9936,0.9936,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:1},9).wait(67));

	// Layer_20
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(96.5,376.5,1.7402,1.7402);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.sineOut).wait(7).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(12).to({startPosition:0},0).to({scaleX:0.9213,scaleY:0.9213},7).to({startPosition:0},3).to({scaleX:1,scaleY:1},4).wait(20));

	// Layer_1
	this.instance_2 = new lib.Tween12("synched",0);
	this.instance_2.setTransform(107.2,357.45,0.9936,0.9936,0,0,0,0.1,0.1);

	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(96.5,376.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},1).wait(199));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,0,326.1,469);


(lib.ornamet3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// o3_png
	this.instance = new lib.o3_1();
	this.instance.setTransform(169,225.45,0.3974,0.3974,0,0,0,-71,-39.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({regY:-39.6,scaleX:1,scaleY:1,y:225.4},6).wait(94));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.ornament4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// o4_png
	this.instance = new lib.o4_1();
	this.instance.setTransform(260.7,274,0.4722,0.4722,0,0,0,20.7,9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.ornament2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// o2_png
	this.instance = new lib.o2_1();
	this.instance.setTransform(329,202.1,0.4621,0.4621,0,0,0,89,-62.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(94));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


(lib.ornament1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// o1_png
	this.instance = new lib.o1_1();
	this.instance.setTransform(226.5,191.35,0.4931,0.4931,0,0,0,-13.5,-73.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).to({regY:-73.7,scaleX:1,scaleY:1,y:191.3},6).wait(88));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,530);


// stage content:
(lib._320x480b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ghw
	this.instance = new lib.ghwai("synched",0);
	this.instance.setTransform(160,444,1,1,0,0,0,160,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0706").s().p("AkiFRIAAqhID9AAQCbABBbBpQBSBfAACHQAACIhSBfQhbBpibABgAh2C0IBRAAQBLAAAtg4QAogzAAhJQAAhIgogyQgtg5hLAAIhRAAg");
	this.shape.setTransform(280.8247,371.1626,0.0911,0.0911);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0706").s().p("Ai4FQIAAqgIFoAAIAACaIi9AAIAABgIDDAAIAACYIjDAAIAAB2IDGAAIAACYg");
	this.shape_1.setTransform(266.2155,371.1626,0.0911,0.0911);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0706").s().p("ABoFQIAAkOIjPAAIAAEOIiwAAIAAqgICwAAIAAD1IDPAAIAAj1ICwAAIAAKgg");
	this.shape_2.setTransform(259.5211,371.1626,0.0911,0.0911);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_3.setTransform(273.0875,371.1239,0.0911,0.0911);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0706").s().p("ACsFVIgnhVIkJAAIgnBVIioAAID2qpIC5AAID4KpgAhMBtICZAAIhNjig");
	this.shape_4.setTransform(251.8887,371.1239,0.0911,0.0911);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C0706").s().p("AjsEFQhshhAAikQAAikBshhQBhhXCLAAQCMAABhBXQBsBhAACkQAACkhsBhQhhBYiMAAQiLAAhhhYgAhziHQg0AyAABVQAABWA0AzQAvAtBFAAQBEAAAwgtQA0gzAAhWQAAhVg0gyQgwguhEAAQhFAAgvAug");
	this.shape_5.setTransform(234.0666,371.1763,0.0911,0.0911);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0706").s().p("AjfEDQhthgAAijQAAihBthgQBhhXCKAAQBgABBLAqQBVAwAkBYIiXA8QgVgrgigTQgigTg0AAQhOAAgtA4QgrAzAABPQAABUAtAyQAuAzBLAAQA2AAAggRQAkgTAWgvIiPAAIAAiUIE+AAQAEA8gEAnQgEA1gPAtQgiBihYAzQhMAshmAAQiLAAhghVg");
	this.shape_6.setTransform(226.2247,371.158,0.0911,0.0911);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED1C24").s().p("ApFMqIgFgHQgQgYgDglQgCglALgqQAJgnAQgZIDnmPQghgFgugPQhegfhJg3QhnhMgthtQgMgdgIgfQgeh1AciSIACgLQAWhtBAhVQA5hMBWg2QBIgsBTgYQBGgUA3AAQB7AABkAeQBQAYA+AqQAsAeAfAkQAPASAGAMQArgsAlgbQAjgZAlgNQAhgMAogDQAggCA1ABQBiAKBNBQQAYAZATAdIAOAYQhwg1hSAPQhDALgrA1QgfAmgRA3QgJAcgCAUIB0OaIBvBoIBnhMIAtBHIkRDKIjNinIgLhgIl1D8IlIj/Ig9BrQAQAaAKAjQAKAlAAAgQgBAagIASQgDAGgFAGQgRAXgjAAQgsAAgXgcgAknEwIFaEPIDXiYIghjeInSAAgAncpAQg6AggtA3QgsA1gWBBQgWBDAGBAQAKBgAmBIQAjBBA4AqQAyAmBAASQA6AQA+gDICUj6QgCgSgJgbQgQg1gdgqQgpg7g7gbQhLghhlATIAJgOQAMgSARgPQA3gxBTgIQAtgEAhABQAnACAhALQBIAXBJBIIAVgfQgHgMgPgSQgfgkgngeQg2gqg+gYQhMgehUgBQhCAAg+AhgAiLAkIFfAAIg/nkg");
	this.shape_7.setTransform(267.4981,351.2195,0.7277,0.7277);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(200));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(21.7,114.35,0.6478,0.6478);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// Layer_18
	this.instance_2 = new lib.c2();
	this.instance_2.setTransform(115,-43);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({_off:true},7).wait(48).to({_off:false,x:-30},0).to({_off:true},7).wait(99));

	// c1
	this.instance_3 = new lib.c1();
	this.instance_3.setTransform(115,-43);

	this.instance_4 = new lib.Tween6("synched",0);
	this.instance_4.setTransform(275,197);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[]},39).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},42).to({state:[{t:this.instance_4}]},6).to({state:[]},1).to({state:[]},87).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(87).to({_off:false},0).to({x:130},6).to({_off:true},1).wait(106));

	// arrowkanan
	this.instance_5 = new lib.arrow();

	this.instance_6 = new lib.Tween5("synched",0);
	this.instance_6.setTransform(293,202,1,1,0,0,0,133,-38);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},39).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},4).to({state:[]},55).to({state:[]},38).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({scaleX:0.9249,scaleY:0.9249,y:201.95},3).to({scaleX:1,scaleY:1,y:202},4).to({_off:true},55).wait(99));

	// arrow_png
	this.instance_7 = new lib.arrow();
	this.instance_7.setTransform(320,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},101).wait(99));

	// bm
	this.instance_8 = new lib.bm_1();
	this.instance_8.setTransform(187.15,205.15,0.7944,0.7944,0,0,0,240.2,265.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200));

	// t2
	this.instance_9 = new lib.t2();
	this.instance_9.setTransform(119.45,65.85,0.7419,0.7419,0,0,0,165.2,84.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(200));

	// t1
	this.instance_10 = new lib.t1();
	this.instance_10.setTransform(163.55,45.9,0.7419,0.7419,0,0,0,224.6,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(200));

	// o4
	this.instance_11 = new lib.ornament4();
	this.instance_11.setTransform(184.65,237.7,0.9075,0.9075,0,0,0,239.8,265.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(200));

	// o3
	this.instance_12 = new lib.ornamet3();
	this.instance_12.setTransform(174,268.05,1,1,0,0,0,240,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(200));

	// o2
	this.instance_13 = new lib.ornament2();
	this.instance_13.setTransform(147.6,271.65,1,1,-17.7045,0,0,240,265.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(200));

	// o1
	this.instance_14 = new lib.ornament1();
	this.instance_14.setTransform(147.55,243.5,1,1,0,0,0,240,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(200));

	// gitar3
	this.instance_15 = new lib.GITAR3();
	this.instance_15.setTransform(184.05,242.25,0.7208,0.7208,-31.6735,0,0,239.5,265.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(200));

	// GITAR2
	this.instance_16 = new lib.GITAR2();
	this.instance_16.setTransform(151.1,217.05,0.8449,0.8449,7.7256,0,0,207.5,237.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(200));

	// rumah_png
	this.instance_17 = new lib.Tween8("synched",0);
	this.instance_17.setTransform(479.95,279.15,0.8202,0.8202);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(42).to({_off:false},0).to({x:167.5},10,cjs.Ease.sineOut).wait(48).to({startPosition:0},0).to({scaleX:1.7984,scaleY:1.7983,x:168,y:245.95},6).wait(94));

	// bgbawah
	this.instance_18 = new lib.bgbawah_1();
	this.instance_18.setTransform(559.5,263.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(42).to({_off:false},0).to({x:240},10,cjs.Ease.sineOut).wait(148));

	// batu2_png
	this.instance_19 = new lib.Tween9("synched",0);
	this.instance_19.setTransform(583.65,289.8,0.8011,0.8011);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(42).to({_off:false},0).to({x:256.15},10,cjs.Ease.sineOut).wait(48).to({startPosition:0},0).to({scaleX:1.7693,scaleY:1.7692,x:311.15,y:272.05},6).wait(94));

	// batu1_png
	this.instance_20 = new lib.Tween10("synched",0);
	this.instance_20.setTransform(465.3,276.2,0.93,0.93);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(42).to({_off:false},0).to({x:169.35},10,cjs.Ease.sineOut).wait(48).to({startPosition:0},0).to({scaleX:1.6857,scaleY:1.6856,x:168.95,y:247},6).wait(94));

	// bgatas
	this.instance_21 = new lib.bgatas();
	this.instance_21.setTransform(559.5,265);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(42).to({_off:false},0).to({x:240},10,cjs.Ease.sineOut).wait(148));

	// gitar1
	this.instance_22 = new lib.GITAR1();
	this.instance_22.setTransform(181,230.1,0.8756,0.8756,-6.1414,0,0,239.8,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(200));

	// slide1
	this.instance_23 = new lib.Tween4("synched",0);
	this.instance_23.setTransform(240,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(42).to({startPosition:0},0).to({x:-80},10,cjs.Ease.sineOut).to({_off:true},1).wait(147));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-160,186.1,984.6,410.9);
// library properties:
lib.properties = {
	id: '34C8AA87F2AA844D8F44C39FA0FA7A5B',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/batu1.png", id:"batu1"},
		{src:"images/batu2.png", id:"batu2"},
		{src:"images/bgbawah.jpg", id:"bgbawah"},
		{src:"images/bglangit.jpg", id:"bglangit"},
		{src:"images/bm.png", id:"bm"},
		{src:"images/bolong.jpg", id:"bolong"},
		{src:"images/BukanMain05.png", id:"BukanMain05"},
		{src:"images/BukanMain06.png", id:"BukanMain06"},
		{src:"images/BukanMain07.png", id:"BukanMain07"},
		{src:"images/BukanMain08.png", id:"BukanMain08"},
		{src:"images/BukanMain10.png", id:"BukanMain10"},
		{src:"images/c1.png", id:"c1"},
		{src:"images/c2.png", id:"c2"},
		{src:"images/CTAcopy.png", id:"CTAcopy"},
		{src:"images/gitar1.png", id:"gitar1"},
		{src:"images/guitar2.png", id:"guitar2"},
		{src:"images/o1.png", id:"o1"},
		{src:"images/o2.png", id:"o2"},
		{src:"images/o3.png", id:"o3"},
		{src:"images/o4.png", id:"o4"},
		{src:"images/rumah.png", id:"rumah"},
		{src:"images/slide1.jpg", id:"slide1"}
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
an.compositions['34C8AA87F2AA844D8F44C39FA0FA7A5B'] = {
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