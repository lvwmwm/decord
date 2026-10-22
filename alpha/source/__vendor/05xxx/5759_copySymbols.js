// Module ID: 5759
// Function ID: 5760
// Name: copySymbols
// Dependencies: [5752, 670]

// Module 5759 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5752 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
