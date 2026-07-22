// Module ID: 12724
// Function ID: 97642
// Name: windowSourceMatches
// Dependencies: []
// Exports: default

// Module 12724 (windowSourceMatches)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/go_live/utils/windowSourceMatches.tsx");

export default function windowSourceMatches(str) {
  if (null == arg1) {
    return false;
  } else {
    const tmp2 = callback(str.split(":"), 2);
    return "window" === tmp2[0] && tmp2[1] === arg1;
  }
};
