// Module ID: 15269
// Function ID: 15270
// Dependencies: [15267, 15241]

// Module 15269
import _mod15241 from "module_15241" /* 15241 */;
import _mod15267 from "module_15267" /* 15267 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod15241[arg0];
    let tmp8;
    if (_mod15267(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod15241[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(15241)[arg0][arg1];
    }
  }
  return tmp3;
};
