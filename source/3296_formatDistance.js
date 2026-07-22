// Module ID: 3296
// Function ID: 26050
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3296 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: true, ga: true }, xSeconds: { removeInternalFields: "<string:3520004098>", ga: "<string:4289658881>" }, halfAMinute: "een halve minuut", lessThanXMinutes: {}, xMinutes: { removeInternalFields: null, ga: null }, aboutXHours: { removeInternalFields: null, ga: null }, xHours: { removeInternalFields: null, ga: null }, xDays: { removeInternalFields: null, ga: null }, aboutXWeeks: { removeInternalFields: null, ga: null }, xWeeks: { removeInternalFields: null, ga: null }, aboutXMonths: { removeInternalFields: null, ga: null }, xMonths: { removeInternalFields: null, ga: null }, aboutXYears: { removeInternalFields: null, ga: null }, xYears: { removeInternalFields: null, ga: null }, overXYears: { removeInternalFields: null, ga: null }, almostXYears: { removeInternalFields: null, ga: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} geleden`;
        }
        text = `over ${tmp}`;
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
