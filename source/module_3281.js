// Module ID: 3281
// Function ID: 26003
// Dependencies: []

// Module 3281
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    const StringResult = String(unit);
    if ("year" === StringResult) {
      const concat9 = "".concat;
      return "".concat(NumberResult, "\u5E74");
    } else if ("quarter" === StringResult) {
      const concat8 = "\u7B2C".concat;
      return "\u7B2C".concat(NumberResult, "\u56DB\u534A\u671F");
    } else if ("month" === StringResult) {
      const concat7 = "".concat;
      return "".concat(NumberResult, "\u6708");
    } else if ("week" === StringResult) {
      const concat6 = "\u7B2C".concat;
      return "\u7B2C".concat(NumberResult, "\u9031");
    } else if ("date" === StringResult) {
      const concat5 = "".concat;
      return "".concat(NumberResult, "\u65E5");
    } else if ("hour" === StringResult) {
      const concat4 = "".concat;
      return "".concat(NumberResult, "\u6642");
    } else if ("minute" === StringResult) {
      const concat3 = "".concat;
      return "".concat(NumberResult, "\u5206");
    } else if ("second" === StringResult) {
      const concat2 = "".concat;
      return "".concat(NumberResult, "\u79D2");
    } else {
      const concat = "".concat;
      return "".concat(NumberResult);
    }
  }
};
obj.era = obj.default({ values: { narrow: [-0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012844119975602198, 0.00000000000000000000000000000000000000000000009852900796706634], abbreviated: [null, null], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: [49696000, 49718528, 49736704, 49746944] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return Number(arg0) - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [2002780162, -1504051197, 1933967362, 1941766147, -366608381, -246349822, 37808708] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
