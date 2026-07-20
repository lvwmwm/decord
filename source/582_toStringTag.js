// Module ID: 582
// Function ID: 6969
// Name: toStringTag
// Dependencies: []

// Module 582 (toStringTag)
({ hasOwnProperty: closure_0, toString: closure_1 } = Object.prototype);
let toStringTag;
if (require(dependencyMap[0])) {
  toStringTag = require(dependencyMap[0]).toStringTag;
}

export default function getRawTag(arg0) {
  arg0[toStringTag] = undefined;
  while (true) {
    let tmp4 = callback;
    let tmp5 = arg0;
    let callResult = callback.call(arg0);
    {
      if (tmp2) {
        arg0[toStringTag] = tmp3;
        // break
      } else {
        delete r3[r2];
        // break
      }
      break;
    }
    return callResult;
  }
};
