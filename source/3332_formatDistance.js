// Module ID: 3332
// Function ID: 26139
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3332 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: {}, halfAMinute: "en halv minut", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };
let closure_1 = [];

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp8 = tmp;
    if (null != addSuffix) {
      tmp8 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} sedan`;
        }
        text = `om ${tmp}`;
      }
    }
    return tmp8;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    if (addSuffix) {
      if (addSuffix.onlyNumeric) {
        const _String2 = String;
        one = tmp.other.replace("{{count}}", String(arg1));
        const str3 = tmp.other;
      }
    }
    if (arg1 < 13) {
      let StringResult = closure_1[arg1];
    } else {
      const _String = String;
      StringResult = String(arg1);
    }
    one = tmp.other.replace("{{count}}", StringResult);
    const str = tmp.other;
  }
};
export default exports.default;
