// Module ID: 5902
// Function ID: 5903
// Name: copySymbols
// Dependencies: [5895, 658]

// Module 5902 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5895 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
