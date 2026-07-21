// Module ID: 3338
// Function ID: 26158
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3338 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": null, "Bool(false)": null }, xSeconds: {}, halfAMinute: "\u0E04\u0E23\u0E36\u0E48\u0E07\u0E19\u0E32\u0E17\u0E35", lessThanXMinutes: {}, xMinutes: { "Bool(false)": 51243848, "Bool(false)": 51244288 }, aboutXHours: { "Bool(false)": null, "Bool(false)": null }, xHours: {}, xDays: { "Bool(false)": 234094595, "Bool(false)": -347602941 }, aboutXWeeks: { "Bool(false)": "a", "Bool(false)": "isArray" }, xWeeks: { "Bool(false)": null, "Bool(false)": null }, aboutXMonths: { "Bool(false)": null, "Bool(false)": null }, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

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
