// Module ID: 5594
// Function ID: 5595
// Name: copySymbols
// Dependencies: [5587, 658]

// Module 5594 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5587 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
