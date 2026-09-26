// Module ID: 14127
// Function ID: 14128
// Name: windowSourceMatches
// Dependencies: [32, 2]
// Exports: default

// Module 14127 (windowSourceMatches)
import _slicedToArray from "module_32" /* 32 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/windowSourceMatches.tsx");

export default function windowSourceMatches(str, arg1) {
  if (null == arg1) {
    return false;
  } else {
    const tmp3 = _slicedToArray(str.split(":"), 2);
    return "window" === tmp3[0] && tmp3[1] === arg1;
  }
};
