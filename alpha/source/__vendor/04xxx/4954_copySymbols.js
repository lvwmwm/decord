// Module ID: 4954
// Function ID: 4955
// Name: copySymbols
// Dependencies: [4947, 659]

// Module 4954 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4947 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
