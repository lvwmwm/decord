// Module ID: 15470
// Function ID: 15471
// Dependencies: [15468, 15442]

// Module 15470
import _mod15442 from "module_15442" /* 15442 */;
import _mod15468 from "module_15468" /* 15468 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15442[arg0];
    let tmp8;
    if (_mod15468(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15442[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15442)[arg0][arg1];
    }
  }
  return tmp3;
};
