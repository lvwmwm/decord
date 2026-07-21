// Module ID: 3242
// Function ID: 25904
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3242 (formatDistance)
let closure_0 = { lessThanXSeconds: {}, xSeconds: { "Bool(false)": null, "Bool(false)": null }, halfAMinute: "medio minuto", lessThanXMinutes: {}, xMinutes: { "Bool(false)": null, "Bool(false)": null }, aboutXHours: { "Bool(false)": true, "Bool(false)": true }, xHours: { "Bool(false)": "<string:1879048590>", "Bool(false)": "<string:989856496>" }, xDays: { "Bool(false)": "r", "Bool(false)": "serializeHost" }, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: { "Bool(false)": -5489243532071428000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000185 }, overXYears: { "Bool(false)": 1, "Bool(false)": 0 }, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `hace ${tmp}`;
        }
        text = `en ${tmp}`;
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
