'use strict';

var util = require('util');
var assert = require('assert');

var mongoScope = require('../');

var Construct = require('./lib/Construct');
var object = new Construct();

describe('mongoScope', function() {
  it('should construct valid scope function when given object instance', function(done) {
    var result = mongoScope(object);

    assert.strictEqual('function', typeof result);

    // todo write tests

    /*assert.strictEqual(objectString, String(result));

    var evaluate = '(' + objectString + ')';
    var evaluated = eval(evaluate);

    var inspectOptions =  {depth: null};

    var evaluatedInspect = util.inspect(evaluated, inspectOptions);
    var objectLiteralInspect = util.inspect(objectLiteral, inspectOptions);

    assert.strictEqual(evaluatedInspect, objectLiteralInspect);*/

    done();
  });
});