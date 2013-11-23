function Construct () {
  var self = this;
  self.con1 = 'constructor'; // constructor property
  self.cFu(false); // constructor function with arg
}

Construct.prototype.cFu = function (arg) {
  var self = this;
  self.con2 = true;
  self.con3 = arg;
};

Construct.prototype.b1 = true; // boolean true
Construct.prototype.b2 = false; // boolean false

Construct.prototype.s1 = "string";  // double quotes string
Construct.prototype.s2 = 'string'; // single quotes string

Construct.prototype.i1 = 1; // unsigned int
Construct.prototype.i2 = -5; // signed int

Construct.prototype.fl1 = 1.5; // unsigned float
Construct.prototype.fl2 = 0.5; // unsigned float
Construct.prototype.fl3 = -1.25; // signed float

Construct.prototype.fu1 = function (){return false}; // anonymous function
Construct.prototype.fu2 = function i(){return true}; // named function

Construct.prototype.a1 = [0,1]; // array
Construct.prototype.a2 = new Array(0,1); // array

Construct.prototype.o1 = {}; // empty nested object literal,
Construct.prototype.o2 = new Object(); // empty nested object literal
Construct.prototype.o3 = {
  name: 'nested literal',
  nested: true
}; // nested object literal

Construct.prototype.r1 = /^abc$/i; // regular expression
Construct.prototype.r2 = new RegExp("zxy"); // regular expression

Construct.prototype.d1 = new Date(null); // date object (epoc)

module.exports = Construct;