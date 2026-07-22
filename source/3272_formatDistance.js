// Module ID: 3272
// Function ID: 25986
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3272 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { removeInternalFields: 58085376, ga: 49620736 }, halfAMinute: "alcuni secondi", lessThanXMinutes: { removeInternalFields: null, ga: null }, xMinutes: { removeInternalFields: null, ga: null }, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: { removeInternalFields: 58080256, ga: 49613568 }, aboutXMonths: { removeInternalFields: null, ga: null }, xMonths: { removeInternalFields: null, ga: null }, aboutXYears: { removeInternalFields: null, ga: null }, xYears: { removeInternalFields: null, ga: null }, overXYears: { removeInternalFields: null, ga: null }, almostXYears: { removeInternalFields: null, ga: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} fa`;
        }
        text = `tra ${tmp}`;
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
