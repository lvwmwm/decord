// Module ID: 3672
// Function ID: 28003
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3672 (formatDistance)
let closure_2 = { lessThanXSeconds: { removeInternalFields: 50608896, ga: 35606784 }, xSeconds: { removeInternalFields: null, ga: null }, halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: {}, xHours: { removeInternalFields: "<string:3942907907>", ga: "<string:1959133186>" }, xDays: { removeInternalFields: -352059389, ga: -1992228862 }, aboutXWeeks: { removeInternalFields: "y", ga: "ET" }, xWeeks: { removeInternalFields: "{0} \u0438 {1}", ga: "{0}, {1}" }, aboutXMonths: { removeInternalFields: null, ga: null }, xMonths: { removeInternalFields: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001016458938113783, ga: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000480638983915469 }, aboutXYears: {}, xYears: { removeInternalFields: "isArray", ga: "options" }, overXYears: { removeInternalFields: null, ga: null }, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_2[arg0]) {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} पहले`;
        }
        text = `${tmp}मे `;
      }
    }
    return tmp6;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    one = tmp.other.replace("{{count}}", require(dependencyMap[0]).numberToLocale(arg1));
    const str = tmp.other;
  }
};
export default exports.default;
