'use strict';


/**
 * Transforms object instances into object literal strings
 * Note: recursive function
 *
 * @function stringifyInstance
 * @private
 * @sync
 * @param {object|function} src
 * @returns {string} str
 */
function stringifyInstance (src) {
  // fixme this still needs a lot of testing and resulting updates

  if ('function' != typeof src && 'object' != typeof src) {
    if ('string' === typeof src) return String(src);
    return src;
  }

  var isArray = Array.isArray(src);

  var str = isArray ? '[' : '{';

  // todo add type casting (_id, etc)
  for (var key in src) {
    if (!isArray) str += '"' + key + '":';
    if ('function' === typeof src[key]) str += String(src[key]);
    else if ('string' === typeof src[key]) str += '"' + src[key] + '"';
    else if ('Date' === src[key].constructor.name) str += 'new Date("' + src[key].toISOString() + '")';
    else if ('RegExp' === src[key].constructor.name) str += String(src[key]);
    else str += stringifyInstance(src[key]);
    str += ',';
  }

  str = str.replace(/,$/, '');
  str += isArray ? ']' : '}';

  return str;
}


/**
 * Transforms classes into strings
 *
 * @function stringifyClass
 * @private
 * @sync
 * @param {function} src
 * @returns {string} str
 */
function stringifyClass (src) {
  return String(src); // todo build out more advanced class stringify
}


/**
 * Bind stringified complex object to anonymous function's toString method
 * Note: global vars are NOT bound with function
 *
 * @function mongoScope
 * @public
 * @sync
 * @param {object|function} src
 * @returns {function} str
 */
module.exports = function mongoScope (src) {
  var fn = function(){};

  fn.toString = function () {
    var str = '';

    if ('object' === typeof src) str += stringifyInstance(src);
    else if ('function' === typeof src) str += stringifyClass(src);

    return str;
  };

  return fn;
};