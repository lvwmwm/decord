// Module ID: 3204
// Function ID: 25806
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3204 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: null, ga: null }, xSeconds: {}, halfAMinute: "\u043F\u043E\u043B\u043E\u0432\u0438\u043D \u043C\u0438\u043D\u0443\u0442\u0430", lessThanXMinutes: { removeInternalFields: "<string:433651714>", ga: "<string:592510977>" }, xMinutes: { removeInternalFields: "\u043F\u0440\u0435\u0434\u0438 \u043E\u0431\u044F\u0434", ga: "\u0441\u043B\u0435\u0434 \u043E\u0431\u044F\u0434" }, aboutXHours: { removeInternalFields: false, ga: false }, xHours: { removeInternalFields: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029882463581984312, ga: 8110356130558730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, xDays: { removeInternalFields: null, ga: null }, aboutXWeeks: { removeInternalFields: null, ga: null }, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: { removeInternalFields: "sekunda", ga: "p\u0159ed sekundou" }, xYears: {}, overXYears: { removeInternalFields: null, ga: null }, almostXYears: { removeInternalFields: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033994239995612004, ga: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004201887916773911 } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `преди ${tmp}`;
        }
        text = `след ${tmp}`;
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
