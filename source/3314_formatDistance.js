// Module ID: 3314
// Function ID: 26094
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3314 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": null, "Bool(false)": null }, xSeconds: { "Bool(false)": null, "Bool(false)": null }, halfAMinute: "meio minuto", lessThanXMinutes: { "Bool(false)": null, "Bool(false)": null }, xMinutes: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: { "Bool(false)": "backgroundColorGradient", "Bool(false)": "MAX_FORUM_POST_TAGS" }, xHours: { "Bool(false)": "<string:1879048590>", "Bool(false)": "<string:989856496>" }, xDays: { "Bool(false)": "<string:1124204545>", "Bool(false)": null }, aboutXWeeks: { "Bool(false)": true, "Bool(false)": null }, xWeeks: {}, aboutXMonths: { "Bool(false)": 53302272, "Bool(false)": 21065216 }, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: { "Bool(false)": "backgroundColorGradient", "Bool(false)": "MAX_FORUM_POST_TAGS" }, almostXYears: { "Bool(false)": "<string:1124204545>", "Bool(false)": null } };

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
