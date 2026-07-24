// Module ID: 3318
// Function ID: 26103
// Name: result2
// Dependencies: []
// Exports: default

// Module 3318 (result2)
const obj = {
  lastWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (0 === uTCDay) {
      let str = "\u00FAltimo";
    } else {
      str = "\u00FAltima";
    }
    return "'" + str + "' eeee '\u00E0s' p";
  },
  yesterday: "'ontem \u00E0s' p",
  today: "'hoje \u00E0s' p",
  tomorrow: "'amanh\u00E3 \u00E0s' p",
  nextWeek: "eeee '\u00E0s' p",
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
