// Module ID: 3234
// Function ID: 25886
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3234 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": null, "Bool(false)": null }, xSeconds: {}, halfAMinute: "\u03BC\u03B9\u03C3\u03CC \u03BB\u03B5\u03C0\u03C4\u03CC", lessThanXMinutes: { "Bool(false)": 22992148765346340000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 11040808781439760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, xMinutes: { "Bool(false)": 1816657923, "Bool(false)": 1828717447 }, aboutXHours: { "Bool(false)": null, "Bool(false)": null }, xHours: { "Bool(false)": null, "Bool(false)": null }, xDays: {}, aboutXWeeks: { "Bool(false)": "menos de un segundo", "Bool(false)": "menos de {{count}} segundos" }, xWeeks: { "Bool(false)": "1 segundo", "Bool(false)": "{{count}} segundos" }, aboutXMonths: { "Bool(false)": "menos de un minuto", "Bool(false)": "menos de {{count}} minutos" }, xMonths: { "Bool(false)": "1 minuto", "Bool(false)": "{{count}} minutos" }, aboutXYears: { "Bool(false)": "alrededor de 1 hora", "Bool(false)": "alrededor de {{count}} horas" }, xYears: { "Bool(false)": "1 hora", "Bool(false)": "{{count}} horas" }, overXYears: { "Bool(false)": "1 d\u00EDa", "Bool(false)": "{{count}} d\u00EDas" }, almostXYears: { "Bool(false)": "alrededor de 1 hora", "Bool(false)": "alrededor de {{count}} horas" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} πριν`;
        }
        text = `σε ${tmp}`;
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
