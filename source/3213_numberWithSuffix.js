// Module ID: 3213
// Function ID: 25833
// Name: numberWithSuffix
// Dependencies: []

// Module 3213 (numberWithSuffix)
function numberWithSuffix(NumberResult, unit, ви, ва, во) {
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
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
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
obj.era = obj.default({ values: { narrow: ["<string:3418095620>", "<string:2874212356>"], abbreviated: [true, true], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [null, null, null, null], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { abbreviated: [], wide: ["<string:439630182>", "<string:37641441>", "<string:19922697>", "<string:34931218>", "<string:4283563857>", "<string:121438643>", "<string:37683101>", "<string:2152464927>", "<string:3120563229>", null, null, null] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000694614388448652, -0.00000000000000000000000000000000000000000008972325308973477, -168453688774835350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.00000000000000711088717316095, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000420189889285552, -2.001536838710462, -10391627576317852000000000000000000], short: [], abbreviated: [], wide: ["<string:1224737041>", "<string:1358955155>", "<string:3418441616>", "<string:3418554372>", "<string:3418292228>", "<string:3418095620>", "<string:2397044740>"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { wide: {} }, defaultWidth: "wide" });

export default obj;
export default exports.default;
