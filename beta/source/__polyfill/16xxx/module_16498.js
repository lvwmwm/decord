// Module ID: 16498
// Function ID: 16499
// Dependencies: [16496, 16470]

// Module 16498
import _mod16470 from "module_16470" /* 16470 */;
import _mod16496 from "module_16496" /* 16496 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16470[arg0];
    let tmp8;
    if (_mod16496(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16470[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16470)[arg0][arg1];
    }
  }
  return tmp3;
};
