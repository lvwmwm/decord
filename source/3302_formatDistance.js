// Module ID: 3302
// Function ID: 26064
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3302 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": "%Reflect%", "Bool(false)": "STEALTH" }, xSeconds: { "Bool(false)": 1896611843, "Bool(false)": null }, halfAMinute: "et halvt minutt", lessThanXMinutes: { "Bool(false)": null, "Bool(false)": null }, xMinutes: {}, aboutXHours: {}, xHours: { "Bool(false)": null, "Bool(false)": null }, xDays: {}, aboutXWeeks: { "Bool(false)": "<string:2757623809>", "Bool(false)": "<string:3528196097>" }, xWeeks: {}, aboutXMonths: {}, xMonths: { "Bool(false)": null, "Bool(false)": "mniej ni\u017C {{count}} sekundy" }, aboutXYears: {}, xYears: {}, overXYears: { "Bool(false)": null, "Bool(false)": null }, almostXYears: {} };

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
