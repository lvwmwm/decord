// Module ID: 4577
// Function ID: 4578
// Name: copySymbols
// Dependencies: [4570, 795]

// Module 4577 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4570 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
