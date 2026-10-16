// Module ID: 5879
// Function ID: 5880
// Name: RequireObjectCoercible
// Dependencies: [1308]

// Module 5879 (RequireObjectCoercible)
import _mod1308 from "module_1308" /* 1308 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    const tmp3 = _mod1308;
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
