// Module ID: 15234
// Function ID: 15235
// Dependencies: [15232, 15206]

// Module 15234
import _mod15206 from "module_15206" /* 15206 */;
import _mod15232 from "module_15232" /* 15232 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15206[arg0];
    let tmp8;
    if (_mod15232(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15206[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15206)[arg0][arg1];
    }
  }
  return tmp3;
};
