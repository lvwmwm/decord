// Module ID: 16151
// Function ID: 16152
// Dependencies: [16149, 16123]

// Module 16151
import _mod16123 from "module_16123" /* 16123 */;
import _mod16149 from "module_16149" /* 16149 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16123[arg0];
    let tmp8;
    if (_mod16149(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16123[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16123)[arg0][arg1];
    }
  }
  return tmp3;
};
