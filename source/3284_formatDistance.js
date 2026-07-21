// Module ID: 3284
// Function ID: 26017
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3284 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": "<string:4155917729>", "Bool(false)": "<string:684479>" }, xSeconds: {}, halfAMinute: "30\uCD08", lessThanXMinutes: { "Bool(false)": true, "Bool(false)": null }, xMinutes: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: {}, xHours: { "Bool(false)": "sekund\u0117_sekund\u017Ei\u0173_sekundes", "Bool(false)": "minut\u0117_minut\u0117s_minut\u0119" }, xDays: {}, aboutXWeeks: { "Bool(false)": 19504523571382430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 338734219421451600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, xWeeks: { "Bool(false)": "<string:1334116355>", "Bool(false)": "<string:1197080579>" }, aboutXMonths: { "Bool(false)": null, "Bool(false)": null }, xMonths: {}, aboutXYears: { "Bool(false)": "%ReferenceError%", "Bool(false)": "reference_message_id" }, xYears: { "Bool(false)": true, "Bool(false)": true }, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} 전`;
        }
        text = `${tmp} 후`;
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
