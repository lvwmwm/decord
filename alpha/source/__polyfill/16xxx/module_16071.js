// Module ID: 16071
// Function ID: 16072
// Dependencies: [16069, 16043]

// Module 16071
import _mod16043 from "module_16043" /* 16043 */;
import _mod16069 from "module_16069" /* 16069 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16043[arg0];
    let tmp8;
    if (_mod16069(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16043[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16043)[arg0][arg1];
    }
  }
  return tmp3;
};
