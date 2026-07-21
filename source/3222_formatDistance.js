// Module ID: 3222
// Function ID: 25858
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3222 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": true, "Bool(false)": true }, xSeconds: { "Bool(false)": "isArray", "Bool(false)": "__d" }, halfAMinute: "\u00E9t halvt minut", lessThanXMinutes: { "Bool(false)": 35176960, "Bool(false)": 35178496 }, xMinutes: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: { "Bool(false)": 8, "Bool(false)": 32 }, xHours: {}, xDays: { "Bool(false)": 1268697785591056000000000000000, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025330688161739 }, aboutXWeeks: { "Bool(false)": "midnat", "Bool(false)": "middag" }, xWeeks: { "Bool(false)": "<string:3436183554>", "Bool(false)": "<string:3436249089>" }, aboutXMonths: { "Bool(false)": "<string:70058240>", "Bool(false)": "<string:287265280>" }, xMonths: { "Bool(false)": true, "Bool(false)": null }, aboutXYears: { "Bool(false)": "onFocusCapture", "Bool(false)": "INTERACTIONS" }, xYears: {}, overXYears: {}, almostXYears: { "Bool(false)": "<string:3472884034>", "Bool(false)": "<string:1275068876>" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} siden`;
        }
        text = `om ${tmp}`;
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
