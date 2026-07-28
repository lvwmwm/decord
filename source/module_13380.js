// Module ID: 13380
// Function ID: 102369
// Dependencies: [13346, 13367, 13381, 13391, 13392]

// Module 13380
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13381) /* f */.f(require(13391) /* all */(arg0));
  const f = require(13392).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
