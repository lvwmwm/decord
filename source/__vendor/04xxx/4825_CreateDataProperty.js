// Module ID: 4825
// Function ID: 4826
// Name: CreateDataProperty
// Dependencies: [4763, 538, 4810, 4826]

// Module 4825 (CreateDataProperty)
import isObject from "isObject" /* 4763 */;


export default function CreateDataProperty(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4810)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4826)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(538)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
