// Module ID: 4648
// Function ID: 4649
// Name: copySymbols
// Dependencies: [4641, 659]

// Module 4648 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 659 */;
import copyObject from "copyObject" /* 4641 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
