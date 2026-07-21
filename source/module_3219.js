// Module ID: 3219
// Function ID: 25849
// Dependencies: []

// Module 3219
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [50087680, 62869760] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: ["<string:3623879455>", "<string:1124074248>", "<string:1207960308>", "<string:1358955260>"], wide: ["<string:3623879455>", "<string:1124074248>", "<string:1207960308>", "<string:1358955260>"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [null, null, null, null, null, null, null], wide: ["a", "isArray", "accessibilityRole", "children", "r", "body", "ti"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: null, y: null, isArray: null, colors: null, construct: null, y: null, isArray: null, id: null }, abbreviated: { unicodeVersion: null, y: null, isArray: null, colors: null, construct: null, y: null, isArray: null, id: null }, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { unicodeVersion: null, y: null, isArray: null, colors: null, construct: null, y: null, isArray: null, id: null }, abbreviated: { unicodeVersion: null, y: null, isArray: null, colors: null, construct: null, y: null, isArray: null, id: null }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
