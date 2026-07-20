// Module ID: 3308
// Function ID: 26073
// Name: declension
// Dependencies: []
// Exports: default

// Module 3308 (declension)
function declension(one) {
  if (1 === arg1) {
    let other = one.one;
  } else {
    const result = arg1 % 100;
    if (result <= 20) {
      if (result > 10) {
        other = one.other;
      }
    }
    const result1 = result % 10;
    if (result1 >= 2) {
      if (result1 <= 4) {
        other = one.twoFour;
      }
    }
    other = one.other;
  }
  let str = other;
  if ("string" !== typeof other) {
    str = other[arg2];
  }
  return str.replace("{{count}}", String(arg1));
}
let obj = { "Null": false, "Null": false, "Null": false, one: {} };
obj = { "Null": null, "Null": null, "Null": null, one: {} };
obj = { "Null": "a", "Null": "isArray", "Null": "ct", one: {} };
const obj1 = { "Null": null, "Null": null, "Null": null, one: {} };
const obj2 = { "Null": true, "Null": null, "Null": null, one: {} };
const obj3 = { "Null": "AM", "Null": "PM", "Null": "o p\u00F3\u0142nocy", one: {} };
let closure_0 = { lessThanXSeconds: { one: {} }, xSeconds: obj, halfAMinute: { "Null": false, "Null": false, "Null": false }, lessThanXMinutes: obj, xMinutes: obj, aboutXHours: obj1, xHours: obj2, xDays: obj3, aboutXWeeks: { "Null": true, "Null": true, "Null": true }, xWeeks: { "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027375746450850166, "Null": 57301460672757380000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000194027354219961 }, aboutXMonths: { "Null": null, "Null": null, "Null": 229016080747272750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, xMonths: { "Null": null, "Null": null, "Null": null }, aboutXYears: { "Null": "cerca de 1 m\u00EAs", "Null": "cerca de {{count}} meses", "Null": "1 m\u00EAs" }, xYears: {}, overXYears: {}, almostXYears: {} };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (null != addSuffix) {
    if (addSuffix.addSuffix) {
      if (!addSuffix.comparison) {
        let text = `${closure_1(tmp, arg1, "past")} temu`;
      }
      text = `za ${closure_1(tmp, arg1, "future")}`;
    }
  }
  return declension(closure_0[arg0], arg1, "regular");
};
export default exports.default;
