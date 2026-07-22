// Module ID: 3654
// Function ID: 27960
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3654 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { removeInternalFields: false, ga: false }, halfAMinute: "n\u1EEDa ph\u00FAt", lessThanXMinutes: { removeInternalFields: "n\u1EEDa \u0111\u00EAm", ga: "tr\u01B0a" }, xMinutes: { removeInternalFields: false, ga: false }, aboutXHours: { removeInternalFields: "isArray", ga: "intl" }, xHours: { removeInternalFields: true, ga: true }, xDays: { removeInternalFields: false, ga: null }, aboutXWeeks: { removeInternalFields: null, ga: null }, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} trước`;
        }
        text = `${tmp} nữa`;
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
