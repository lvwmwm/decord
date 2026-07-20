// Module ID: 3344
// Function ID: 26167
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3344 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: {}, halfAMinute: "yar\u0131m dakika", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

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
