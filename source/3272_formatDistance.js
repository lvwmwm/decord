// Module ID: 3272
// Function ID: 25981
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3272 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: true, 0: "<string:2186102282>" }, xSeconds: { -9223372036854775808: null, 0: null }, halfAMinute: "alcuni secondi", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: {}, xHours: { -9223372036854775808: "1\u79D2", 0: "{{count}}\u79D2" }, xDays: { -9223372036854775808: "1\u5206\u672A\u6E80", 0: "{{count}}\u5206\u672A\u6E80" }, aboutXWeeks: { -9223372036854775808: true, 0: true }, xWeeks: { -9223372036854775808: true, 0: true }, aboutXMonths: { -9223372036854775808: false, 0: false }, xMonths: { -9223372036854775808: false, 0: false }, aboutXYears: { -9223372036854775808: false, 0: false }, xYears: { -9223372036854775808: -0.0000000000000000019515696353574048, 0: 8597191776.001442 }, overXYears: { -9223372036854775808: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008238104809129949, 0: 8597190912.001442 }, almostXYears: { -9223372036854775808: null, 0: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} fa`;
        }
        text = `tra ${tmp}`;
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
