// Module ID: 4578
// Function ID: 4579
// Name: copySymbols
// Dependencies: [4571, 795]

// Module 4578 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4571 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
