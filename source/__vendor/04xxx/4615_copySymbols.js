// Module ID: 4615
// Function ID: 4616
// Name: copySymbols
// Dependencies: [4608, 792]

// Module 4615 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 792 */;
import copyObject from "copyObject" /* 4608 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};
