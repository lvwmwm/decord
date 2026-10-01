// Module ID: 668
// Function ID: 669
// Name: baseAssignValue
// Dependencies: [669]

// Module 668 (baseAssignValue)
import getNative from "getNative" /* 669 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    const tmp = require;
    if (getNative) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      tmp(669)(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
