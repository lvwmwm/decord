// Module ID: 5818
// Function ID: 5819
// Name: copySymbols
// Dependencies: [5811, 658]

// Module 5818 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5811 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
