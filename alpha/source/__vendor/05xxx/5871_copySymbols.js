// Module ID: 5871
// Function ID: 5872
// Name: copySymbols
// Dependencies: [5864, 658]

// Module 5871 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5864 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
