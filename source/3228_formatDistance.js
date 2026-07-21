// Module ID: 3228
// Function ID: 25867
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3228 (formatDistance)
let closure_0 = { lessThanXSeconds: { standalone: { -9223372036854775808: null, 0: null }, withPreposition: { -9223372036854775808: null, 0: null } }, xSeconds: { standalone: {}, withPreposition: {} }, halfAMinute: {}, lessThanXMinutes: { standalone: {}, withPreposition: {} }, xMinutes: { standalone: { -9223372036854775808: "Array", 0: "DfaKHr" }, withPreposition: { -9223372036854775808: "Array", 0: "DfaKHr" } }, aboutXHours: { standalone: { -9223372036854775808: null, 0: null }, withPreposition: { -9223372036854775808: null, 0: null } }, xHours: { standalone: {}, withPreposition: {} }, xDays: { standalone: { -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000169759663287, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014697128790550568 }, withPreposition: {} }, aboutXWeeks: { standalone: {}, withPreposition: {} }, xWeeks: { standalone: { -9223372036854775808: "<string:1935933442>", 0: "<string:308477954>" }, withPreposition: { -9223372036854775808: "<string:1935933442>", 0: "<string:308477954>" } }, aboutXMonths: { standalone: { -9223372036854775808: true, 0: true }, withPreposition: { -9223372036854775808: null, 0: null } }, xMonths: { standalone: {}, withPreposition: { -9223372036854775808: null, 0: null } }, aboutXYears: { standalone: { -9223372036854775808: null, 0: null }, withPreposition: {} }, xYears: { standalone: { -9223372036854775808: true, 0: true }, withPreposition: { -9223372036854775808: true, 0: true } }, overXYears: { standalone: { -9223372036854775808: 650117122, 0: 1930952706 }, withPreposition: { -9223372036854775808: null, 0: null } }, almostXYears: { standalone: {}, withPreposition: {} } };

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
