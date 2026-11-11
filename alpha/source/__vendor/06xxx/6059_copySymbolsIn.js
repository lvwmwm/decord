// Module ID: 6059
// Function ID: 6060
// Name: copySymbolsIn
// Dependencies: [6060, 6062]

// Module 6059 (copySymbolsIn)
import copyObject from "copyObject" /* 6060 */;
import _mod6062 from "module_6062" /* 6062 */;


export default function copySymbolsIn(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, _mod6062(arg0), arg1);
};
