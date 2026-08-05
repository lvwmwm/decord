// Module ID: 13490
// Function ID: 13491
// Dependencies: [13456, 13477, 13491, 13501, 13502]

// Module 13490
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13491) /* f */.f(require(13501) /* all */(arg0));
  const f = require(13502).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
