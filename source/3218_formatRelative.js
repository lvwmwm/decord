// Module ID: 3218
// Function ID: 25841
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 3218 (formatRelative)
let closure_0 = [false, false, false, false, false, null, null];
let closure_1 = {
  nextWeek(arg0) {
    return "'v " + closure_0[arg0.getUTCDay(arg0)] + " o' p";
  }
};

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if ("function" === typeof closure_1[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
