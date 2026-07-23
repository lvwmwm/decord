// Module ID: 716
// Function ID: 8738
// Name: baseIsNative
// Dependencies: [573, 717, 597, 719]

// Module 716 (baseIsNative)
const re2 = /^\[object .+?Constructor\]$/;
const str = toString.call(Object.prototype.hasOwnProperty);
let closure_3 = RegExp(`^${toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

export default function baseIsNative(arg0) {
  let tmp = !require(573) /* isObject */(arg0);
  if (!tmp) {
    tmp = require(717) /* isMasked */(arg0);
  }
  if (!!tmp) {
    return tmp4;
  } else {
    const isMatch = require(597) /* isFunction */(arg0) ? closure_3 : closure_2.test(require(719) /* toSource */(arg0));
    const obj = require(597) /* isFunction */(arg0) ? closure_3 : closure_2;
  }
};
