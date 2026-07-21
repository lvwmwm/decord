// Module ID: 3260
// Function ID: 25949
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3260 (formatDistance)
let obj = { "Null": "cix", "Null": "Array", "Null": "isArray", one: { "Null": 457375745, "Null": 452985287, "Null": 452985287 } };
obj = { "Null": "isArrayBuffer", "Null": "NewMemberActionTypes", "Null": "%Int32Array%", one: { "Null": "Array", "Null": "CREATE_GUILD_EVENT_CORE_PERMISSIONS", "Null": "%SetIteratorPrototype%" } };
obj = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007294852114686083, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010469639027733765, "Null": null, one: { "Null": true, "Null": true, "Null": true } };
const obj1 = { "Null": 1, "Null": "AM", "Null": "PM", one: { "Null": "pono\u0107", "Null": "podne", "Null": "ujutro" } };
const obj2 = { "Null": false, "Null": false, "Null": false, one: {} };
const obj3 = { "Null": null, "Null": null, "Null": null, one: {} };
const obj4 = { "Null": null, "Null": null, "Null": null, one: {} };
const obj5 = { "Null": " m\u00E1sodperccel ezel\u0151tt", "Null": " m\u00E1sodperc m\u00FAlva", "Null": " m\u00E1sodperce", one: { "Null": "isArray", "Null": "WireType", "Null": "memo" } };
const obj6 = { "Null": "a", "Null": "controller", "Null": "Label", one: {} };
let closure_0 = { lessThanXSeconds: obj, xSeconds: { one: {} }, halfAMinute: "pola minute", lessThanXMinutes: obj, xMinutes: { one: { "Null": false, "Null": false, "Null": false } }, aboutXHours: { one: {} }, xHours: { one: { "Null": -125411636021298050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 598135891501056.3, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435190634207667 } }, xDays: obj, aboutXWeeks: obj1, xWeeks: obj2, aboutXMonths: obj3, xMonths: { one: { "Null": null, "Null": null, "Null": null } }, aboutXYears: obj4, xYears: obj5, overXYears: obj6, almostXYears: { one: {} } };

export default function formatDistance(arg0, arg1, addSuffix) {
  let one;
  let withPrepositionIn;
  one = closure_0[arg0];
  if ("string" === typeof one) {
    let tmp7 = one;
    if (null != addSuffix) {
      tmp7 = one;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `prije ${one}`;
        }
        text = `za ${one}`;
      }
    }
    return tmp7;
  } else {
    if (1 !== arg1) {
      if (arg1 % 10 > 1) {
        if (arg1 % 10 < 5) {
          const _String = String;
          if ("1" !== str.substr(-2, 1)) {
            const _String3 = String;
            let replaced = one.dual.replace("{{count}}", String(arg1));
            const str5 = one.dual;
          }
          const str = String(arg1);
        }
      }
      const _String2 = String;
      replaced = one.other.replace("{{count}}", String(arg1));
      const str3 = one.other;
    }
    if (null == addSuffix) {
      const standalone = one.one.standalone;
    }
    if (!addSuffix.comparison) {
      const withPrepositionAgo = one.one.withPrepositionAgo;
    }
    ({ one, withPrepositionIn } = one);
  }
};
export default exports.default;
