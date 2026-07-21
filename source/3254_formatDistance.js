// Module ID: 3254
// Function ID: 25940
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3254 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": true, "Bool(false)": true }, xSeconds: { "Bool(false)": null, "Bool(false)": null }, halfAMinute: "30 secondes", lessThanXMinutes: { "Bool(false)": 32786432, "Bool(false)": 25564160 }, xMinutes: {}, aboutXHours: {}, xHours: { "Bool(false)": null, "Bool(false)": null }, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: { "Bool(false)": "manje od {{count}} sekunde", "Bool(false)": "manje od {{count}} sekundi" }, xMonths: { "Bool(false)": "manje od 1 sekunde", "Bool(false)": "manje od 1 sekunde" }, aboutXYears: { "Bool(false)": true, "Bool(false)": true }, xYears: { "Bool(false)": "{{count}} sekunde", "Bool(false)": "{{count}} sekundi" }, overXYears: { "Bool(false)": "1 sekunda", "Bool(false)": "1 sekunde" }, almostXYears: { "Bool(false)": true, "Bool(false)": true } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `il y a ${tmp}`;
        }
        text = `dans ${tmp}`;
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
