// Module ID: 13519
// Function ID: 13520
// Dependencies: [13485, 13506, 13520, 13530, 13531]

// Module 13519
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13520) /* f */.f(require(13530) /* all */(arg0));
  const f = require(13531).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
