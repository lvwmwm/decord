// Module ID: 3251
// Function ID: 25926
// Dependencies: []

// Module 3251
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = { narrow: [], abbreviated: [], wide: ["r", "isArray", "props", "done", "Array", "isArray", "accessibilityRole", "useCallback", "__closure", "DARK", "hasDiversityParent", "Array"] };
const obj2 = { narrow: [true, true, true, true, true, true, true], short: [null, null, null, null, null, null, null], abbreviated: [], wide: [] };
const obj4 = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: [-335216639, 1921122306], abbreviated: [-335216639, 1921122306], wide: [] }, defaultWidth: "wide" }),
  quarter: obj.default({
    values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: ["zzz", "<string:3959685122>", "<string:2197553154>", "<string:1595998210>"] },
    defaultWidth: "wide",
    argumentCallback(arg0) {
      return arg0 - 1;
    }
  }),
  month: obj.default({ values: obj, defaultWidth: "wide", formattingValues: { narrow: obj.narrow, abbreviated: obj.abbreviated, wide: [] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: obj2, defaultWidth: "wide", formattingValues: { narrow: obj2.narrow, short: obj2.short, abbreviated: obj2.abbreviated, wide: [] }, defaultFormattingWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Null": true, "Null": true }, abbreviated: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Null": true, "Null": true }, wide: { "Bool(false)": "r", "Bool(false)": "isArray", "Bool(false)": "backgroundColor", "Bool(false)": "y", "Bool(false)": "Array", "Bool(false)": "isArray", "Null": "now", "Null": "x" } }, defaultWidth: "wide" })
};

export default obj4;
export default exports.default;
