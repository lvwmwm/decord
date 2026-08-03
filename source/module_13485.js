// Module ID: 13485
// Function ID: 13486
// Dependencies: [13451, 13472, 13486, 13496, 13497]

// Module 13485
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13486) /* f */.f(require(13496) /* all */(arg0));
  const f = require(13497).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
