// Module ID: 3215
// Function ID: 25838
// Name: result3
// Dependencies: [1929]

// Module 3215 (result3)
import buildLocalizeFn from "buildLocalizeFn";

function numberWithSuffix(NumberResult, unit, __, __, __) {
  let tmp = __;
  let tmp2 = __;
  if ("quarter" !== unit) {
    let tmp3 = "year" === unit;
    if (!tmp3) {
      tmp3 = "week" === unit;
    }
    if (!tmp3) {
      tmp3 = "minute" === unit;
    }
    if (!tmp3) {
      tmp3 = "second" === unit;
    }
    if (tmp3) {
      tmp = __;
    }
    tmp2 = tmp;
  }
  return NumberResult + "-" + tmp2;
}
if (!buildLocalizeFn) {
  let obj = { default: buildLocalizeFn };
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if (0 === NumberResult) {
      return numberWithSuffix(0, unit, "\u0435\u0432", "\u0435\u0432\u0430", "\u0435\u0432\u043E");
    } else if (NumberResult % 1000 === 0) {
      return numberWithSuffix(NumberResult, unit, "\u0435\u043D", "\u043D\u0430", "\u043D\u043E");
    } else if (NumberResult % 100 === 0) {
      return numberWithSuffix(NumberResult, unit, "\u0442\u0435\u043D", "\u0442\u043D\u0430", "\u0442\u043D\u043E");
    } else {
      const result = NumberResult % 100;
      if (result > 20) {
        const result1 = result % 10;
        if (1 === result1) {
          return numberWithSuffix(NumberResult, unit, "\u0432\u0438", "\u0432\u0430", "\u0432\u043E");
        } else if (2 === result1) {
          return numberWithSuffix(NumberResult, unit, "\u0440\u0438", "\u0440\u0430", "\u0440\u043E");
        } else {
          return numberWithSuffix(NumberResult, unit, "\u043C\u0438", "\u043C\u0430", "\u043C\u043E");
        }
      }
      return numberWithSuffix(NumberResult, unit, "\u0442\u0438", "\u0442\u0430", "\u0442\u043E");
    }
  }
};
obj.era = obj.default({ values: { narrow: ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."], abbreviated: ["\u043F\u0440\u0435\u0434\u0438 \u043D. \u0435.", "\u043D. \u0435."], wide: ["\u043F\u0440\u0435\u0434\u0438 \u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430", "\u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441."], wide: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { abbreviated: ["\u044F\u043D\u0443", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0435", "\u0434\u0435\u043A"], wide: ["\u044F\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0442\u043E", "\u0441\u0440\u044F", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u044A\u0431"], wide: ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { wide: { am: "\u043F\u0440\u0435\u0434\u0438 \u043E\u0431\u044F\u0434", pm: "\u0441\u043B\u0435\u0434 \u043E\u0431\u044F\u0434", midnight: "\u0432 \u043F\u043E\u043B\u0443\u043D\u043E\u0449", noon: "\u043D\u0430 \u043E\u0431\u044F\u0434", morning: "\u0441\u0443\u0442\u0440\u0438\u043D\u0442\u0430", afternoon: "\u0441\u043B\u0435\u0434\u043E\u0431\u0435\u0434", evening: "\u0432\u0435\u0447\u0435\u0440\u0442\u0430", night: "\u043F\u0440\u0435\u0437 \u043D\u043E\u0449\u0442\u0430" } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
