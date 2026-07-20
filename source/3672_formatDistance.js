// Module ID: 3672
// Function ID: 27998
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3672 (formatDistance)
let closure_2 = { lessThanXSeconds: {}, xSeconds: {}, halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: {}, xHours: {}, xDays: {}, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

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
