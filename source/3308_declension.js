// Module ID: 3308
// Function ID: 26078
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
let obj = { "Null": null, "Null": 16, "Null": null, one: {} };
obj = { "Null": false, "Null": null, "Null": null, one: {} };
obj = { "Null": true, "Null": true, "Null": null, one: {} };
const obj1 = { "Null": "AM", "Null": "PM", "Null": "p\u00F3\u0142noc", one: {} };
const obj2 = { "Null": null, "Null": null, "Null": null, one: {} };
let closure_0 = { lessThanXSeconds: { one: {} }, xSeconds: obj, halfAMinute: {}, lessThanXMinutes: { one: {} }, xMinutes: obj, aboutXHours: obj, xHours: obj1, xDays: obj2, aboutXWeeks: { "Null": "a", "Null": "onRef", "Null": "r" }, xWeeks: { "Null": "key", "Null": null, "Null": null }, aboutXMonths: {}, xMonths: { "Null": "EXPRESSION_PICKER_EXPRESSION_FOCUS", "Null": "SIMILAR_GAMES_BLOCKED_GAME_IDS", "Null": "r" }, aboutXYears: { "Null": false, "Null": false, "Null": false }, xYears: { "Null": null, "Null": null, "Null": null }, overXYears: { "Null": "cerca de 1 semana", "Null": "cerca de {{count}} semanas", "Null": "cerca de 1 m\u00EAs" }, almostXYears: {} };

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
