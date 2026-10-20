// Module ID: 15380
// Function ID: 15381
// Dependencies: [15378, 15352]

// Module 15380
import _mod15352 from "module_15352" /* 15352 */;
import _mod15378 from "module_15378" /* 15378 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15352[arg0];
    let tmp8;
    if (_mod15378(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15352[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15352)[arg0][arg1];
    }
  }
  return tmp3;
};
