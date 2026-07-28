// Module ID: 4420
// Function ID: 38948
// Name: RequireObjectCoercible
// Dependencies: [518]

// Module 4420 (RequireObjectCoercible)

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let tmp3 = require(518);
    let text = arguments.length > 0;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const prototype = tmp3.prototype;
    tmp3 = new tmp3(text);
    throw tmp3;
  } else {
    return arg0;
  }
};
