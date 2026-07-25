// Module ID: 4389
// Function ID: 38839
// Name: ToNumber
// Dependencies: [517, 4390, 4391, 518, 4396]

// Module 4389 (ToNumber)
let closure_2 = require("getEvalledConstructor")("%Number%");

export default function ToNumber(arg0) {
  let tmp = arg0;
  if (!require(4390) /* isPrimitive */(arg0)) {
    tmp = require(4391) /* ToPrimitive */(arg0, closure_2);
  }
  if ("symbol" === typeof tmp) {
    let tmp18 = require(518);
    const prototype2 = tmp18.prototype;
    tmp18 = new tmp18("Cannot convert a Symbol value to a number");
    throw tmp18;
  } else if ("bigint" === tmp5) {
    let tmp11 = require(518);
    const prototype = tmp11.prototype;
    tmp11 = new tmp11("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp11;
  } else {
    if ("string" === tmp5) {
      let tmp6 = require(4396) /* StringToNumber */(tmp);
    } else {
      tmp6 = +tmp;
    }
    return tmp6;
  }
};
