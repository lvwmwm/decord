// Module ID: 5954
// Function ID: 5955
// Name: copySymbols
// Dependencies: [5947, 658]

// Module 5954 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5947 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
