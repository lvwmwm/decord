// Module ID: 4580
// Function ID: 4581
// Name: copySymbols
// Dependencies: [4573, 795]

// Module 4580 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4573 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
