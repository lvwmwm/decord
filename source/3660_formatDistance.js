// Module ID: 3660
// Function ID: 27974
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3660 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { "Bool(false)": "adding", "Bool(false)": "AccountAgeTier6LargeBadge" }, halfAMinute: "\u534A\u5206\u949F", lessThanXMinutes: { "Bool(false)": 51457024, "Bool(false)": 66498048 }, xMinutes: { "Bool(false)": null, "Bool(false)": null }, xHours: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: { "Bool(false)": null, "Bool(false)": null }, xDays: { "Bool(false)": null, "Bool(false)": null }, aboutXWeeks: { "Bool(false)": null, "Bool(false)": null }, xWeeks: { "Bool(false)": null, "Bool(false)": null }, aboutXMonths: { "Bool(false)": null, "Bool(false)": null }, xMonths: { "Bool(false)": null, "Bool(false)": null }, aboutXYears: { "Bool(false)": null, "Bool(false)": null }, xYears: { "Bool(false)": null, "Bool(false)": null }, overXYears: { "Bool(false)": null, "Bool(false)": null }, almostXYears: { "Bool(false)": null, "Bool(false)": null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp}前`;
        }
        text = `${tmp}内`;
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
