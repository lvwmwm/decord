// Module ID: 15767
// Function ID: 15768
// Dependencies: [15765, 15739]

// Module 15767
import _mod15739 from "module_15739" /* 15739 */;
import _mod15765 from "module_15765" /* 15765 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15739[arg0];
    let tmp8;
    if (_mod15765(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15739[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15739)[arg0][arg1];
    }
  }
  return tmp3;
};
