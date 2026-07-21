// Module ID: 3660
// Function ID: 27969
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3660 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: "\u5C11\u65BC 1 \u5206\u9418", 0: "\u5C11\u65BC {{count}} \u5206\u9418" }, xSeconds: { -9223372036854775808: "1 \u5206\u9418", 0: "{{count}} \u5206\u9418" }, halfAMinute: "\u534A\u5206\u949F", lessThanXMinutes: { -9223372036854775808: "1 \u5C0F\u6642", 0: "{{count}} \u5C0F\u6642" }, xMinutes: { -9223372036854775808: "\u5927\u7D04 1 \u5C0F\u6642", 0: "\u5927\u7D04 {{count}} \u5C0F\u6642" }, xHours: { -9223372036854775808: "\u5927\u7D04 1 \u500B\u661F\u671F", 0: "\u5927\u7D04 {{count}} \u500B\u661F\u671F" }, aboutXHours: { -9223372036854775808: "1 \u500B\u661F\u671F", 0: "{{count}} \u500B\u661F\u671F" }, xDays: { -9223372036854775808: "\u5927\u7D04 1 \u500B\u6708", 0: "\u5927\u7D04 {{count}} \u500B\u6708" }, aboutXWeeks: { -9223372036854775808: "1 \u500B\u6708", 0: "{{count}} \u500B\u6708" }, xWeeks: { -9223372036854775808: "\u5927\u7D04 1 \u5E74", 0: "\u5927\u7D04 {{count}} \u5E74" }, aboutXMonths: { -9223372036854775808: "\u8D85\u904E 1 \u5E74", 0: "\u8D85\u904E {{count}} \u5E74" }, xMonths: { -9223372036854775808: "\u5C07\u8FD1 1 \u5E74", 0: "\u5C07\u8FD1 {{count}} \u5E74" }, aboutXYears: { -9223372036854775808: 18, 0: "center" }, xYears: {}, overXYears: { -9223372036854775808: null, 0: null }, almostXYears: { -9223372036854775808: null, 0: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp}前`;
        }
        text = `${tmp}内`;
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
