// Module ID: 3654
// Function ID: 27960
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3654 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": true, "Bool(false)": true }, xSeconds: { "Bool(false)": 0.000000000000000000000000000000000000009918250423480728, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009136616133521058 }, halfAMinute: "n\u1EEDa ph\u00FAt", lessThanXMinutes: { "Bool(false)": null, "Bool(false)": null }, xMinutes: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: { "Bool(false)": null, "Bool(false)": null }, xHours: { "Bool(false)": null, "Bool(false)": null }, xDays: { "Bool(false)": null, "Bool(false)": null }, aboutXWeeks: { "Bool(false)": null, "Bool(false)": null }, xWeeks: { "Bool(false)": null, "Bool(false)": null }, aboutXMonths: { "Bool(false)": null, "Bool(false)": null }, xMonths: { "Bool(false)": null, "Bool(false)": null }, aboutXYears: { "Bool(false)": null, "Bool(false)": null }, xYears: { "Bool(false)": null, "Bool(false)": null }, overXYears: { "Bool(false)": null, "Bool(false)": null }, almostXYears: { "Bool(false)": null, "Bool(false)": null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} trước`;
        }
        text = `${tmp} nữa`;
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
