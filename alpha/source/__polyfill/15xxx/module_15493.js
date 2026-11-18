// Module ID: 15493
// Function ID: 15494
// Dependencies: [15491, 15465]

// Module 15493
import _mod15465 from "module_15465" /* 15465 */;
import _mod15491 from "module_15491" /* 15491 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15465[arg0];
    let tmp8;
    if (_mod15491(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15465[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15465)[arg0][arg1];
    }
  }
  return tmp3;
};
