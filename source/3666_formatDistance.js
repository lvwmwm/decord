// Module ID: 3666
// Function ID: 27989
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3666 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": true, "Bool(false)": true }, xSeconds: { "Bool(false)": "adding", "Bool(false)": "AccountAgeTier6LargeBadge" }, halfAMinute: "\u534A\u5206\u9418", lessThanXMinutes: { "Bool(false)": 1978990595, "Bool(false)": -12451837 }, xMinutes: { "Bool(false)": 1979056131, "Bool(false)": -1522401277 }, xHours: { "Bool(false)": false, "Bool(false)": false }, aboutXHours: { "Bool(false)": false, "Bool(false)": false }, xDays: { "Bool(false)": null, "Bool(false)": null }, aboutXWeeks: { "Bool(false)": false, "Bool(false)": false }, xWeeks: { "Bool(false)": null, "Bool(false)": null }, aboutXMonths: { "Bool(false)": null, "Bool(false)": null }, xMonths: {}, aboutXYears: {}, xYears: { "Bool(false)": null, "Bool(false)": null }, overXYears: { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004247010784068177, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000527719133354038 }, almostXYears: { "Bool(false)": "a", "Bool(false)": "getAnswer" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp}前`;
        }
        text = `${tmp}內`;
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
