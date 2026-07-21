// Module ID: 3204
// Function ID: 25806
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3204 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: {}, halfAMinute: "\u043F\u043E\u043B\u043E\u0432\u0438\u043D \u043C\u0438\u043D\u0443\u0442\u0430", lessThanXMinutes: { "Bool(false)": "sekunda", "Bool(false)": "p\u0159ed sekundou" }, xMinutes: { "Bool(false)": true, "Bool(false)": true }, aboutXHours: { "Bool(false)": -654310551, "Bool(false)": 1124074130 }, xHours: { "Bool(false)": "Array", "Bool(false)": "roundingViewStyle" }, xDays: { "Bool(false)": true, "Bool(false)": true }, aboutXWeeks: { "Bool(false)": "a", "Bool(false)": "SELECTED_CHANNEL" }, xWeeks: { "Bool(false)": "a", "Bool(false)": "isArray" }, aboutXMonths: { "Bool(false)": null, "Bool(false)": null }, xMonths: { "Bool(false)": null, "Bool(false)": null }, aboutXYears: { "Bool(false)": null, "Bool(false)": null }, xYears: {}, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `преди ${tmp}`;
        }
        text = `след ${tmp}`;
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
