// Module ID: 6120
// Function ID: 6121
// Name: copySymbols
// Dependencies: [6113, 658]

// Module 6120 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 6113 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
