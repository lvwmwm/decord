// Module ID: 3672
// Function ID: 28003
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3672 (formatDistance)
let closure_2 = { lessThanXSeconds: { "Bool(false)": null, "Bool(false)": null }, xSeconds: {}, halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F", lessThanXMinutes: { "Bool(false)": null, "Bool(false)": null }, xMinutes: { "Bool(false)": 205283989712646950000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -0.000000015832525233992072 }, aboutXHours: { "Bool(false)": -352714749, "Bool(false)": -1101987838 }, xHours: { "Bool(false)": null, "Bool(false)": "nowrap" }, xDays: { "Bool(false)": -2086849481792034300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -120145915068184660000000000000000000000000000000000000000000000000000000000 }, aboutXWeeks: { "Bool(false)": "isArray", "Bool(false)": "warn" }, xWeeks: { "Bool(false)": "flex-end", "Bool(false)": "<string:3175400017>" }, aboutXMonths: { "Bool(false)": 212615549115776540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -120145915068184700000000000000000000000000000000000000000000000000000000000 }, xMonths: { "Bool(false)": -352714749, "Bool(false)": -816775166 }, aboutXYears: { "Bool(false)": "<string:4198810193>", "Bool(false)": "<string:4194304746>" }, xYears: { "Bool(false)": 1958477826, "Bool(false)": -352714749 }, overXYears: { "Bool(false)": "isArray", "Bool(false)": "constructor" }, almostXYears: { "Bool(false)": "<string:4198810193>", "Bool(false)": "<string:4194304746>" } };

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
