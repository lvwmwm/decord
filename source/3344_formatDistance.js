// Module ID: 3344
// Function ID: 26167
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3344 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: true, 0: true }, xSeconds: { -9223372036854775808: 470106500, 0: -330235901 }, halfAMinute: "yar\u0131m dakika", lessThanXMinutes: { -9223372036854775808: "Text", 0: "ix" }, xMinutes: { -9223372036854775808: "isArray", 0: "message" }, aboutXHours: { -9223372036854775808: null, 0: null }, xHours: {}, xDays: { -9223372036854775808: true, 0: true }, aboutXWeeks: { -9223372036854775808: null, 0: null }, xWeeks: { -9223372036854775808: null, 0: null }, aboutXMonths: { -9223372036854775808: null, 0: null }, xMonths: {}, aboutXYears: {}, xYears: { -9223372036854775808: "<string:212533249>", 0: "<string:360513539>" }, overXYears: { -9223372036854775808: true, 0: true }, almostXYears: { -9223372036854775808: null, 0: null } };

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
