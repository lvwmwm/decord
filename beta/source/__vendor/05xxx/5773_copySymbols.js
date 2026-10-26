// Module ID: 5773
// Function ID: 5774
// Name: copySymbols
// Dependencies: [5766, 670]

// Module 5773 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5766 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
