// Module ID: 3311
// Function ID: 26085
// Dependencies: []

// Module 3311
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: [true, true, true, true], wide: [true, true, true, true] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [], wide: [true, true, true, true, true, true, true, true, true, true, true, true] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [false, false, false, false, false, false, false], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [], short: [], abbreviated: [false, false, false, false, false, false, false], wide: [] }, defaultFormattingWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { unicodeVersion: "<string:3897032705>", y: "<string:1140850982>", isArray: "<string:3674210626>", colors: "<string:3388998300>", construct: "<string:117441014>", y: "<string:989856496>", isArray: "<string:989856340>", id: "<string:3137339988>" }, wide: { unicodeVersion: "<string:3897032705>", y: "<string:1140850982>", isArray: "<string:3674210626>", colors: "<string:3388998300>", construct: "<string:117441014>", y: "<string:989856496>", isArray: "<string:989856340>", id: "<string:3137339988>" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
