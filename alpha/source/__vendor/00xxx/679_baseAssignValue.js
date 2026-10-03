// Module ID: 679
// Function ID: 680
// Name: baseAssignValue
// Dependencies: [680]

// Module 679 (baseAssignValue)
import getNative from "getNative" /* 680 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    const tmp = require;
    if (getNative) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      tmp(680)(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
