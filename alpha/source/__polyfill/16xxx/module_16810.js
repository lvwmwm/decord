// Module ID: 16810
// Function ID: 16811
// Dependencies: [16808, 16782]

// Module 16810
import _mod16782 from "module_16782" /* 16782 */;
import _mod16808 from "module_16808" /* 16808 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16782[arg0];
    let tmp8;
    if (_mod16808(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16782[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16782)[arg0][arg1];
    }
  }
  return tmp3;
};
