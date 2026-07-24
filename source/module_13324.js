// Module ID: 13324
// Function ID: 102064
// Dependencies: [13290, 13311, 13325, 13335, 13336]

// Module 13324
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13325) /* f */.f(require(13335) /* all */(arg0));
  const f = require(13336).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
