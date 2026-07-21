// Module ID: 3663
// Function ID: 27975
// Dependencies: []

// Module 3663
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    const str = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return str.toString() + "\u65E5";
    } else if ("hour" === unit) {
      return str.toString() + "\u65F6";
    } else if ("minute" === unit) {
      return str.toString() + "\u5206";
    } else if ("second" === unit) {
      return str.toString() + "\u79D2";
    } else {
      return "\u7B2C " + str.toString();
    }
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [65686528, 65851136] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["useMemo", "r", "isArray", "DARK", "values", "a", "isArray", "padding", "o", "a", "isArray", "add"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["em", "ms-Arab-BN", "handleCodedLinkExperimentEmbedTap", "identifier", "em", "FEATURE_PROMO_URL", "em"], short: ["em", "ms-Arab-BN", "handleCodedLinkExperimentEmbedTap", "identifier", "em", "FEATURE_PROMO_URL", "em"], abbreviated: [null, null, null, null, null, null, null], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": 50067712, "Bool(false)": 51430912, "Bool(false)": 66471680, "Bool(false)": -159497728, "Bool(false)": 1973223426, "Bool(false)": 2101477379, "Null": -1677720842, "Null": 1107297141 }, abbreviated: { "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F", "Bool(false)": "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E", "Bool(false)": "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947", "Null": "\u0967 \u0918\u0902\u091F\u093E", "Null": "{{count}} \u0918\u0902\u091F\u0947" }, wide: { "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F", "Bool(false)": "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E", "Bool(false)": "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947", "Null": "\u0967 \u0918\u0902\u091F\u093E", "Null": "{{count}} \u0918\u0902\u091F\u0947" } }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": 50067712, "Bool(false)": 51430912, "Bool(false)": 66471680, "Bool(false)": -159497728, "Bool(false)": 1973223426, "Bool(false)": 2101477379, "Null": -1677720842, "Null": 1107297141 }, abbreviated: { "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F", "Bool(false)": "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E", "Bool(false)": "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947", "Null": "\u0967 \u0918\u0902\u091F\u093E", "Null": "{{count}} \u0918\u0902\u091F\u0947" }, wide: { "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E", "Bool(false)": "\u0967 \u092E\u093F\u0928\u091F", "Bool(false)": "{{count}} \u092E\u093F\u0928\u091F", "Bool(false)": "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E", "Bool(false)": "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947", "Null": "\u0967 \u0918\u0902\u091F\u093E", "Null": "{{count}} \u0918\u0902\u091F\u0947" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
