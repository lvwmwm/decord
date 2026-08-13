// Module ID: 4628
// Function ID: 4629
// Name: getEvalledConstructor
// Dependencies: [540, 574]

// Module 4628 (getEvalledConstructor)
const tmp = require("getEvalledConstructor")("%Array%");
const isArray = tmp.isArray;
let tmp2 = !isArray;
if (!isArray) {
  tmp2 = require("callBoundIntrinsic")("Object.prototype.toString");
}
let c0 = tmp2;

export default tmp.isArray || (function IsArray(arg0) {
  return "[object Array]" === tmp2(arg0);
});
