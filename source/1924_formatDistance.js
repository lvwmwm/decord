// Module ID: 1924
// Function ID: 21780
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 1924 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: false, ga: false }, xSeconds: {}, halfAMinute: "half a minute", lessThanXMinutes: { removeInternalFields: null, ga: null }, xMinutes: {}, aboutXHours: { removeInternalFields: null, ga: null }, xHours: {}, xDays: { removeInternalFields: 1107296560, ga: 75739 }, aboutXWeeks: { removeInternalFields: null, ga: null }, xWeeks: { removeInternalFields: "in the morning", ga: "in the afternoon" }, aboutXMonths: { removeInternalFields: "ur", ga: "PUSH_TO_TALK_PIP_PHYSICS" }, xMonths: { removeInternalFields: "y", ga: "SETTINGS_PREMIUM_MANAGE_PLAN" }, aboutXYears: {}, xYears: {}, overXYears: { removeInternalFields: null, ga: null }, almostXYears: { removeInternalFields: "<string:1598226688>", ga: "<string:1577058903>" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} ago`;
        }
        text = `in ${tmp}`;
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
