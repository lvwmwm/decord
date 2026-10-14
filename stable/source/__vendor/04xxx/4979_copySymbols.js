// Module ID: 4979
// Function ID: 4980
// Name: copySymbols
// Dependencies: [4972, 670]

// Module 4979 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 4972 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
