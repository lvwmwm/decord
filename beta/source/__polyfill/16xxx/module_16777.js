// Module ID: 16777
// Function ID: 16778
// Dependencies: [16775, 16749]

// Module 16777
import _mod16749 from "module_16749" /* 16749 */;
import _mod16775 from "module_16775" /* 16775 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16749[arg0];
    let tmp8;
    if (_mod16775(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16749[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16749)[arg0][arg1];
    }
  }
  return tmp3;
};
