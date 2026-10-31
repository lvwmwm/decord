// Module ID: 16152
// Function ID: 16153
// Dependencies: [16150, 16124]

// Module 16152
import _mod16124 from "module_16124" /* 16124 */;
import _mod16150 from "module_16150" /* 16150 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16124[arg0];
    let tmp8;
    if (_mod16150(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16124[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16124)[arg0][arg1];
    }
  }
  return tmp3;
};
