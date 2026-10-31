// Module ID: 5823
// Function ID: 5824
// Name: copySymbols
// Dependencies: [5816, 658]

// Module 5823 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5816 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
