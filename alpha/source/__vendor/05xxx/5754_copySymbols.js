// Module ID: 5754
// Function ID: 5755
// Name: copySymbols
// Dependencies: [5747, 670]

// Module 5754 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5747 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
