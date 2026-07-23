// Module ID: 13271
// Function ID: 101737
// Dependencies: [13237, 13258, 13272, 13282, 13283]

// Module 13271
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13272) /* f */.f(require(13282) /* all */(arg0));
  const f = require(13283).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
