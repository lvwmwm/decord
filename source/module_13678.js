// Module ID: 13678
// Function ID: 13679
// Dependencies: [13644, 13665, 13679, 13689, 13690]

// Module 13678
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13679) /* f */.f(require(13689) /* all */(arg0));
  const f = require(13690).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
