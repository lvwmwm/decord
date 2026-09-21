// Module ID: 4844
// Function ID: 4845
// Name: copySymbols
// Dependencies: [4837, 659]

// Module 4844 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4837 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
