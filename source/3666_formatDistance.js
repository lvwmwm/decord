// Module ID: 3666
// Function ID: 27989
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3666 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: "isArray", ga: "set" }, xSeconds: { removeInternalFields: 4276118728011120000000000000000000000000000000000000000000000000000000000000000000000000000000000, ga: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000410761638322063 }, halfAMinute: "\u534A\u5206\u9418", lessThanXMinutes: { removeInternalFields: null, ga: null }, xMinutes: {}, xHours: {}, aboutXHours: { removeInternalFields: "y", ga: "Array" }, xDays: { removeInternalFields: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000410729808385134, ga: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019660863066854414 }, aboutXWeeks: { removeInternalFields: "a", ga: "captureUri" }, xWeeks: { removeInternalFields: "<string:62868736>", ga: "<string:62868480>" }, aboutXMonths: { removeInternalFields: null, ga: null }, xMonths: {}, aboutXYears: { removeInternalFields: "Array", ga: "useAnimatedScrollHandler" }, xYears: { removeInternalFields: true, ga: true }, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp}前`;
        }
        text = `${tmp}內`;
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
