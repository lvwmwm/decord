// Module ID: 3222
// Function ID: 25853
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3222 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: false, 0: false }, xSeconds: { -9223372036854775808: "<string:30168064>", 0: "<string:70027008>" }, halfAMinute: "\u00E9t halvt minut", lessThanXMinutes: { -9223372036854775808: null, 0: null }, xMinutes: { -9223372036854775808: "<string:38447616>", 0: "<string:35149312>" }, aboutXHours: { -9223372036854775808: null, 0: null }, xHours: {}, xDays: {}, aboutXWeeks: { -9223372036854775808: false, 0: false }, xWeeks: { -9223372036854775808: "<string:30168064>", 0: "<string:70027008>" }, aboutXMonths: { -9223372036854775808: null, 0: null }, xMonths: {}, aboutXYears: { -9223372036854775808: "r", 0: "isArray" }, xYears: { -9223372036854775808: false, 0: false }, overXYears: { -9223372036854775808: "%TypeErrorPrototype%", 0: "searchable" }, almostXYears: { -9223372036854775808: "<string:1827405825>", 0: "<string:1293025282>" } };

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
