// Module ID: 3281
// Function ID: 26008
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
obj.era = obj.default({ values: { narrow: ["<string:2194604034>", "<string:2194669570>"], abbreviated: ["<string:594477059>", "<string:1944125442>"], wide: ["<string:594477059>", "<string:1944125442>"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["imageContainerExpiring", "locke", "imageContainerExpiring", "UNKNOWN_PLATFORM"], wide: [49724672, 49747200, 49765376, 49775616] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return Number(arg0) - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [false, false, false, false, false, false, false], short: [false, false, false, false, false, false, false], abbreviated: [false, false, false, false, false, false, false], wide: [false, false, false, false, false, false, false] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: "P", body: 1, PX_8: 24, y: 18, isArray: 12, accessibilityRole: "100%", useStateFromStores: 0, lj: 5.907 }, abbreviated: { Text: "P", body: 1, PX_8: 24, y: 18, isArray: 12, accessibilityRole: "100%", useStateFromStores: 0, lj: 5.907 }, wide: { Text: "P", body: 1, PX_8: 24, y: 18, isArray: 12, accessibilityRole: "100%", useStateFromStores: 0, lj: 5.907 } }, defaultWidth: "wide", formattingValues: { narrow: { Text: "P", body: 1, PX_8: 24, y: 18, isArray: 12, accessibilityRole: "100%", useStateFromStores: 0, lj: 5.907 }, abbreviated: { Text: "P", body: 1, PX_8: 24, y: 18, isArray: 12, accessibilityRole: "100%", useStateFromStores: 0, lj: 5.907 }, wide: { Text: "P", body: 1, PX_8: 24, y: 18, isArray: 12, accessibilityRole: "100%", useStateFromStores: 0, lj: 5.907 } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
