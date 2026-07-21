// Module ID: 3275
// Function ID: 25989
// Dependencies: []

// Module 3275
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(Number(arg0));
  }
};
obj.era = obj.default({ values: { narrow: [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002317454600500783, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000231832178108339], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["s\u00E1", "dom", "lun", "mar"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [49546240, 49546752, -280475904, -283377662, -237109246, -237240318, -237633534, -235995134, -238354430, -1840840702, -1811938321, -1795161105] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [true, true, true, true, true, true, true], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": "a", "Bool(false)": "continuousCheckout", "Bool(false)": "COMPOSED_PATH_KEY", "Bool(false)": "getUTCDay", "Bool(false)": "_children", "Bool(false)": "cellIndex", "Null": "promotionKey", "Null": "r" }, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": 2, "Bool(false)": "dashed", "Bool(false)": "center", "Bool(false)": "center", "Bool(false)": "unicodeVersion", "Bool(false)": "a", "Null": "isArray", "Null": "prototype" }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
