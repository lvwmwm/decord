// Module ID: 3326
// Function ID: 26123
// Name: declension
// Dependencies: []
// Exports: default

// Module 3326 (declension)
function declension(one) {
  if (undefined !== one.one) {
    if (1 === arg1) {
      return one.one;
    }
  }
  const result = arg1 % 10;
  const result1 = arg1 % 100;
  if (1 === result) {
    if (11 !== result1) {
      const _String2 = String;
      let replaced = one.singularNominative.replace("{{count}}", String(arg1));
      const str4 = one.singularNominative;
    }
    return replaced;
  }
  if (result >= 2) {
    if (result <= 4) {
      const _String = String;
      replaced = one.singularGenitive.replace("{{count}}", String(arg1));
      const str2 = one.singularGenitive;
    }
  }
  replaced = one.pluralGenitive.replace("{{count}}", String(arg1));
}
function buildLocalizeTokenFn(arg0) {
  return (self, addSuffix) => {
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (self.past) {
            let text = tmp2(tmp3.past, self);
          } else {
            text = `${tmp2(tmp3.regular, self)} назад`;
          }
        }
        if (self.future) {
          let text1 = tmp6(tmp7.future, self);
        } else {
          text1 = `через ${tmp6(tmp7.regular, self)}`;
        }
      }
    }
    return callback(self.regular, self);
  };
}
const obj = {
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { "Null": "context", "Null": "a", "Null": "isArray", "Null": "WireType" }, future: { "Null": false, "Null": false, "Null": false, "Null": false } }),
  xSeconds: buildLocalizeTokenFn({ regular: { "Bool(true)": "a", formatDistanceStrict: "isArray", formatDistanceToNow: "WireType" }, past: { "Bool(true)": false, formatDistanceStrict: false, formatDistanceToNow: false }, future: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null } }),
  halfAMinute(arg0, addSuffix) {
    let str = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
    if (null != addSuffix) {
      str = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
      if (addSuffix.addSuffix) {
        let str3 = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
        if (addSuffix.comparison) {
          str3 = "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
          if (addSuffix.comparison > 0) {
            str3 = "\u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
          }
        }
        str = str3;
      }
    }
    return str;
  },
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { "Null": true, "Null": true, "Null": true, "Null": true }, future: { "Null": "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", "Null": "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", "Null": "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442", "Null": null } }),
  xMinutes: buildLocalizeTokenFn({ regular: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null }, past: { "Bool(true)": "title", formatDistanceStrict: "__closure", formatDistanceToNow: "title" }, future: {} }),
  aboutXHours: buildLocalizeTokenFn({ regular: {}, future: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: 16 } }),
  xHours: buildLocalizeTokenFn({ regular: {} }),
  xDays: buildLocalizeTokenFn({ regular: { "Bool(true)": "0", formatDistanceStrict: "\u0414\u041F", formatDistanceToNow: "\u041F\u041F" } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: {}, future: { "Bool(true)": "<string:2835350284>", formatDistanceStrict: "<string:1342178063>", formatDistanceToNow: "<string:1207960332>" } }),
  xWeeks: buildLocalizeTokenFn({ regular: { "Bool(true)": false, formatDistanceStrict: false, formatDistanceToNow: false } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null }, future: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null } }),
  xMonths: buildLocalizeTokenFn({ regular: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null } }),
  aboutXYears: buildLocalizeTokenFn({ regular: {}, future: { "Bool(true)": "\u0414\u041F", formatDistanceStrict: "\u041F\u041F", formatDistanceToNow: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C" } }),
  xYears: buildLocalizeTokenFn({ regular: {} }),
  overXYears: buildLocalizeTokenFn({ regular: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null }, future: { "Bool(true)": false, formatDistanceStrict: false, formatDistanceToNow: false } }),
  almostXYears: buildLocalizeTokenFn({ regular: { "Bool(true)": true, formatDistanceStrict: true, formatDistanceToNow: true }, future: { "Bool(true)": true, formatDistanceStrict: true, formatDistanceToNow: true } })
};

export default function formatDistance(arg0, arg1, arg2) {
  return obj[arg0](arg1, arg2);
};
export default exports.default;
