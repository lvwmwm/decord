// Module ID: 3204
// Function ID: 25801
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3204 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { -9223372036854775808: "m\u00E9n\u011B ne\u017E {{count}} sekundy", 0: "p\u0159ed m\u00E9n\u011B ne\u017E {{count}} sekundami" }, halfAMinute: "\u043F\u043E\u043B\u043E\u0432\u0438\u043D \u043C\u0438\u043D\u0443\u0442\u0430", lessThanXMinutes: { -9223372036854775808: "a", 0: "shi-Latn" }, xMinutes: {}, aboutXHours: { -9223372036854775808: 1325072385, 0: -2064318461 }, xHours: { -9223372036854775808: null, 0: null }, xDays: { -9223372036854775808: "a", 0: "isArray" }, aboutXWeeks: { -9223372036854775808: "<string:1762983937>", 0: "<string:2458714115>" }, xWeeks: { -9223372036854775808: null, 0: null }, aboutXMonths: { -9223372036854775808: null, 0: null }, xMonths: { -9223372036854775808: null, 0: null }, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: { -9223372036854775808: "minuta", 0: "p\u0159ed minutou" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `преди ${tmp}`;
        }
        text = `след ${tmp}`;
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
