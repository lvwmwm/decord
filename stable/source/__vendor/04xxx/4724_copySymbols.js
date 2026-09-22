// Module ID: 4724
// Function ID: 4725
// Name: copySymbols
// Dependencies: [4717, 659]

// Module 4724 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4717 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
