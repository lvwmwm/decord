// Module ID: 3254
// Function ID: 25935
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3254 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { -9223372036854775808: "Array", 0: "setOpacityTo" }, halfAMinute: "30 secondes", lessThanXMinutes: { -9223372036854775808: true, 0: true }, xMinutes: { -9223372036854775808: null, 0: null }, aboutXHours: { -9223372036854775808: true, 0: true }, xHours: { -9223372036854775808: 19323648, 0: 22298368 }, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: { -9223372036854775808: "press", 0: "reply_button" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `il y a ${tmp}`;
        }
        text = `dans ${tmp}`;
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
