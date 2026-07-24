// Module ID: 3256
// Function ID: 25946
// Name: result
// Dependencies: []
// Exports: default

// Module 3256 (result)
let closure_0 = { lessThanXSeconds: { one: "moins d\u2019une seconde", other: "moins de {{count}} secondes" }, xSeconds: { one: "1 seconde", other: "{{count}} secondes" }, halfAMinute: "30 secondes", lessThanXMinutes: { one: "moins d\u2019une minute", other: "moins de {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "environ 1 heure", other: "environ {{count}} heures" }, xHours: { one: "1 heure", other: "{{count}} heures" }, xDays: { one: "1 jour", other: "{{count}} jours" }, aboutXWeeks: { one: "environ 1 semaine", other: "environ {{count}} semaines" }, xWeeks: { one: "1 semaine", other: "{{count}} semaines" }, aboutXMonths: { one: "environ 1 mois", other: "environ {{count}} mois" }, xMonths: { one: "1 mois", other: "{{count}} mois" }, aboutXYears: { one: "environ 1 an", other: "environ {{count}} ans" }, xYears: { one: "1 an", other: "{{count}} ans" }, overXYears: { one: "plus d\u2019un an", other: "plus de {{count}} ans" }, almostXYears: { one: "presqu\u2019un an", other: "presque {{count}} ans" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof table[arg0]) {
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
