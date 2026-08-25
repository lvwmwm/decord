// Module ID: 4709
// Function ID: 4710
// Name: HasProperty
// Dependencies: [4650, 541, 4697]

// Module 4709 (HasProperty)
import isObject from "isObject" /* 4650 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4697)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(541)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
