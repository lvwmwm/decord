// Module ID: 16775
// Function ID: 16776
// Dependencies: [16773, 16747]

// Module 16775
import _mod16747 from "module_16747" /* 16747 */;
import _mod16773 from "module_16773" /* 16773 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod16747[arg0];
    let tmp8;
    if (_mod16773(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod16747[arg0];
    const tmp = require;
    if (tmp3) {
      tmp3 = tmp(16747)[arg0][arg1];
    }
  }
  return tmp3;
};
