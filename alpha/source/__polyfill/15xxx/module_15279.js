// Module ID: 15279
// Function ID: 15280
// Dependencies: [15277, 15251]

// Module 15279
import _mod15251 from "module_15251" /* 15251 */;
import _mod15277 from "module_15277" /* 15277 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15251[arg0];
    let tmp8;
    if (_mod15277(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15251[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15251)[arg0][arg1];
    }
  }
  return tmp3;
};
