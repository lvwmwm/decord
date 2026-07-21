// Module ID: 3320
// Function ID: 26109
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3320 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { "Bool(false)": "<string:939524418>", "Bool(false)": "<string:687866636>" }, halfAMinute: "jum\u0103tate de minut", lessThanXMinutes: { "Bool(false)": true, "Bool(false)": true }, xMinutes: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: {}, xHours: { "Bool(false)": "amiaz\u0103", "Bool(false)": "diminea\u021B\u0103" }, xDays: { "Bool(false)": false, "Bool(false)": false }, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: { "Bool(false)": false, "Bool(false)": false }, aboutXYears: { "Bool(false)": 1358954496, "Bool(false)": -1508555582 }, xYears: { "Bool(false)": null, "Bool(false)": null }, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} în urmă`;
        }
        text = `în ${tmp}`;
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
