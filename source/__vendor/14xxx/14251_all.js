// Module ID: 14251
// Function ID: 14252
// Name: all
// Dependencies: [14249, 14223]

// Module 14251 (all)
import _mod14223 from "module_14223" /* 14223 */;
import all from "all" /* 14249 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14223[arg0];
    let tmp8;
    if (all(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14223[arg0];
    if (tmp3) {
      tmp3 = tmp(14223)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
