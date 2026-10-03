// Module ID: 14087
// Function ID: 14088
// Dependencies: [14085, 14059]

// Module 14087
import _mod14059 from "module_14059" /* 14059 */;
import _mod14085 from "module_14085" /* 14085 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14059[arg0];
    let tmp8;
    if (_mod14085(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14059[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(14059)[arg0][arg1];
    }
  }
  return tmp3;
};
