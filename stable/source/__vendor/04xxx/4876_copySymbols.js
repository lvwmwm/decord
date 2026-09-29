// Module ID: 4876
// Function ID: 4877
// Name: copySymbols
// Dependencies: [4869, 659]

// Module 4876 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4869 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
