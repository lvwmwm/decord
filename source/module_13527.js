// Module ID: 13527
// Function ID: 13528
// Dependencies: [13493, 13514, 13528, 13538, 13539]

// Module 13527
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13528) /* f */.f(require(13538) /* all */(arg0));
  const f = require(13539).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
