// Module ID: 4871
// Function ID: 4872
// Name: CreateDataProperty
// Dependencies: [4809, 1283, 4856, 4872]

// Module 4871 (CreateDataProperty)
import isObject from "isObject" /* 4809 */;


export default function CreateDataProperty(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4856)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4872)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
