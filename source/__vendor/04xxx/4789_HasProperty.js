// Module ID: 4789
// Function ID: 4790
// Name: HasProperty
// Dependencies: [4730, 541, 4777]

// Module 4789 (HasProperty)
import isObject from "isObject" /* 4730 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4777)(arg1)) {
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
