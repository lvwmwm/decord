// Module ID: 5623
// Function ID: 5624
// Name: copySymbols
// Dependencies: [5616, 658]

// Module 5623 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5616 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
