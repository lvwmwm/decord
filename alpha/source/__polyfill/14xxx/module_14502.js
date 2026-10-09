// Module ID: 14502
// Function ID: 14503
// Dependencies: [14500, 14474]

// Module 14502
import _mod14474 from "module_14474" /* 14474 */;
import _mod14500 from "module_14500" /* 14500 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14474[arg0];
    let tmp8;
    if (_mod14500(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14474[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(14474)[arg0][arg1];
    }
  }
  return tmp3;
};
