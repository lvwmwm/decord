// Module ID: 5660
// Function ID: 5661
// Name: RequireObjectCoercible
// Dependencies: [1306]

// Module 5660 (RequireObjectCoercible)
import _mod1306 from "module_1306" /* 1306 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    const tmp3 = _mod1306;
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
