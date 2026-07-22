// Module ID: 3254
// Function ID: 25940
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3254 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { removeInternalFields: "properties", ga: "AM" }, halfAMinute: "30 secondes", lessThanXMinutes: { removeInternalFields: false, ga: false }, xMinutes: {}, aboutXHours: { removeInternalFields: null, ga: null }, xHours: {}, xDays: { removeInternalFields: null, ga: null }, aboutXWeeks: { removeInternalFields: null, ga: null }, xWeeks: {}, aboutXMonths: { removeInternalFields: "AM", ga: "PM" }, xMonths: {}, aboutXYears: { removeInternalFields: "<string:1107297020>", ga: "<string:3422552358>" }, xYears: { removeInternalFields: 102318592, ga: -1333264383 }, overXYears: { removeInternalFields: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042707754818544935, ga: null }, almostXYears: { removeInternalFields: null, ga: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `il y a ${tmp}`;
        }
        text = `dans ${tmp}`;
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
