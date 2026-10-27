// Module ID: 15609
// Function ID: 15610
// Dependencies: [15607, 15581]

// Module 15609
import _mod15581 from "module_15581" /* 15581 */;
import _mod15607 from "module_15607" /* 15607 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15581[arg0];
    let tmp8;
    if (_mod15607(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15581[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15581)[arg0][arg1];
    }
  }
  return tmp3;
};
