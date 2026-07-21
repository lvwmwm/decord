// Module ID: 3672
// Function ID: 27998
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3672 (formatDistance)
let closure_2 = { lessThanXSeconds: { -9223372036854775808: true, 0: true }, xSeconds: { -9223372036854775808: -359399421, 0: 1951793154 }, halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F", lessThanXMinutes: { -9223372036854775808: null, 0: null }, xMinutes: { -9223372036854775808: null, 0: null }, aboutXHours: {}, xHours: {}, xDays: { -9223372036854775808: true, 0: true }, aboutXWeeks: { -9223372036854775808: true, 0: true }, xWeeks: { -9223372036854775808: "isArray", 0: "__closure" }, aboutXMonths: { -9223372036854775808: "isArray", 0: "st" }, xMonths: { -9223372036854775808: null, 0: null }, aboutXYears: { -9223372036854775808: null, 0: null }, xYears: {}, overXYears: {}, almostXYears: { -9223372036854775808: null, 0: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_2[arg0]) {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} पहले`;
        }
        text = `${tmp}मे `;
      }
    }
    return tmp6;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    one = tmp.other.replace("{{count}}", require(dependencyMap[0]).numberToLocale(arg1));
    const str = tmp.other;
  }
};
export default exports.default;
