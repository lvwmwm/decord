// Module ID: 3236
// Function ID: 25889
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 3236 (formatRelative)
let closure_0 = {
  lastWeek(getUTCDay) {
    let str = "'\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7' eeee '\u03C3\u03C4\u03B9\u03C2' p";
    if (6 === getUTCDay.getUTCDay()) {
      str = "'\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF' eeee '\u03C3\u03C4\u03B9\u03C2' p";
    }
    return str;
  }
};

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if ("function" === typeof closure_0[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
