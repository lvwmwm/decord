// Module ID: 1924
// Function ID: 21780
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 1924 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": 28, "Bool(false)": null }, xSeconds: {}, halfAMinute: "half a minute", lessThanXMinutes: { "Bool(false)": true, "Bool(false)": true }, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: { "Bool(false)": 3, "Bool(false)": 1 }, xWeeks: { "Bool(false)": "a.m.", "Bool(false)": "p.m." }, aboutXMonths: { "Bool(false)": "midnight", "Bool(false)": "noon" }, xMonths: { "Bool(false)": true, "Bool(false)": true }, aboutXYears: { "Bool(false)": null, "Bool(false)": null }, xYears: {}, overXYears: { "Bool(false)": "center", "Bool(false)": null }, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} ago`;
        }
        text = `in ${tmp}`;
      }
    }
    return tmp4;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    one = tmp.other.replace("{{count}}", arg1.toString());
    const str = tmp.other;
  }
};
export default exports.default;
