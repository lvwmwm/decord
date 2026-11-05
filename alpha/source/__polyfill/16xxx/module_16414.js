// Module ID: 16414
// Function ID: 16415
// Dependencies: [16412, 16386]

// Module 16414
import _mod16386 from "module_16386" /* 16386 */;
import _mod16412 from "module_16412" /* 16412 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16386[arg0];
    let tmp8;
    if (_mod16412(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16386[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16386)[arg0][arg1];
    }
  }
  return tmp3;
};
