// Module ID: 5230
// Function ID: 5231
// Name: copySymbols
// Dependencies: [5223, 670]

// Module 5230 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5223 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
