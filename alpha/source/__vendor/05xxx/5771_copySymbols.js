// Module ID: 5771
// Function ID: 5772
// Name: copySymbols
// Dependencies: [5764, 670]

// Module 5771 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5764 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
