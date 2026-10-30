// Module ID: 5810
// Function ID: 5811
// Name: copySymbolsIn
// Dependencies: [5811, 5813]

// Module 5810 (copySymbolsIn)
import copyObject from "copyObject" /* 5811 */;
import _mod5813 from "module_5813" /* 5813 */;


export default function copySymbolsIn(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, _mod5813(arg0), arg1);
};
