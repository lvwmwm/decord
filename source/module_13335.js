// Module ID: 13335
// Function ID: 102191
// Dependencies: [13301, 13322, 13336, 13346, 13347]

// Module 13335
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13336) /* f */.f(require(13346) /* all */(arg0));
  const f = require(13347).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
