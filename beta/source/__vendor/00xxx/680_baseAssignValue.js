// Module ID: 680
// Function ID: 681
// Name: baseAssignValue
// Dependencies: [681]

// Module 680 (baseAssignValue)
import getNative from "getNative" /* 681 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    const tmp = require;
    if (getNative) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      tmp(681)(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
