// Module ID: 3262
// Function ID: 25957
// Name: lastWeek
// Dependencies: []
// Exports: default

// Module 3262 (lastWeek)
const obj = {
  areIntervalsOverlapping: " h\u00E9ttel ezel\u0151tt",
  clamp: " h\u00E9t m\u00FAlva",
  closestIndexTo: " hete",
  closestTo: " h\u00F3nappal ezel\u0151tt",
  compareAsc: " h\u00F3nap m\u00FAlva",
  compareDesc: " h\u00F3napja",
  lastWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (0 === uTCDay) {
      return "'pro\u0161lu nedjelju u' p";
    } else if (3 === uTCDay) {
      return "'pro\u0161lu srijedu u' p";
    } else if (6 === uTCDay) {
      return "'pro\u0161lu subotu u' p";
    } else {
      return "'pro\u0161li' EEEE 'u' p";
    }
  },
  nextWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (0 === uTCDay) {
      return "'idu\u0107u nedjelju u' p";
    } else if (3 === uTCDay) {
      return "'idu\u0107u srijedu u' p";
    } else if (6 === uTCDay) {
      return "'idu\u0107u subotu u' p";
    } else {
      return "'pro\u0161li' EEEE 'u' p";
    }
  }
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
