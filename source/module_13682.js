// Module ID: 13682
// Function ID: 13683
// Dependencies: [13648, 13669, 13683, 13693, 13694]

// Module 13682
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13683) /* f */.f(require(13693) /* all */(arg0));
  const f = require(13694).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
