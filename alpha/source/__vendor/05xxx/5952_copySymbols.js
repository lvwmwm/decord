// Module ID: 5952
// Function ID: 5953
// Name: copySymbols
// Dependencies: [5945, 658]

// Module 5952 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5945 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
