// Module ID: 13518
// Function ID: 13519
// Dependencies: [13484, 13505, 13519, 13529, 13530]

// Module 13518
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13519) /* f */.f(require(13529) /* all */(arg0));
  const f = require(13530).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
