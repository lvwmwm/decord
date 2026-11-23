// Module ID: 15566
// Function ID: 15567
// Dependencies: [15564, 15538]

// Module 15566
import _mod15538 from "module_15538" /* 15538 */;
import _mod15564 from "module_15564" /* 15564 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15538[arg0];
    let tmp8;
    if (_mod15564(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15538[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15538)[arg0][arg1];
    }
  }
  return tmp3;
};
