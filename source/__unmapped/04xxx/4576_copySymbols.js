// Module ID: 4576
// Function ID: 4577
// Name: copySymbols
// Dependencies: [4569, 795]

// Module 4576 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4569 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
