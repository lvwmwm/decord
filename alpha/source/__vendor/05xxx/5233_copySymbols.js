// Module ID: 5233
// Function ID: 5234
// Name: copySymbols
// Dependencies: [5226, 670]

// Module 5233 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5226 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
