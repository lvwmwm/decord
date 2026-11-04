// Module ID: 5957
// Function ID: 5958
// Name: copySymbols
// Dependencies: [5950, 658]

// Module 5957 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5950 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
