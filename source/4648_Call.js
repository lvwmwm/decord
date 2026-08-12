// Module ID: 4648
// Function ID: 4649
// Name: Call
// Dependencies: [540, 574, 4626, 541]

// Module 4648 (Call)
let tmp = require("getEvalledConstructor")("%Reflect.apply%", true);
if (!tmp) {
  tmp = require("callBoundIntrinsic")("Function.prototype.apply");
}

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (require(4626) /* getEvalledConstructor */(tmp)) {
    return tmp(arg0, arg1, tmp);
  } else {
    const tmp6 = new tmp2(541)("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
  tmp2 = require;
};
