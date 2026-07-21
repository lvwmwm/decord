// Module ID: 3320
// Function ID: 26104
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3320 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { -9223372036854775808: "0", 0: "AM" }, halfAMinute: "jum\u0103tate de minut", lessThanXMinutes: { -9223372036854775808: null, 0: null }, xMinutes: {}, aboutXHours: { -9223372036854775808: true, 0: true }, xHours: { -9223372036854775808: -994952638219622700000000000000000000000000000000000000000000000000000000000000000000000, 0: -297627945878512600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, xDays: { -9223372036854775808: null, 0: null }, aboutXWeeks: { -9223372036854775808: null, 0: null }, xWeeks: {}, aboutXMonths: { -9223372036854775808: "amiaz\u0103", 0: "diminea\u021B\u0103" }, xMonths: { -9223372036854775808: "<string:1544749059>", 0: "<string:2423259139>" }, aboutXYears: {}, xYears: { -9223372036854775808: 1967259651, 0: 1967259651 }, overXYears: { -9223372036854775808: null, 0: null }, almostXYears: { -9223372036854775808: null, 0: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} în urmă`;
        }
        text = `în ${tmp}`;
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
