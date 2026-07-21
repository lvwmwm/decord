// Module ID: 3260
// Function ID: 25954
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3260 (formatDistance)
let obj = { "Null": true, "Null": true, "Null": true, one: { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004991997722842597, "Bool(false)": 65231064099078050000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002888147924957354 } };
obj = { "Null": false, "Null": false, "Null": false, one: {} };
obj = { "Null": "absolute", "Null": 28, "Null": 28, one: {} };
const obj1 = { "Null": "pono\u0107", "Null": "podne", "Null": "ujutro", one: { "Bool(false)": "<string:41420800>", "Bool(false)": "<string:51145472>", "Bool(false)": "<string:49412352>" } };
const obj2 = { "Null": "center", "Null": "center", "Null": 100, one: { "Bool(false)": "isArray", "Bool(false)": "isArray", "Bool(false)": "isArray" } };
let closure_0 = { lessThanXSeconds: { one: {} }, xSeconds: obj, halfAMinute: "pola minute", lessThanXMinutes: obj, xMinutes: { one: {} }, aboutXHours: { one: {} }, xHours: obj, xDays: { one: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } }, aboutXWeeks: { one: {} }, xWeeks: { one: { "Bool(false)": null, "Bool(false)": "'ju\u010Der u' p", "Bool(false)": "'danas u' p" } }, aboutXMonths: { one: { "Bool(false)": 0.2, "Bool(false)": 16, "Bool(false)": "premium_tab_popover" } }, xMonths: { one: {} }, aboutXYears: { one: { "Bool(false)": "Boolean", "Bool(false)": "a", "Bool(false)": "isArray" } }, xYears: obj1, overXYears: { one: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null } }, almostXYears: obj2 };

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
