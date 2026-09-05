// Module ID: 4868
// Function ID: 4869
// Name: HasProperty
// Dependencies: [4809, 1283, 4856]

// Module 4868 (HasProperty)
import isObject from "isObject" /* 4809 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4856)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
