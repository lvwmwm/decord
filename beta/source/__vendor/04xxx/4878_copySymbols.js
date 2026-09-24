// Module ID: 4878
// Function ID: 4879
// Name: copySymbols
// Dependencies: [4871, 663]

// Module 4878 (copySymbols)
import stubArray from "stubArray" /* 663 */;
import copyObject from "copyObject" /* 4871 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
