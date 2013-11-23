module.exports = {
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