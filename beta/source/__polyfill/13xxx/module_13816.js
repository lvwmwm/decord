// Module ID: 13816
// Function ID: 13817
// Dependencies: [13814, 13788]

// Module 13816
import _mod13788 from "module_13788" /* 13788 */;
import _mod13814 from "module_13814" /* 13814 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod13788[arg0];
    let tmp8;
    if (_mod13814(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod13788[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(13788)[arg0][arg1];
    }
  }
  return tmp3;
};
