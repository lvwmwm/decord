// Module ID: 13541
// Function ID: 13542
// Dependencies: [13507, 13528, 13542, 13552, 13553]

// Module 13541
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13542) /* f */.f(require(13552) /* all */(arg0));
  const f = require(13553).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
