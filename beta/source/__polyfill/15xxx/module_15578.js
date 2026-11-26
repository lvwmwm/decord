// Module ID: 15578
// Function ID: 15579
// Dependencies: [15576, 15550]

// Module 15578
import _mod15550 from "module_15550" /* 15550 */;
import _mod15576 from "module_15576" /* 15576 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15550[arg0];
    let tmp8;
    if (_mod15576(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15550[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15550)[arg0][arg1];
    }
  }
  return tmp3;
};
