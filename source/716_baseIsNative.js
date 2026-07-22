// Module ID: 716
// Function ID: 8737
// Name: baseIsNative
// Dependencies: [759, 762, 763, 709]

// Module 716 (baseIsNative)
let closure_2 = /^\[object .+?Constructor\]$/;
const str = toString.call(Object.prototype.hasOwnProperty);
let closure_3 = RegExp(`^${toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

export default function baseIsNative(arg0) {
  let tmp = !require(dependencyMap[0])(arg0);
  if (!tmp) {
    tmp = require(dependencyMap[1])(arg0);
  }
  if (!!tmp) {
    return tmp4;
  } else {
    const isMatch = require(dependencyMap[2])(arg0) ? closure_3 : closure_2.test(require(dependencyMap[3])(arg0));
    const obj = require(dependencyMap[2])(arg0) ? closure_3 : closure_2;
  }
};
