// Module ID: 5161
// Function ID: 5162
// Name: copySymbolsIn
// Dependencies: [5162, 5164]

// Module 5161 (copySymbolsIn)
import copyObject from "copyObject" /* 5162 */;
import _mod5164 from "module_5164" /* 5164 */;


export default function copySymbolsIn(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, _mod5164(arg0), arg1);
};
