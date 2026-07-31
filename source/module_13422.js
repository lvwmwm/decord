// Module ID: 13422
// Function ID: 13423
// Dependencies: [13388, 13409, 13423, 13433, 13434]

// Module 13422
let closure_2 = require("call")([].concat);

export default require("all")("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = require(13423) /* f */.f(require(13433) /* all */(arg0));
  const f = require(13434).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
