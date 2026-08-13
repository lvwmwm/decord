// Module ID: 13670
// Function ID: 13671
// Dependencies: [13636, 13657, 13671, 13681, 13682]

// Module 13670
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13671) /* f */.f(require(13681) /* all */(arg0));
  const f = require(13682).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
