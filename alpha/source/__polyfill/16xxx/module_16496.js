// Module ID: 16496
// Function ID: 16497
// Dependencies: [16494, 16468]

// Module 16496
import _mod16468 from "module_16468" /* 16468 */;
import _mod16494 from "module_16494" /* 16494 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16468[arg0];
    let tmp8;
    if (_mod16494(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16468[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16468)[arg0][arg1];
    }
  }
  return tmp3;
};
