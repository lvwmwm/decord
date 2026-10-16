// Module ID: 5232
// Function ID: 5233
// Name: copySymbols
// Dependencies: [5225, 670]

// Module 5232 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5225 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
