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
let closure_0 = { lessThanXSeconds: { one: { "Null": false, "Null": false, "Null": false } }, xSeconds: { one: { "Null": "SET_VOICE_CHANNEL_STATUS", "Null": "%Uint8ArrayPrototype%", "Null": "tidaWebformEnabled" } }, halfAMinute: {}, lessThanXMinutes: { one: { "Null": "STATUS_POSITIVE_TEXT", "Null": "profileEffectLayer", "Null": "formColor" } }, xMinutes: { one: { "Null": true, "Null": true, "Null": true } }, aboutXHours: { one: { "Null": true, "Null": null, "Null": null } }, xHours: { one: { "Null": "a", "Null": "p", "Null": "o p\u00F3\u0142n." } }, xDays: { one: {} }, aboutXWeeks: {}, xWeeks: {}, aboutXMonths: {}, xMonths: {}, aboutXYears: {}, xYears: {}, overXYears: {}, almostXYears: {} };

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
