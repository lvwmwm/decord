// Module ID: 14406
// Function ID: 14407
// Dependencies: [14404, 14378]

// Module 14406
import _mod14378 from "module_14378" /* 14378 */;
import _mod14404 from "module_14404" /* 14404 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14378[arg0];
    let tmp8;
    if (_mod14404(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14378[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(14378)[arg0][arg1];
    }
  }
  return tmp3;
};
