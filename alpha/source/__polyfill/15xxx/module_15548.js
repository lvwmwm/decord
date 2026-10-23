// Module ID: 15548
// Function ID: 15549
// Dependencies: [15546, 15520]

// Module 15548
import _mod15520 from "module_15520" /* 15520 */;
import _mod15546 from "module_15546" /* 15546 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15520[arg0];
    let tmp8;
    if (_mod15546(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15520[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15520)[arg0][arg1];
    }
  }
  return tmp3;
};
