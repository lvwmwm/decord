// Module ID: 5776
// Function ID: 5777
// Name: copySymbols
// Dependencies: [5769, 658]

// Module 5776 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5769 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
