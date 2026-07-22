// Module ID: 3344
// Function ID: 26172
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3344 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { removeInternalFields: null, ga: null }, halfAMinute: "yar\u0131m dakika", lessThanXMinutes: { removeInternalFields: "ge", ga: "\u00D6\u00D6" }, xMinutes: {}, aboutXHours: { removeInternalFields: true, ga: true }, xHours: { removeInternalFields: "<string:1207960240>", ga: "\u00D6.\u00D6." }, xDays: { removeInternalFields: -1392508181, ga: 469762828 }, aboutXWeeks: { removeInternalFields: null, ga: null }, xWeeks: { removeInternalFields: null, ga: null }, aboutXMonths: {}, xMonths: {}, aboutXYears: { removeInternalFields: 219873282, ga: 367853571 }, xYears: { removeInternalFields: true, ga: true }, overXYears: { removeInternalFields: null, ga: null }, almostXYears: { removeInternalFields: null, ga: null } };

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
