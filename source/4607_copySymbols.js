// Module ID: 4607
// Function ID: 4608
// Name: copySymbols
// Dependencies: [4600, 795]

// Module 4607 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4600 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
