// Module ID: 3344
// Function ID: 26172
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3344 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: {}, halfAMinute: "yar\u0131m dakika", lessThanXMinutes: {}, xMinutes: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: { "Bool(false)": "ge", "Bool(false)": "\u00D6\u00D6" }, xHours: { "Bool(false)": null, "Bool(false)": null }, xDays: {}, aboutXWeeks: { "Bool(false)": 1866989569, "Bool(false)": 1879048939 }, xWeeks: {}, aboutXMonths: { "Bool(false)": null, "Bool(false)": null }, xMonths: { "Bool(false)": null, "Bool(false)": null }, aboutXYears: {}, xYears: {}, overXYears: { "Bool(false)": true, "Bool(false)": true }, almostXYears: { "Bool(false)": true, "Bool(false)": true } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} önce`;
        }
        text = `${tmp} sonra`;
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
