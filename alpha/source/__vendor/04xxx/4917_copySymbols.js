// Module ID: 4917
// Function ID: 4918
// Name: copySymbols
// Dependencies: [4910, 659]

// Module 4917 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4910 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
