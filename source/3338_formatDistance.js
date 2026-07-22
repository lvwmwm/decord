// Module ID: 3338
// Function ID: 26158
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3338 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: null, ga: null }, xSeconds: {}, halfAMinute: "\u0E04\u0E23\u0E36\u0E48\u0E07\u0E19\u0E32\u0E17\u0E35", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: { removeInternalFields: null, ga: null }, xHours: { removeInternalFields: null, ga: null }, xDays: {}, aboutXWeeks: { removeInternalFields: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", ga: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07" }, xWeeks: { removeInternalFields: 234356739, ga: -703004669 }, aboutXMonths: { removeInternalFields: "z7y34b", ga: "accessibleDismissStyle" }, xMonths: { removeInternalFields: null, ga: null }, aboutXYears: {}, xYears: { removeInternalFields: null, ga: null }, overXYears: {}, almostXYears: {} };

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
