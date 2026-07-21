// Module ID: 3350
// Function ID: 26186
// Name: declension
// Dependencies: []
// Exports: default

// Module 3350 (declension)
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
    if (addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (self.past) {
            let text = tmp2(tmp3.past, self);
          } else {
            text = `${tmp2(tmp3.regular, self)} тому`;
          }
        }
        if (self.future) {
          let text1 = tmp6(tmp7.future, self);
        } else {
          text1 = `за ${tmp6(tmp7.regular, self)}`;
        }
      }
    }
    return callback(self.regular, self);
  };
}
const obj = {
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { location: null, y: null, isArray: null, children: null }, future: { location: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u044F", y: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432", isArray: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432", children: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u044C" } }),
  xSeconds: buildLocalizeTokenFn({ regular: {}, past: {}, future: {} }),
  halfAMinute: function halfAtMinute(arg0, addSuffix) {
    let str = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
    if (addSuffix) {
      str = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
      if (addSuffix.addSuffix) {
        let str3 = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
        if (addSuffix.comparison) {
          str3 = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
          if (addSuffix.comparison > 0) {
            str3 = "\u0437\u0430 \u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
          }
        }
        str = str3;
      }
    }
    return str;
  },
  lessThanXMinutes: buildLocalizeTokenFn({ regular: {}, future: { location: 20, y: 4, isArray: 1, children: -7 } }),
  xMinutes: buildLocalizeTokenFn({ regular: { 0: true, 0: true, 0: true }, past: {}, future: { 0: false, 0: false, 0: false } }),
  aboutXHours: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: { 0: true, 0: true, 0: true } }),
  xHours: buildLocalizeTokenFn({ regular: { 0: "<string:1362780416>", 0: "<string:1061224894>", 0: "<string:1358954763>" } }),
  xDays: buildLocalizeTokenFn({ regular: { 0: "center", 0: "text", 0: "a" } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: {}, future: { 0: 49352448, 0: 391184640, 0: 967463426 } }),
  xWeeks: buildLocalizeTokenFn({ regular: { 0: 1758528298424178700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000369537627980821, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013277327697871 } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { 0: "<string:1056965288>", 0: "<string:1895825675>", 0: true }, future: { 0: "transparent", 0: "hidden", 0: "resolve" } }),
  xMonths: buildLocalizeTokenFn({ regular: {} }),
  aboutXYears: buildLocalizeTokenFn({ regular: { 0: "Array", 0: "_startPeriodicChunking", 0: "cpx" }, future: { 0: null, 0: null, 0: null } }),
  xYears: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null } }),
  overXYears: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: "maroon" }, future: { 0: null, 0: null, 0: "_nextQuery" } }),
  almostXYears: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: {} })
};

export default function formatDistance(arg0, arg1, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  return obj[arg0](arg1, obj);
};
export default exports.default;
