// Module ID: 5805
// Function ID: 5806
// Name: copySymbols
// Dependencies: [5798, 670]

// Module 5805 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5798 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};
