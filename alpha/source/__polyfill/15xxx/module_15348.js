// Module ID: 15348
// Function ID: 15349
// Dependencies: [15346, 15320]

// Module 15348
import _mod15320 from "module_15320" /* 15320 */;
import _mod15346 from "module_15346" /* 15346 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15320[arg0];
    let tmp8;
    if (_mod15346(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15320[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15320)[arg0][arg1];
    }
  }
  return tmp3;
};
