// Module ID: 5774
// Function ID: 5775
// Name: copySymbols
// Dependencies: [5767, 670]

// Module 5774 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5767 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
