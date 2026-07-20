// Module ID: 3350
// Function ID: 26181
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
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { "Null": "<string:1959919619>", "Null": "<string:1959985155>", "Null": "<string:1447231491>", "Null": "<string:4009755542>" }, future: { "Null": "a", "Null": "isArray", "Null": "uri", "Null": "content" } }),
  xSeconds: buildLocalizeTokenFn({ regular: { 0: "hasDiversityParent", 0: "a", 0: "isArray" }, past: { 0: -1690107901, 0: -1912601707, 0: -1912601702 }, future: { 0: null, 0: null, 0: null } }),
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
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { "Null": true, "Null": true, "Null": true, "Null": true }, future: { "Null": "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043A", "Null": "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", "Null": "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432", "Null": "EEEE, do MMMM y '\u0440.'" } }),
  xMinutes: buildLocalizeTokenFn({ regular: {}, past: { 0: "{{date}} '\u043E' {{time}}", 0: "{{date}} '\u043E' {{time}}", 0: "{{date}}, {{time}}" }, future: { 0: false, 0: false, 0: false } }),
  aboutXHours: buildLocalizeTokenFn({ regular: {}, future: { 0: "<string:2353070527>", 0: "<string:1895825675>", 0: "concat" } }),
  xHours: buildLocalizeTokenFn({ regular: { 0: "hidden", 0: "center", 0: "center" } }),
  xDays: buildLocalizeTokenFn({ regular: {} }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: {}, future: {} }),
  xWeeks: buildLocalizeTokenFn({ regular: { 0: "narrow", 0: "formatting", 0: "wide" } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: { 0: "wide", 0: "standalone", 0: "short" } }),
  xMonths: buildLocalizeTokenFn({ regular: { 0: "short", 0: "standalone", 0: "\u0414\u041F" } }),
  aboutXYears: buildLocalizeTokenFn({ regular: {}, future: { 0: "<string:253755395>", 0: "<string:198180867>", 0: "<string:390594563>" } }),
  xYears: buildLocalizeTokenFn({ regular: { 0: true, 0: true, 0: true } }),
  overXYears: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: { 0: null, 0: null, 0: null } }),
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
