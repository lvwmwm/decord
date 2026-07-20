// Module ID: 3326
// Function ID: 26118
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
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { "Null": true, "Null": true, "Null": true, "Null": true }, future: { "Null": -1275461629, "Null": -1656553469, "Null": -1644166218, "Null": -1627389002 } }),
  xSeconds: buildLocalizeTokenFn({ regular: { 0: true, 0: true, 0: true }, past: { 0: true, 0: true, 0: true }, future: { 0: true, 0: true, 0: true } }),
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
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { "Null": "<string:1124074391>", "Null": "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434", "Null": "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430", "Null": "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442" }, future: { "Null": "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", "Null": "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", "Null": "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442", "Null": "EEEE, d MMMM y '\u0433.'" } }),
  xMinutes: buildLocalizeTokenFn({ regular: {}, past: { 0: null, 0: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p", 0: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p" }, future: {} }),
  aboutXHours: buildLocalizeTokenFn({ regular: {}, future: {} }),
  xHours: buildLocalizeTokenFn({ regular: {} }),
  xDays: buildLocalizeTokenFn({ regular: { 0: false, 0: false, 0: false } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: { 0: null, 0: null, 0: null } }),
  xWeeks: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: {} }),
  xMonths: buildLocalizeTokenFn({ regular: { 0: 1207960489, 0: 232215, 0: 232216 } }),
  aboutXYears: buildLocalizeTokenFn({ regular: { 0: "<string:197656579>", 0: "<string:2361524227>", 0: "<string:4037541891>" }, future: {} }),
  xYears: buildLocalizeTokenFn({ regular: { 0: "<string:735510531>", 0: "<string:88211459>", 0: "<string:3103785544>" } }),
  overXYears: buildLocalizeTokenFn({ regular: { 0: 16233156757841290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000004023975872374284, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000412811486255984 }, future: { 0: "r", 0: "isArray", 0: "label" } }),
  almostXYears: buildLocalizeTokenFn({ regular: { 0: false, 0: false, 0: false }, future: { 0: "en dag", 0: "{{count}} dagar", 0: "ungef\u00E4r en vecka" } })
};

export default function formatDistance(arg0, arg1, arg2) {
  return obj[arg0](arg1, arg2);
};
export default exports.default;
