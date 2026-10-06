// Module ID: 4925
// Function ID: 4926
// Name: copySymbols
// Dependencies: [4918, 671]

// Module 4925 (copySymbols)
import stubArray from "stubArray" /* 671 */;
import copyObject from "copyObject" /* 4918 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
