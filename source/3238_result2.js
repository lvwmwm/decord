// Module ID: 3238
// Function ID: 25894
// Name: result2
// Dependencies: []
// Exports: default

// Module 3238 (result2)
const obj = {
  lastWeek(getUTCDay) {
    let str = "'\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7' eeee '\u03C3\u03C4\u03B9\u03C2' p";
    if (6 === getUTCDay.getUTCDay()) {
      str = "'\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF' eeee '\u03C3\u03C4\u03B9\u03C2' p";
    }
    return str;
  },
  yesterday: "'\u03C7\u03B8\u03B5\u03C2 \u03C3\u03C4\u03B9\u03C2' p",
  today: "'\u03C3\u03AE\u03BC\u03B5\u03C1\u03B1 \u03C3\u03C4\u03B9\u03C2' p",
  tomorrow: "'\u03B1\u03CD\u03C1\u03B9\u03BF \u03C3\u03C4\u03B9\u03C2' p",
  nextWeek: "eeee '\u03C3\u03C4\u03B9\u03C2' p",
  other: "P"
};

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
