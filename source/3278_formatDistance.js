// Module ID: 3278
// Function ID: 26003
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3278 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { removeInternalFields: -536870035, ga: 2030044010 }, halfAMinute: "30\u79D2", lessThanXMinutes: {}, xMinutes: { removeInternalFields: null, ga: null }, aboutXHours: {}, xHours: { removeInternalFields: "1\uCD08 \uBBF8\uB9CC", ga: "{{count}}\uCD08 \uBBF8\uB9CC" }, xDays: { removeInternalFields: "1\uCD08", ga: "{{count}}\uCD08" }, aboutXWeeks: { removeInternalFields: "1\uBD84 \uBBF8\uB9CC", ga: "{{count}}\uBD84 \uBBF8\uB9CC" }, xWeeks: { removeInternalFields: "1\uBD84", ga: "{{count}}\uBD84" }, aboutXMonths: { removeInternalFields: "\uC57D 1\uC2DC\uAC04", ga: "\uC57D {{count}}\uC2DC\uAC04" }, xMonths: { removeInternalFields: "1\uC2DC\uAC04", ga: "{{count}}\uC2DC\uAC04" }, aboutXYears: { removeInternalFields: "1\uC77C", ga: "{{count}}\uC77C" }, xYears: { removeInternalFields: "\uC57D 1\uC8FC", ga: "\uC57D {{count}}\uC8FC" }, overXYears: { removeInternalFields: "1\uC8FC", ga: "{{count}}\uC8FC" }, almostXYears: { removeInternalFields: "\uC57D 1\uAC1C\uC6D4", ga: "\uC57D {{count}}\uAC1C\uC6D4" } };

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
