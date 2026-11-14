// Module ID: 6130
// Function ID: 6131
// Name: copySymbols
// Dependencies: [6123, 658]

// Module 6130 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 6123 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
