// Module ID: 6119
// Function ID: 6120
// Name: copySymbolsIn
// Dependencies: [6120, 6122]

// Module 6119 (copySymbolsIn)
import copyObject from "copyObject" /* 6120 */;
import _mod6122 from "module_6122" /* 6122 */;


export default function copySymbolsIn(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, _mod6122(arg0), arg1);
};
