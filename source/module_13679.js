// Module ID: 13679
// Function ID: 13680
// Dependencies: [13645, 13666, 13680, 13690, 13691]

// Module 13679
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13680) /* f */.f(require(13690) /* all */(arg0));
  const f = require(13691).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
