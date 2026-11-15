// Module ID: 16499
// Function ID: 16500
// Dependencies: [16497, 16471]

// Module 16499
import _mod16471 from "module_16471" /* 16471 */;
import _mod16497 from "module_16497" /* 16497 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16471[arg0];
    let tmp8;
    if (_mod16497(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16471[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16471)[arg0][arg1];
    }
  }
  return tmp3;
};
