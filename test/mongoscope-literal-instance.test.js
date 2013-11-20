'use strict';

var util = require('util');
var assert = require('assert');

var mongoScope = require('../');

var objectLiteral = {
  b1: true, // boolean true
  b2: false, // boolean false

  s1: "string", // double quotes string
  s2: 'string', // single quotes string

  i1: 1, // unsigned int
  i2: -5, // signed int

  fl1: 1.5, // unsigned float
  fl2: 0.5, // unsigned float
  fl3: -1.25, // signed float

  fu1: function (){return false}, // anonymous function
  fu2: function i(){return true}, // named function

  a1: [0,1], // array
  a2: new Array(0,1), // array

  o1: {}, // empty nested object literal,
  o2: new Object(), // empty nested object literal
  o3: {
    name: 'nested literal',
    nested: true
  }, // nested object literal

  r1: /^abc$/i, // regular expression
  r2: new RegExp("zxy"), // regular expression

  d1: new Date(null) // date object (epoc)
};

var expected = '{"b1":true,"b2":false,"s1":"string","s2":"string","i1":1,"i2":-5,"fl1":1.5,"fl2":0.5,"fl3":-1.25,"fu1":function (){return false},"fu2":function i(){return true},"a1":[0,1],"a2":[0,1],"o1":{},"o2":{},"o3":{"name":"nested literal","nested":true},"r1":/^abc$/i,"r2":/zxy/,"d1":new Date("1970-01-01T00:00:00.000Z")}';

describe('mongoScope', function() {
  it('should construct valid scope function when given object literal', function(done) {
    var result = mongoScope(objectLiteral);

    assert.strictEqual('function', typeof result)

    assert.strictEqual(expected, String(result));

    var evaluate = '(' + expected + ')';
    var evaluated = eval(evaluate);

    var inspectOptions =  {showHidden: true, depth: null};

    var evaluatedInspect = util.inspect(evaluated, inspectOptions);
    var objectLiteralInspect = util.inspect(objectLiteral, inspectOptions);

    assert.strictEqual(evaluatedInspect, objectLiteralInspect);

    done();
  });
});