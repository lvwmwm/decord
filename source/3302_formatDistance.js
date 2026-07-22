// Module ID: 3302
// Function ID: 26064
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3302 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: false, ga: false }, xSeconds: { removeInternalFields: null, ga: null }, halfAMinute: "et halvt minutt", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: { removeInternalFields: "Array", ga: "ensureValidMode" }, xHours: { removeInternalFields: 1006043139, ga: null }, xDays: { removeInternalFields: null, ga: null }, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: { removeInternalFields: 543621123, ga: 1107361795 }, xMonths: { removeInternalFields: "mniej ni\u017C {{count}} sekundy", ga: "mniej ni\u017C {{count}} sekund" }, aboutXYears: { removeInternalFields: "mniej ni\u017C sekunda", ga: "mniej ni\u017C sekund\u0119" }, xYears: { removeInternalFields: "a", ga: "isArray" }, overXYears: {}, almostXYears: {} };

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
