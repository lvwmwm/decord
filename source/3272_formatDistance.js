// Module ID: 3272
// Function ID: 25986
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3272 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": "isArray", "Bool(false)": "key" }, xSeconds: {}, halfAMinute: "alcuni secondi", lessThanXMinutes: {}, xMinutes: { "Bool(false)": "<string:1107297142>", "Bool(false)": "1\u79D2" }, aboutXHours: { "Bool(false)": "<string:1912603510>", "Bool(false)": "values" }, xHours: { "Bool(false)": "isArray", "Bool(false)": "isArray" }, xDays: { "Bool(false)": null, "Bool(false)": null }, aboutXWeeks: { "Bool(false)": 58077184, "Bool(false)": -184401408 }, xWeeks: { "Bool(false)": 58077440, "Bool(false)": -183352832 }, aboutXMonths: { "Bool(false)": 58081792, "Bool(false)": -183287296 }, xMonths: { "Bool(false)": 58082048, "Bool(false)": -183549440 }, aboutXYears: { "Bool(false)": 58081280, "Bool(false)": -182369792 }, xYears: { "Bool(false)": 58083328, "Bool(false)": -182304256 }, overXYears: { "Bool(false)": 58083584, "Bool(false)": -185384448 }, almostXYears: { "Bool(false)": 58076672, "Bool(false)": -185318912 } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} fa`;
        }
        text = `tra ${tmp}`;
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
