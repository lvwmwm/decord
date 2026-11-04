// Module ID: 16401
// Function ID: 16402
// Dependencies: [16399, 16373]

// Module 16401
import _mod16373 from "module_16373" /* 16373 */;
import _mod16399 from "module_16399" /* 16399 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16373[arg0];
    let tmp8;
    if (_mod16399(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16373[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16373)[arg0][arg1];
    }
  }
  return tmp3;
};
