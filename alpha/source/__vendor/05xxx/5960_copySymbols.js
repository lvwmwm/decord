// Module ID: 5960
// Function ID: 5961
// Name: copySymbols
// Dependencies: [5953, 658]

// Module 5960 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5953 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
