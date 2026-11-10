// Module ID: 667
// Function ID: 668
// Name: baseAssignValue
// Dependencies: [668]

// Module 667 (baseAssignValue)
import getNative from "getNative" /* 668 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    const tmp = require;
    if (getNative) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      tmp(668)(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
