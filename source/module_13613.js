// Module ID: 13613
// Function ID: 13614
// Dependencies: [13579, 13600, 13614, 13624, 13625]

// Module 13613
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13614) /* f */.f(require(13624) /* all */(arg0));
  const f = require(13625).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
