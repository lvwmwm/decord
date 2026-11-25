// Module ID: 15709
// Function ID: 15710
// Dependencies: [15707, 15681]

// Module 15709
import _mod15681 from "module_15681" /* 15681 */;
import _mod15707 from "module_15707" /* 15707 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15681[arg0];
    let tmp8;
    if (_mod15707(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15681[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15681)[arg0][arg1];
    }
  }
  return tmp3;
};
