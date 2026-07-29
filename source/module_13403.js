// Module ID: 13403
// Function ID: 13404
// Dependencies: [13369, 13390, 13404, 13414, 13415]

// Module 13403
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13404) /* f */.f(require(13414) /* all */(arg0));
  const f = require(13415).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
