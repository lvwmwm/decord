// Module ID: 13714
// Function ID: 13715
// Dependencies: [13680, 13701, 13715, 13725, 13726]

// Module 13714
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13715) /* f */.f(require(13725) /* all */(arg0));
  const f = require(13726).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
