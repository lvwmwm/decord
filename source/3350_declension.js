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
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { <string:3016425476>: "a", <string:3016491012>: "isArray", <string:3880845316>: "title", <string:3016639944>: "content" }, future: { <string:3016425476>: null, <string:3016491012>: null, <string:3880845316>: null, <string:3016639944>: null } }),
  xSeconds: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, past: { 0: null, 0: null, 0: null }, future: { 0: false, 0: false, 0: false } }),
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
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { <string:3016425476>: false, <string:3016491012>: false, <string:3880845316>: false, <string:3016639944>: false }, future: { <string:3016425476>: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043A", <string:3016491012>: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", <string:3880845316>: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432", <string:3016639944>: "EEEE, do MMMM y '\u0440.'" } }),
  xMinutes: buildLocalizeTokenFn({ regular: {}, past: { 0: "{{date}} '\u043E' {{time}}", 0: "{{date}} '\u043E' {{time}}", 0: "{{date}}, {{time}}" }, future: { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000407434357242753, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004088682710941945, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004024538393717332 } }),
  aboutXHours: buildLocalizeTokenFn({ regular: {}, future: {} }),
  xHours: buildLocalizeTokenFn({ regular: { 0: 10, 0: 54, 0: "flex" } }),
  xDays: buildLocalizeTokenFn({ regular: { 0: false, 0: false, 0: false } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: { 0: "shapes", 0: "forEach", 0: "fileFinishedImporting" }, future: { 0: "narrow", 0: "formatting", 0: "wide" } }),
  xWeeks: buildLocalizeTokenFn({ regular: { 0: -11403263, 0: null, 0: null } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { 0: "wide", 0: "standalone", 0: "short" }, future: { 0: "short", 0: "standalone", 0: "\u0414\u041F" } }),
  xMonths: buildLocalizeTokenFn({ regular: {} }),
  aboutXYears: buildLocalizeTokenFn({ regular: { 0: "a", 0: "6Jjfk8", 0: "a" }, future: {} }),
  xYears: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null } }),
  overXYears: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: { 0: null, 0: null, 0: null } }),
  almostXYears: buildLocalizeTokenFn({ regular: {}, future: { 0: "\u0414\u041F", 0: "\u041F\u041F", 0: "\u043F\u0456\u0432\u043D\u0456\u0447" } })
};

export default function formatDistance(arg0, arg1, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  return obj[arg0](arg1, obj);
};
export default exports.default;
