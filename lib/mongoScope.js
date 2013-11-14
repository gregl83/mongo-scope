'use strict';


/**
 * Transforms object instances into strings
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

  var str = '{';

  for (var key in src) {
    str += '"' + key + '":';
    if ('function' === typeof src[key]) str += String(src[key]) + ',';
    else if ('string' === typeof src[key]) str += '"' + src[key] + '",';
    else str += stringifyInstance(src[key]) + ',';
  }

  str = str.replace(/,$/, '') + '}';

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
  var str = '{';

  // todo build class stringify

  str = str.replace(/,$/, '') + '}';

  return str;
}


/**
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

    if ('object' === typeof obj) str += stringifyInstance(src);
    else if ('function' === typeof obj) str += stringifyClass(src);

    return str;
  };

  return fn;
};