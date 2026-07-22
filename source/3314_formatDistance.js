// Module ID: 3314
// Function ID: 26094
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3314 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { removeInternalFields: null, ga: null }, halfAMinute: "meio minuto", lessThanXMinutes: { removeInternalFields: -1275067820, ga: 1375732356 }, xMinutes: { removeInternalFields: null, ga: null }, aboutXHours: { removeInternalFields: false, ga: false }, xHours: {}, xDays: { removeInternalFields: false, ga: false }, aboutXWeeks: {}, xWeeks: { removeInternalFields: "user_profile_avatar", ga: "action-sheet" }, aboutXMonths: { removeInternalFields: "AM", ga: "PM" }, xMonths: {}, aboutXYears: { removeInternalFields: true, ga: true }, xYears: { removeInternalFields: "<string:3678928898>", ga: "<string:201326887>" }, overXYears: { removeInternalFields: "<string:2632581121>", ga: "<string:4135911426>" }, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `há ${tmp}`;
        }
        text = `em ${tmp}`;
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
