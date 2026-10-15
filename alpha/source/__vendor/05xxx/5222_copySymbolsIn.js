// Module ID: 5222
// Function ID: 5223
// Name: copySymbolsIn
// Dependencies: [5223, 5225]

// Module 5222 (copySymbolsIn)
import copyObject from "copyObject" /* 5223 */;
import _mod5225 from "module_5225" /* 5225 */;


export default function copySymbolsIn(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, _mod5225(arg0), arg1);
};
