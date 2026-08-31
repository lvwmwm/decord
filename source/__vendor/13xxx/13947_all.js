// Module ID: 13947
// Function ID: 13948
// Name: all
// Dependencies: [13945, 13919]

// Module 13947 (all)
import _mod13919 from "module_13919" /* 13919 */;
import all from "all" /* 13945 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13919[arg0];
    let tmp8;
    if (all(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13919[arg0];
    if (tmp3) {
      tmp3 = tmp(13919)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
