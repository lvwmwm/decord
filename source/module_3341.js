// Module ID: 3341
// Function ID: 26158
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
obj.era = obj.default({ values: { narrow: [false, false], abbreviated: [true, true], wide: [false, false] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: [false, false, false, false] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
