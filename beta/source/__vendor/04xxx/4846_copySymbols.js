// Module ID: 4846
// Function ID: 4847
// Name: copySymbols
// Dependencies: [4839, 663]

// Module 4846 (copySymbols)
import stubArray from "stubArray" /* 663 */;
import copyObject from "copyObject" /* 4839 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
