// Module ID: 13336
// Function ID: 102196
// Dependencies: [13302, 13323, 13337, 13347, 13348]

// Module 13336
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13337) /* f */.f(require(13347) /* all */(arg0));
  const f = require(13348).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
