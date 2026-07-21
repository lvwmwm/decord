// Module ID: 3669
// Function ID: 27989
// Dependencies: []

// Module 3669
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return NumberResult + "\u65E5";
    } else if ("hour" === unit) {
      return NumberResult + "\u6642";
    } else if ("minute" === unit) {
      return NumberResult + "\u5206";
    } else if ("second" === unit) {
      return NumberResult + "\u79D2";
    } else {
      return "\u7B2C " + NumberResult;
    }
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [65686528, 65851136] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [51211776, 51212288, 51212800, 51213312], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["useMemo", "r", "isArray", "DARK", "values", "a", "isArray", "padding", "o", "a", "isArray", "add"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["em", "ms-Arab-BN", "handleCodedLinkExperimentEmbedTap", "identifier", "em", "FEATURE_PROMO_URL", "em"], short: ["em", "ms-Arab-BN", "handleCodedLinkExperimentEmbedTap", "identifier", "em", "FEATURE_PROMO_URL", "em"], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": 50067712, "Bool(false)": 51430912, "Bool(false)": 66471680, "Bool(false)": -159497728, "Bool(false)": 1973223426, "Bool(false)": 2101477379, "Null": -1677720842, "Null": 1107297141 }, abbreviated: { "Bool(false)": "isArray", "Bool(false)": "paddingHorizontal", "Bool(false)": "onPress", "Bool(false)": "Array", "Bool(false)": "enumerable", "Bool(false)": "__d", "Null": "enumerable", "Null": "__d" }, wide: { "Bool(false)": "isArray", "Bool(false)": "paddingHorizontal", "Bool(false)": "onPress", "Bool(false)": "Array", "Bool(false)": "enumerable", "Bool(false)": "__d", "Null": "enumerable", "Null": "__d" } }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": 50067712, "Bool(false)": 51430912, "Bool(false)": 66471680, "Bool(false)": -159497728, "Bool(false)": 1973223426, "Bool(false)": 2101477379, "Null": -1677720842, "Null": 1107297141 }, abbreviated: { "Bool(false)": "isArray", "Bool(false)": "paddingHorizontal", "Bool(false)": "onPress", "Bool(false)": "Array", "Bool(false)": "enumerable", "Bool(false)": "__d", "Null": "enumerable", "Null": "__d" }, wide: { "Bool(false)": "isArray", "Bool(false)": "paddingHorizontal", "Bool(false)": "onPress", "Bool(false)": "Array", "Bool(false)": "enumerable", "Bool(false)": "__d", "Null": "enumerable", "Null": "__d" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
