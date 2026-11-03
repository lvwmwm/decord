// Module ID: 5943
// Function ID: 5944
// Name: copySymbols
// Dependencies: [5936, 658]

// Module 5943 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5936 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
