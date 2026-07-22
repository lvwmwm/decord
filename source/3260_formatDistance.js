// Module ID: 3260
// Function ID: 25954
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3260 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: { "Bool(true)": "REVERSE_TRIAL_EMOJI_BUTTON", "Bool(true)": "getOriginalFunction", "Bool(true)": "Array" } }, xSeconds: { one: { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006557746593471785, "Bool(true)": -0.000000000000000000000000000000000000000000000000000007915755128190795, "Bool(true)": 53439933164311344000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, halfAMinute: "pola minute", lessThanXMinutes: { one: {} }, xMinutes: { one: { "Bool(true)": "Array", "Bool(true)": "isArray", "Bool(true)": null } }, aboutXHours: { one: { "Bool(true)": "center", "Bool(true)": "center", "Bool(true)": 100 } }, xHours: { one: { "Bool(true)": "Array", "Bool(true)": "GIROPAY", "Bool(true)": null } }, xDays: { one: { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true } }, aboutXWeeks: { one: {} }, xWeeks: { one: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null } }, aboutXMonths: { one: {} }, xMonths: { one: { "Bool(true)": "<string:1291846038>", "Bool(true)": "<string:1895825773>", "Bool(true)": null } }, aboutXYears: { one: {} }, xYears: { one: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null } }, overXYears: { one: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null } }, almostXYears: { one: { "Bool(true)": "a", "Bool(true)": "isArray", "Bool(true)": "bind" } } };

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
