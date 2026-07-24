// Module ID: 4415
// Function ID: 38886
// Name: getEvalledConstructor
// Dependencies: [517, 551]

// Module 4415 (getEvalledConstructor)
const tmp = require("getEvalledConstructor")("%Array%");
let tmp2 = !tmp.isArray;
if (tmp2) {
  tmp2 = require("callBoundIntrinsic")("Object.prototype.toString");
}
let closure_0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === tmp2(arg0);
});
