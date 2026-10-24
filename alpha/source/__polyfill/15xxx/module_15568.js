// Module ID: 15568
// Function ID: 15569
// Dependencies: [15566, 15540]

// Module 15568
import _mod15540 from "module_15540" /* 15540 */;
import _mod15566 from "module_15566" /* 15566 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15540[arg0];
    let tmp8;
    if (_mod15566(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15540[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15540)[arg0][arg1];
    }
  }
  return tmp3;
};
