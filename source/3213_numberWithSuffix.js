// Module ID: 3213
// Function ID: 25828
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
obj.era = obj.default({ values: { narrow: [false, null], abbreviated: [], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: [null, null, null, null], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { abbreviated: ["good", "goodnight", "night", "sleep", "sleeping", "sleepy", "tired", "zzz", "<string:4109697026>", "<string:4125687810>", "<string:4134207490>", "<string:2555838466>"], wide: ["onShare", -1660470783, 402798335, -1721548542, -279904254, -690077085, 1210843137, -2075066367, 69005644, 50475264, 52768512, 71813888] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: ["MEDIA_ENGINE_PERMISSION", "SESSIONS_REPLACE", "STREAM_CREATE", "STREAM_SERVER_UPDATE", "STREAM_DELETE", "STREAM_UPDATE", 623771649], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { wide: { <string:13107200>: null, <string:13303808>: null, <string:13369344>: null, <string:13631488>: null, <string:13893632>: null, <string:14024704>: null, <string:14286848>: null, <string:14548992>: null } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
