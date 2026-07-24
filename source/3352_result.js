// Module ID: 3352
// Function ID: 26192
// Name: result
// Dependencies: []
// Exports: default

// Module 3352 (result)
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
  let closure_0 = arg0;
  return (arg0, addSuffix) => {
    if (addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (closure_0.past) {
            let text = tmp2(tmp3.past, arg0);
          } else {
            text = `${tmp2(tmp3.regular, arg0)} тому`;
          }
        }
        if (closure_0.future) {
          let text1 = tmp6(tmp7.future, arg0);
        } else {
          text1 = `за ${tmp6(tmp7.regular, arg0)}`;
        }
      }
    }
    return outer1_1(closure_0.regular, arg0);
  };
}
let obj = {
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { one: "\u043C\u0435\u043D\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u0438", singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, future: { one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }),
  xSeconds: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, past: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u043E\u043C\u0443", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u0442\u043E\u043C\u0443", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u043E\u043C\u0443" }, future: { singularNominative: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", pluralGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }),
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
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { one: "\u043C\u0435\u043D\u0448\u0435 \u0445\u0432\u0438\u043B\u0438\u043D\u0438", singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D" }, future: { one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043B\u0438\u043D\u0443", singularNominative: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443", singularGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D" } }),
  xMinutes: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0430", singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D" }, past: { singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0442\u043E\u043C\u0443", singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443", pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443" }, future: { singularNominative: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443", singularGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", pluralGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D" } }),
  aboutXHours: buildLocalizeTokenFn({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0438", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0443", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D" } }),
  xHours: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0443", singularGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438", pluralGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D" } }),
  xDays: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0434\u0435\u043D\u044C", singularGenitive: "{{count}} \u0434\u043Di", pluralGenitive: "{{count}} \u0434\u043D\u0456\u0432" } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u044F", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456\u0432" } }),
  xWeeks: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C", singularGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456", pluralGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456\u0432" } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u044F", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u044C", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432" } }),
  xMonths: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u043C\u0456\u0441\u044F\u0446\u044C", singularGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456", pluralGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432" } }),
  aboutXYears: buildLocalizeTokenFn({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0443", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u0456\u043A", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432" } }),
  xYears: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0440\u0456\u043A", singularGenitive: "{{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "{{count}} \u0440\u043E\u043A\u0456\u0432" } }),
  overXYears: buildLocalizeTokenFn({ regular: { singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0443", singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432", pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432" }, future: { singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043A", singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432" } }),
  almostXYears: buildLocalizeTokenFn({ regular: { singularNominative: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043A", singularGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432" }, future: { singularNominative: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043A", singularGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432" } })
};

export default function formatDistance(arg0, arg1, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  return obj[arg0](arg1, obj);
};
export default exports.default;
