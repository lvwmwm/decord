// Module ID: 3626
// Function ID: 27880
// Name: setDefaultOptions
// Dependencies: [3210, 3214]
// Exports: default

// Module 3626 (setDefaultOptions)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function setDefaultOptions(obj) {
  tmp3.default(1, arguments);
  obj = {};
  const defaultOptions = require(3214) /* getDefaultOptions */.getDefaultOptions();
  for (const key10018 in defaultOptions) {
    let tmp6 = key10018;
    let _Object = Object;
    if (!hasOwnProperty.call(defaultOptions, key10018)) {
      continue;
    } else {
      obj[key10018] = defaultOptions[key10018];
      continue;
    }
    continue;
  }
  for (const key10022 in arg0) {
    let tmp7 = key10022;
    let _Object2 = Object;
    if (!hasOwnProperty2.call(arg0, key10022)) {
      continue;
    } else {
      if (undefined === arg0[key10022]) {
        delete tmp[tmp2];
        continue;
      } else {
        obj[key10022] = arg0[key10022];
        continue;
      }
      continue;
    }
    continue;
  }
  require(3214) /* getDefaultOptions */.setDefaultOptions(obj);
};
export default exports.default;
