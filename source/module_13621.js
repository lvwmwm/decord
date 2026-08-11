// Module ID: 13621
// Function ID: 13622
// Dependencies: [13587, 13608, 13622, 13632, 13633]

// Module 13621
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13622) /* f */.f(require(13632) /* all */(arg0));
  const f = require(13633).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
