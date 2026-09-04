// Module ID: 4832
// Function ID: 4833
// Name: CreateDataProperty
// Dependencies: [4770, 538, 4817, 4833]

// Module 4832 (CreateDataProperty)
import isObject from "isObject" /* 4770 */;


export default function CreateDataProperty(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4817)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4833)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(538)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
