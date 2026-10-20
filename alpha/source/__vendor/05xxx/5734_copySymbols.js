// Module ID: 5734
// Function ID: 5735
// Name: copySymbols
// Dependencies: [5727, 670]

// Module 5734 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5727 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
