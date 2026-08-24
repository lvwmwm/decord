// Module ID: 4454
// Function ID: 4455
// Name: HasProperty
// Dependencies: [4395, 541, 4442]

// Module 4454 (HasProperty)
import isObject from "isObject" /* 4395 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4442)(arg1)) {
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
