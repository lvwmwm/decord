// Module ID: 5979
// Function ID: 5980
// Name: copySymbols
// Dependencies: [5972, 658]

// Module 5979 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5972 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
