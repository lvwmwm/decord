// Module ID: 3242
// Function ID: 25899
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3242 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: true, 0: true }, xSeconds: {}, halfAMinute: "medio minuto", lessThanXMinutes: { -9223372036854775808: null, 0: null }, xMinutes: { -9223372036854775808: true, 0: true }, aboutXHours: {}, xHours: { -9223372036854775808: "medianoche", 0: "mediodia" }, xDays: { -9223372036854775808: null, 0: null }, aboutXWeeks: { -9223372036854775808: "r", 0: "PREMIUM_MARKETING_MOMENT_ACTION_SHEET" }, xWeeks: { -9223372036854775808: false, 0: false }, aboutXMonths: { -9223372036854775808: null, 0: null }, xMonths: {}, aboutXYears: { -9223372036854775808: "<string:2555510785>", 0: "<string:56870673>" }, xYears: { -9223372036854775808: null, 0: null }, overXYears: { -9223372036854775808: null, 0: null }, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `hace ${tmp}`;
        }
        text = `en ${tmp}`;
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
