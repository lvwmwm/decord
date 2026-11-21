// Module ID: 5705
// Function ID: 5706
// Name: copySymbolsIn
// Dependencies: [5706, 5708]

// Module 5705 (copySymbolsIn)
import copyObject from "copyObject" /* 5706 */;
import _mod5708 from "module_5708" /* 5708 */;


export default function copySymbolsIn(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, _mod5708(arg0), arg1);
};
