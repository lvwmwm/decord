// Module ID: 3316
// Function ID: 26097
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 3316 (formatRelative)
let closure_0 = {
  lastWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (0 === uTCDay) {
      let str = "\u00FAltimo";
    } else {
      str = "\u00FAltima";
    }
    return "'" + str + "' eeee '\u00E0s' p";
  }
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof closure_0[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
