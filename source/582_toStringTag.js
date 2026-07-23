// Module ID: 582
// Function ID: 6969
// Name: toStringTag
// Dependencies: [579]

// Module 582 (toStringTag)
let closure_0;
let closure_1;
({ hasOwnProperty: closure_0, toString: closure_1 } = Object.prototype);
let toStringTag;
if (require("module_579")) {
  toStringTag = require("module_579").toStringTag;
}

export default function getRawTag(arg0) {
  arg0[toStringTag] = undefined;
  while (true) {
    let tmp6 = callback;
    let tmp7 = arg0;
    let callResult = callback.call(arg0);
    {
      if (tmp4) {
        arg0[toStringTag] = tmp5;
        break;
      } else {
        delete tmp2[tmp];
        break;
      }
      break;
    }
    return callResult;
  }
};
