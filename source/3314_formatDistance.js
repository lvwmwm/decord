// Module ID: 3314
// Function ID: 26089
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3314 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: false, 0: false }, xSeconds: {}, halfAMinute: "meio minuto", lessThanXMinutes: { -9223372036854775808: true, 0: true }, xMinutes: { -9223372036854775808: true, 0: true }, aboutXHours: { -9223372036854775808: false, 0: false }, xHours: { -9223372036854775808: "medianoche", 0: "mediodia" }, xDays: {}, aboutXWeeks: { -9223372036854775808: "AM", 0: "PM" }, xWeeks: { -9223372036854775808: false, 0: false }, aboutXMonths: {}, xMonths: { -9223372036854775808: false, 0: false }, aboutXYears: { -9223372036854775808: "<string:893911042>", 0: "<string:3288334632>" }, xYears: { -9223372036854775808: "<string:2629304321>", 0: "<string:4153933826>" }, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `há ${tmp}`;
        }
        text = `em ${tmp}`;
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
