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
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { <string:3016425476>: 205284049900172300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:3016491012>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036292300515661764, <string:3880845316>: 563458946891894.5, <string:3016639944>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005164577017127476 }, future: { <string:3016425476>: true, <string:3016491012>: true, <string:3880845316>: true, <string:3016639944>: -0.000000000000000000000000000000000000000000003899414075866204 } }),
  xSeconds: buildLocalizeTokenFn({ regular: { 0: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020539995651508644, 0: 563424905920622.5, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004805768748749423 }, past: { 0: false, 0: false, 0: false }, future: { 0: false, 0: false, 0: false } }),
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
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { <string:3016425476>: "Disco Icon", <string:3016491012>: "COPY_INSTANT_INVITE", <string:3880845316>: "onMove", <string:3016639944>: "a" }, future: { <string:3016425476>: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", <string:3016491012>: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", <string:3880845316>: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442", <string:3016639944>: "EEEE, d MMMM y '\u0433.'" } }),
  xMinutes: buildLocalizeTokenFn({ regular: {}, past: { 0: null, 0: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p", 0: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p" }, future: {} }),
  aboutXHours: buildLocalizeTokenFn({ regular: {}, future: { 0: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004781880169253758, 0: null, 0: null } }),
  xHours: buildLocalizeTokenFn({ regular: { 0: false, 0: false, 0: false } }),
  xDays: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null }, future: {} }),
  xWeeks: buildLocalizeTokenFn({ regular: {} }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { 0: "a", 0: "redirectWithHandoffToken", 0: "r" }, future: { 0: false, 0: false, 0: false } }),
  xMonths: buildLocalizeTokenFn({ regular: { 0: null, 0: null, 0: null } }),
  aboutXYears: buildLocalizeTokenFn({ regular: {}, future: { 0: null, 0: null, 0: null } }),
  xYears: buildLocalizeTokenFn({ regular: {} }),
  overXYears: buildLocalizeTokenFn({ regular: { 0: -960036862, 0: 71434242, 0: -1191181576 }, future: { 0: 1153253888, 0: -35848191, 0: 1732378625 } }),
  almostXYears: buildLocalizeTokenFn({ regular: { 0: "max", 0: "Array", 0: "isArray" }, future: { 0: -1354629118, 0: 520094275, 0: 1107296591 } })
};

export default function formatDistance(arg0, arg1, arg2) {
  return obj[arg0](arg1, arg2);
};
export default exports.default;
