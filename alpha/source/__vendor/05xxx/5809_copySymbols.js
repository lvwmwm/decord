// Module ID: 5809
// Function ID: 5810
// Name: copySymbols
// Dependencies: [5802, 670]

// Module 5809 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5802 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
