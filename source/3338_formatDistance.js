// Module ID: 3338
// Function ID: 26153
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3338 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: {}, halfAMinute: "\u0E04\u0E23\u0E36\u0E48\u0E07\u0E19\u0E32\u0E17\u0E35", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          const text = `${tmp}ที่ผ่านมา`;
        }
        if ("halfAMinute" === arg0) {
          let text1 = `ใน${tmp}`;
        } else {
          text1 = `ใน ${tmp}`;
        }
      }
    }
    return tmp5;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    const _String = String;
    one = tmp.other.replace("{{count}}", String(arg1));
    const str = tmp.other;
  }
};
export default exports.default;
