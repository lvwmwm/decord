// Module ID: 15514
// Function ID: 15515
// Dependencies: [15512, 15486]

// Module 15514
import _mod15486 from "module_15486" /* 15486 */;
import _mod15512 from "module_15512" /* 15512 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15486[arg0];
    let tmp8;
    if (_mod15512(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15486[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15486)[arg0][arg1];
    }
  }
  return tmp3;
};
