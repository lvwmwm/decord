// Module ID: 5811
// Function ID: 5812
// Name: copySymbols
// Dependencies: [5804, 670]

// Module 5811 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5804 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
