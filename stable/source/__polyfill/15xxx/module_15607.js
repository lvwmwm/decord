// Module ID: 15607
// Function ID: 15608
// Dependencies: [15605, 15579]

// Module 15607
import _mod15579 from "module_15579" /* 15579 */;
import _mod15605 from "module_15605" /* 15605 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15579[arg0];
    let tmp8;
    if (_mod15605(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15579[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15579)[arg0][arg1];
    }
  }
  return tmp3;
};
