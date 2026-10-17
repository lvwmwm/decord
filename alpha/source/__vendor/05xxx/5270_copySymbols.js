// Module ID: 5270
// Function ID: 5271
// Name: copySymbols
// Dependencies: [5263, 670]

// Module 5270 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5263 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
