// Module ID: 672
// Function ID: 673
// Name: baseAssignValue
// Dependencies: [673]

// Module 672 (baseAssignValue)
import _mod673 from "module_673" /* 673 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (_mod673) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      _mod673(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
