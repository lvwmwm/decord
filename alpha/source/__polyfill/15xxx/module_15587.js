// Module ID: 15587
// Function ID: 15588
// Dependencies: [15585, 15559]

// Module 15587
import _mod15559 from "module_15559" /* 15559 */;
import _mod15585 from "module_15585" /* 15585 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15559[arg0];
    let tmp8;
    if (_mod15585(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15559[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15559)[arg0][arg1];
    }
  }
  return tmp3;
};
