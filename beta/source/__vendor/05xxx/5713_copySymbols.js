// Module ID: 5713
// Function ID: 5714
// Name: copySymbols
// Dependencies: [5706, 658]

// Module 5713 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5706 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
