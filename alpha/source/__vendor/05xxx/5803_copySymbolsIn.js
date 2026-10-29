// Module ID: 5803
// Function ID: 5804
// Name: copySymbolsIn
// Dependencies: [5804, 5806]

// Module 5803 (copySymbolsIn)
import copyObject from "copyObject" /* 5804 */;
import _mod5806 from "module_5806" /* 5806 */;


export default function copySymbolsIn(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, _mod5806(arg0), arg1);
};
