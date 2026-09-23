// Module ID: 4915
// Function ID: 4916
// Name: copySymbols
// Dependencies: [4908, 659]

// Module 4915 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4908 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
