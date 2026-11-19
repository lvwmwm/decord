// Module ID: 5592
// Function ID: 5593
// Name: copySymbols
// Dependencies: [5585, 658]

// Module 5592 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5585 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
