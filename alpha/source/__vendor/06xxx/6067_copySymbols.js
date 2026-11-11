// Module ID: 6067
// Function ID: 6068
// Name: copySymbols
// Dependencies: [6060, 658]

// Module 6067 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 6060 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
