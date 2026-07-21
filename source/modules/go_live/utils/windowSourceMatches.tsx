// Module ID: 12715
// Function ID: 97587
// Name: windowSourceMatches
// Dependencies: [1953825491, 683]
// Exports: default

// Module 12715 (windowSourceMatches)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_0 = importDefault(dependencyMap[0]);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/go_live/utils/windowSourceMatches.tsx");

export default function windowSourceMatches(str) {
  if (null == arg1) {
    return false;
  } else {
    const tmp2 = callback(str.split(":"), 2);
    return "window" === tmp2[0] && tmp2[1] === arg1;
  }
};
