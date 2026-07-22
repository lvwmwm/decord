// Module ID: 3329
// Function ID: 26135
// Dependencies: []

// Module 3329
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    let str = "-\u0435";
    if ("date" !== unit) {
      if ("week" !== unit) {
        if ("minute" !== unit) {
          let str4 = "-\u0439";
        }
        str = str4;
      }
      str4 = "-\u044F";
    }
    return Number(arg0) + str;
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [], wide: ["<string:2717909776>", "<string:4160750349>"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [true, true, true, true], wide: ["<string:80462592>", "<string:80461568>", "<string:80460800>", "<string:59695104>"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [], wide: [null, null, null, null, null, null, null, null, null, null, null, null] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: ["s\u00F6", "m\u00E5", "ti", "on", "to", "fr", "l\u00F6"], abbreviated: [null, null, null, "isArray", "current", "alignItems", "y"], wide: [1764753411, 504496130, 1414529025, 42074113, 217251841, 793837571, -699711231] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "any", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
