// Module ID: 5171
// Function ID: 5172
// Name: copySymbols
// Dependencies: [5164, 670]

// Module 5171 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5164 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
