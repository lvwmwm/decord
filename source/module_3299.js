// Module ID: 3299
// Function ID: 26050
// Dependencies: []

// Module 3299
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "e";
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["Array", "isArray", "x", "flexDirection"], wide: ["r", "isArray", "accessibilityRole", "lc"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [null, null, null, null, null, null, null, null, null, null, null, null], wide: [null, null, null, null, null, null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [true, true, true, true, true, true, true] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide" });

export default obj;
export default exports.default;
