// Module ID: 5170
// Function ID: 5171
// Name: copySymbols
// Dependencies: [5163, 670]

// Module 5170 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5163 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
