// Module ID: 4436
// Function ID: 38927
// Name: Call
// Dependencies: [517, 551, 4414, 518]

// Module 4436 (Call)
let tmp = require("getEvalledConstructor")("%Reflect.apply%", true);
if (!tmp) {
  tmp = require("callBoundIntrinsic")("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (require(4414) /* getEvalledConstructor */(tmp)) {
    return tmp(arg0, arg1, tmp);
  } else {
    let tmp4 = require(518);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
};
