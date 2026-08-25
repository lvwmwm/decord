// Module ID: 4512
// Function ID: 4513
// Name: copySymbols
// Dependencies: [4505, 795]

// Module 4512 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4505 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
