// Module ID: 16469
// Function ID: 16470
// Dependencies: [16467, 16441]

// Module 16469
import _mod16441 from "module_16441" /* 16441 */;
import _mod16467 from "module_16467" /* 16467 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16441[arg0];
    let tmp8;
    if (_mod16467(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16441[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16441)[arg0][arg1];
    }
  }
  return tmp3;
};
