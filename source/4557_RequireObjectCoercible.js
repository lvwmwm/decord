// Module ID: 4557
// Function ID: 4558
// Name: RequireObjectCoercible
// Dependencies: [541]

// Module 4557 (RequireObjectCoercible)

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    let tmp3 = require(541);
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    tmp3 = new tmp3(text);
    throw tmp3;
  } else {
    return arg0;
  }
};
