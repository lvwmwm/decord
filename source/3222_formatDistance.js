// Module ID: 3222
// Function ID: 25858
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3222 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: "title", ga: "__closure" }, xSeconds: { removeInternalFields: "isArray", ga: "DARK" }, halfAMinute: "\u00E9t halvt minut", lessThanXMinutes: { removeInternalFields: null, ga: null }, xMinutes: { removeInternalFields: 35160320, ga: 35160832 }, aboutXHours: { removeInternalFields: null, ga: null }, xHours: { removeInternalFields: 6, ga: 8 }, xDays: { removeInternalFields: null, ga: null }, aboutXWeeks: { removeInternalFields: "constructor", ga: "Array" }, xWeeks: {}, aboutXMonths: { removeInternalFields: "<string:1728053504>", ga: "<string:1275068683>" }, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: { removeInternalFields: 257571525838954000000000000000, ga: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000253043754139228 }, almostXYears: { removeInternalFields: "midnat", ga: "middag" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} siden`;
        }
        text = `om ${tmp}`;
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
