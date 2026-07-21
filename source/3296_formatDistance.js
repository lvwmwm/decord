// Module ID: 3296
// Function ID: 26050
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3296 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": "center", "Bool(false)": "center" }, xSeconds: {}, halfAMinute: "een halve minuut", lessThanXMinutes: { "Bool(false)": null, "Bool(false)": null }, xMinutes: {}, aboutXHours: { "Bool(false)": 1257766913, "Bool(false)": -1388183550 }, xHours: { "Bool(false)": false, "Bool(false)": false }, xDays: { "Bool(false)": false, "Bool(false)": false }, aboutXWeeks: { "Bool(false)": false, "Bool(false)": false }, xWeeks: { "Bool(false)": false, "Bool(false)": false }, aboutXMonths: { "Bool(false)": 48431106, "Bool(false)": -113115134 }, xMonths: { "Bool(false)": -1662124030, "Bool(false)": -1052639230 }, aboutXYears: { "Bool(false)": "<string:3943301121>", "Bool(false)": "<string:3510763522>" }, xYears: { "Bool(false)": "r", "Bool(false)": "_key" }, overXYears: { "Bool(false)": "r", "Bool(false)": "ke" }, almostXYears: { "Bool(false)": 1040188244, "Bool(false)": 1107297116 } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} geleden`;
        }
        text = `over ${tmp}`;
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
