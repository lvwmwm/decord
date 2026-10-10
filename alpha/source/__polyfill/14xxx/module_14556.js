// Module ID: 14556
// Function ID: 14557
// Dependencies: [14554, 14528]

// Module 14556
import _mod14528 from "module_14528" /* 14528 */;
import _mod14554 from "module_14554" /* 14554 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14528[arg0];
    let tmp8;
    if (_mod14554(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14528[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(14528)[arg0][arg1];
    }
  }
  return tmp3;
};
