// Module ID: 578
// Function ID: 6964
// Name: getTag
// Dependencies: [579, 582, 583]

// Module 578 (getTag)
let toStringTag;
if (require("module_579")) {
  toStringTag = require("module_579").toStringTag;
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
        tmp6 = require(582) /* toStringTag */(arg0);
      }
    }
    tmp6 = require(583) /* objectToString */(arg0);
  }
  return tmp6;
};
