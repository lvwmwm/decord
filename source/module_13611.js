// Module ID: 13611
// Function ID: 13612
// Dependencies: [13577, 13598, 13612, 13622, 13623]

// Module 13611
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13612) /* f */.f(require(13622) /* all */(arg0));
  const f = require(13623).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
