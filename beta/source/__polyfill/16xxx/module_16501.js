// Module ID: 16501
// Function ID: 16502
// Dependencies: [16499, 16473]

// Module 16501
import _mod16473 from "module_16473" /* 16473 */;
import _mod16499 from "module_16499" /* 16499 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16473[arg0];
    let tmp8;
    if (_mod16499(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16473[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16473)[arg0][arg1];
    }
  }
  return tmp3;
};
