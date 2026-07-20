// Module ID: 3234
// Function ID: 25881
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3234 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: {}, halfAMinute: "\u03BC\u03B9\u03C3\u03CC \u03BB\u03B5\u03C0\u03C4\u03CC", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} πριν`;
        }
        text = `σε ${tmp}`;
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
