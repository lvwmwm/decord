// Module ID: 3228
// Function ID: 25867
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3228 (formatDistance)
let closure_0 = { lessThanXSeconds: { standalone: {}, withPreposition: {} }, xSeconds: { standalone: {}, withPreposition: {} }, halfAMinute: { isArray: true, scales: true }, lessThanXMinutes: { standalone: {}, withPreposition: {} }, xMinutes: { standalone: {}, withPreposition: {} }, aboutXHours: { standalone: {}, withPreposition: {} }, xHours: { standalone: {}, withPreposition: {} }, xDays: { standalone: {}, withPreposition: {} }, aboutXWeeks: { standalone: {}, withPreposition: {} }, xWeeks: { standalone: {}, withPreposition: {} }, aboutXMonths: { standalone: {}, withPreposition: {} }, xMonths: { standalone: {}, withPreposition: {} }, aboutXYears: { standalone: {}, withPreposition: {} }, xYears: { standalone: {}, withPreposition: {} }, overXYears: { standalone: {}, withPreposition: {} }, almostXYears: { standalone: {}, withPreposition: {} } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (null != addSuffix) {
    if (addSuffix.addSuffix) {
      let standalone = closure_0[arg0].withPreposition;
    }
    if ("string" === typeof standalone) {
      let tmp5 = standalone;
      if (null != addSuffix) {
        tmp5 = standalone;
        if (addSuffix.addSuffix) {
          if (!addSuffix.comparison) {
            let text = `vor ${standalone}`;
          }
          text = `in ${standalone}`;
        }
      }
      return tmp5;
    } else if (1 === arg1) {
      let one = standalone.one;
    } else {
      const _String = String;
      one = standalone.other.replace("{{count}}", String(arg1));
      const str2 = standalone.other;
    }
  }
  standalone = closure_0[arg0].standalone;
};
export default exports.default;
