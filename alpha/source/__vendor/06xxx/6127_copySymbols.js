// Module ID: 6127
// Function ID: 6128
// Name: copySymbols
// Dependencies: [6120, 658]

// Module 6127 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 6120 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
