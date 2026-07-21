// Module ID: 578
// Function ID: 6964
// Name: toStringTag
// Dependencies: []

// Module 578 (toStringTag)
let toStringTag;
if (require(dependencyMap[0])) {
  toStringTag = require(dependencyMap[0]).toStringTag;
}

export default function baseGetTag(arg0) {
  if (null == arg0) {
    let str = "[object Null]";
    if (undefined === arg0) {
      str = "[object Undefined]";
    }
    let tmp6 = str;
  } else {
    if (toStringTag) {
      const _Object = Object;
      if (toStringTag in Object(arg0)) {
        tmp6 = require(dependencyMap[1])(arg0);
      }
    }
    tmp6 = require(dependencyMap[2])(arg0);
  }
  return tmp6;
};
