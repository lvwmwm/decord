// Module ID: 15574
// Function ID: 15575
// Dependencies: [15572, 15546]

// Module 15574
import _mod15546 from "module_15546" /* 15546 */;
import _mod15572 from "module_15572" /* 15572 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15546[arg0];
    let tmp8;
    if (_mod15572(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15546[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15546)[arg0][arg1];
    }
  }
  return tmp3;
};
