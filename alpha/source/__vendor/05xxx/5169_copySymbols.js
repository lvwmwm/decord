// Module ID: 5169
// Function ID: 5170
// Name: copySymbols
// Dependencies: [5162, 670]

// Module 5169 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5162 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
