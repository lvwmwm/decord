// Module ID: 3278
// Function ID: 25998
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3278 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(true)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015375998172564161, "Bool(true)": -18361719736106497000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027537015456069795, "Bool(true)": -0.0000000000000000000000000000000000000000000000000000000000000000000000011328069926270652 }, xSeconds: {}, halfAMinute: "30\u79D2", lessThanXMinutes: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null }, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  if ("string" === typeof closure_0[arg0]) {
    if (!obj.addSuffix) {
      return tmp2;
    } else {
      if (!obj.comparison) {
        let text = `${tmp}前`;
      }
      text = `${tmp}後`;
    }
  } else {
    if (1 !== arg1) {
      if (obj.addSuffix) {
        if (tmp.otherWithSuffix) {
          const _String2 = String;
          let replaced = tmp.otherWithSuffix.replace("{{count}}", String(arg1));
          const str3 = tmp.otherWithSuffix;
        }
      }
      const _String = String;
      replaced = tmp.other.replace("{{count}}", String(arg1));
      const str = tmp.other;
    }
    if (!obj.addSuffix) {
      const one = tmp.one;
    }
    const oneWithSuffix = tmp.oneWithSuffix;
  }
};
export default exports.default;
