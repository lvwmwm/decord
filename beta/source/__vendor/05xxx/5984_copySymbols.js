// Module ID: 5984
// Function ID: 5985
// Name: copySymbols
// Dependencies: [5977, 658]

// Module 5984 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5977 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
