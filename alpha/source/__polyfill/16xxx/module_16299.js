// Module ID: 16299
// Function ID: 16300
// Dependencies: [16297, 16271]

// Module 16299
import _mod16271 from "module_16271" /* 16271 */;
import _mod16297 from "module_16297" /* 16297 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16271[arg0];
    let tmp8;
    if (_mod16297(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16271[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16271)[arg0][arg1];
    }
  }
  return tmp3;
};
