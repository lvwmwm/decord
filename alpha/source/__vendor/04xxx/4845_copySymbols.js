// Module ID: 4845
// Function ID: 4846
// Name: copySymbols
// Dependencies: [4838, 659]

// Module 4845 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4838 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
