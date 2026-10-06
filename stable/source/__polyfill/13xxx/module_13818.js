// Module ID: 13818
// Function ID: 13819
// Dependencies: [13816, 13790]

// Module 13818
import _mod13790 from "module_13790" /* 13790 */;
import _mod13816 from "module_13816" /* 13816 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod13790[arg0];
    let tmp8;
    if (_mod13816(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod13790[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(13790)[arg0][arg1];
    }
  }
  return tmp3;
};
