// Module ID: 15760
// Function ID: 15761
// Dependencies: [15758, 15732]

// Module 15760
import _mod15732 from "module_15732" /* 15732 */;
import _mod15758 from "module_15758" /* 15758 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15732[arg0];
    let tmp8;
    if (_mod15758(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15732[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15732)[arg0][arg1];
    }
  }
  return tmp3;
};
