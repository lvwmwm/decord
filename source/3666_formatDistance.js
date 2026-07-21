// Module ID: 3666
// Function ID: 27984
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3666 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: 423755779, 0: -1946156307 }, xSeconds: { -9223372036854775808: "1 \u5206\u9418", 0: "{{count}} \u5206\u9418" }, halfAMinute: "\u534A\u5206\u9418", lessThanXMinutes: { -9223372036854775808: 708968451, 0: -1728052280 }, xMinutes: { -9223372036854775808: 725745667, 0: -1711275064 }, xHours: { -9223372036854775808: -1740505085, 0: -1895824442 }, aboutXHours: { -9223372036854775808: -1723727869, 0: -1879047226 }, xDays: { -9223372036854775808: "\u5927\u7D04 1 \u500B\u6708", 0: "\u5927\u7D04 {{count}} \u500B\u6708" }, aboutXWeeks: { -9223372036854775808: 1061289987, 0: -318766147 }, xWeeks: { -9223372036854775808: "isArray", 0: "x" }, aboutXMonths: { -9223372036854775808: "isArray", 0: "x" }, xMonths: { -9223372036854775808: "isArray", 0: "set" }, aboutXYears: { -9223372036854775808: null, 0: null }, xYears: {}, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp}前`;
        }
        text = `${tmp}內`;
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
