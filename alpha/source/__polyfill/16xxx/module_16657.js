// Module ID: 16657
// Function ID: 16658
// Dependencies: [16655, 16629]

// Module 16657
import _mod16629 from "module_16629" /* 16629 */;
import _mod16655 from "module_16655" /* 16655 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16629[arg0];
    let tmp8;
    if (_mod16655(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16629[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16629)[arg0][arg1];
    }
  }
  return tmp3;
};
