// Module ID: 3278
// Function ID: 26003
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3278 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Null": 1296171011, "Null": 1627390709, "Null": 1107297142, "Null": 193840 }, xSeconds: {}, halfAMinute: "30\u79D2", lessThanXMinutes: { "Null": "1\uC2DC\uAC04", "Null": "{{count}}\uC2DC\uAC04", "Null": "1\uC77C", "Null": "{{count}}\uC77C" }, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: { "Bool(false)": ":", "Bool(false)": "BUTTON_BORDER_WIDTH" }, almostXYears: {} };

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
