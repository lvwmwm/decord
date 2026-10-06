// Module ID: 13657
// Function ID: 13658
// Name: _slicedToArray
// Dependencies: [32, 2]
// Exports: default

// Module 13657 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/go_live/utils/windowSourceMatches.tsx");

export default function windowSourceMatches(str, arg1) {
  if (null == arg1) {
    return false;
  } else {
    const tmp3 = _slicedToArray(str.split(":"), 2);
    return "window" === tmp3[0] && tmp3[1] === arg1;
  }
};
