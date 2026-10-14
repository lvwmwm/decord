// Module ID: 5175
// Function ID: 5176
// Name: copySymbols
// Dependencies: [5168, 670]

// Module 5175 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5168 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
