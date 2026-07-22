// Module ID: 3262
// Function ID: 25957
// Name: lastWeek
// Dependencies: []
// Exports: default

// Module 3262 (lastWeek)
const obj = {
  "Bool(false)": "children",
  "Bool(false)": "Path",
  "Bool(false)": "r",
  "Bool(false)": "isArray",
  "Bool(false)": "id",
  "Bool(false)": "Path",
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
