// Module ID: 14579
// Function ID: 14580
// Dependencies: [14577, 14551]

// Module 14579
import _mod14551 from "module_14551" /* 14551 */;
import _mod14577 from "module_14577" /* 14577 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14551[arg0];
    let tmp8;
    if (_mod14577(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14551[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(14551)[arg0][arg1];
    }
  }
  return tmp3;
};
