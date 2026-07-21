// Module ID: 3284
// Function ID: 26012
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3284 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: true, 0: null }, xSeconds: { -9223372036854775808: null, 0: null }, halfAMinute: "30\uCD08", lessThanXMinutes: {}, xMinutes: { -9223372036854775808: "sekund\u0117_sekund\u017Ei\u0173_sekundes", 0: "minut\u0117_minut\u0117s_minut\u0119" }, aboutXHours: {}, xHours: { -9223372036854775808: "<string:3945463811>", 0: "<string:1293287426>" }, xDays: { -9223372036854775808: "<string:1327431683>", 0: "<string:1190395907>" }, aboutXWeeks: { -9223372036854775808: null, 0: null }, xWeeks: {}, aboutXMonths: { -9223372036854775808: false, 0: false }, xMonths: { -9223372036854775808: true, 0: true }, aboutXYears: { -9223372036854775808: null, 0: null }, xYears: {}, overXYears: { -9223372036854775808: "<string:4019668365>", 0: "<string:4157603842>" }, almostXYears: { -9223372036854775808: 49312256, 0: 35111168 } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} 전`;
        }
        text = `${tmp} 후`;
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
