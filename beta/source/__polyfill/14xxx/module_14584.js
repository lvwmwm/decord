// Module ID: 14584
// Function ID: 14585
// Dependencies: [14582, 14556]

// Module 14584
import _mod14556 from "module_14556" /* 14556 */;
import _mod14582 from "module_14582" /* 14582 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14556[arg0];
    let tmp8;
    if (_mod14582(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14556[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(14556)[arg0][arg1];
    }
  }
  return tmp3;
};
