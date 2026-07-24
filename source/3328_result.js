// Module ID: 3328
// Function ID: 26129
// Name: result
// Dependencies: []
// Exports: default

// Module 3328 (result)
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
    if (null != addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (closure_0.past) {
            let text = tmp2(tmp3.past, arg0);
          } else {
            text = `${tmp2(tmp3.regular, arg0)} назад`;
          }
        }
        if (closure_0.future) {
          let text1 = tmp6(tmp7.future, arg0);
        } else {
          text1 = `через ${tmp6(tmp7.regular, arg0)}`;
        }
      }
    }
    return outer1_1(closure_0.regular, arg0);
  };
}
const obj = {
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, future: { one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }),
  xSeconds: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, past: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434" }, future: { singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }),
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
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442" }, future: { one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442" } }),
  xMinutes: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430", singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442" }, past: { singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434", singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434", pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434" }, future: { singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442" } }),
  aboutXHours: buildLocalizeTokenFn({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043E\u0432" } }),
  xHours: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0447\u0430\u0441", singularGenitive: "{{count}} \u0447\u0430\u0441\u0430", pluralGenitive: "{{count}} \u0447\u0430\u0441\u043E\u0432" } }),
  xDays: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0434\u0435\u043D\u044C", singularGenitive: "{{count}} \u0434\u043D\u044F", pluralGenitive: "{{count}} \u0434\u043D\u0435\u0439" } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u0438", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044E", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044C" } }),
  xWeeks: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044F", singularGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438", pluralGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044C" } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" } }),
  xMonths: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430", pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" } }),
  aboutXYears: buildLocalizeTokenFn({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } }),
  xYears: buildLocalizeTokenFn({ regular: { singularNominative: "{{count}} \u0433\u043E\u0434", singularGenitive: "{{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "{{count}} \u043B\u0435\u0442" } }),
  overXYears: buildLocalizeTokenFn({ regular: { singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } }),
  almostXYears: buildLocalizeTokenFn({ regular: { singularNominative: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } })
};

export default function formatDistance(arg0, arg1, arg2) {
  return obj[arg0](arg1, arg2);
};
export default exports.default;
