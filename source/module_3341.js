// Module ID: 3341
// Function ID: 26163
// Dependencies: []

// Module 3341
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
obj.era = obj.default({ values: { narrow: [false, false], abbreviated: [null, null], wide: [true, true] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: ["r", "isArray", "Icon", "channel_id"], wide: [1659633665, -22151167, 1416888321, -323092479] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: false, y: false, isArray: false, colors: false, construct: false, y: false, isArray: false, id: false }, abbreviated: { unicodeVersion: false, y: false, isArray: false, colors: false, construct: false, y: false, isArray: false, id: false }, wide: { unicodeVersion: false, y: false, isArray: false, colors: false, construct: false, y: false, isArray: false, id: false } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
