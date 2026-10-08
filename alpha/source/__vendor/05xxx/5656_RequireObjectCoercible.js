// Module ID: 5656
// Function ID: 5657
// Name: RequireObjectCoercible
// Dependencies: [1305]

// Module 5656 (RequireObjectCoercible)
import _mod1305 from "module_1305" /* 1305 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    const tmp3 = _mod1305;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const self = this;
    const self2 = this;
    const tmp32 = new tmp3(text);
    throw tmp32;
  } else {
    return arg0;
  }
};
