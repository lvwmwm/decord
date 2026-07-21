// Module ID: 3329
// Function ID: 26130
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
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [], wide: ["a", "6ZyNH/"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [true, true, true, true], wide: ["<string:80413184>", "<string:80412160>", "<string:80411392>", "<string:59666432>"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["<string:911278082>", "<string:105726978>", "<string:489291779>", "<string:2274820100>", "<string:3583442946>", "<string:1263599617>", "<string:1619739381>", "<string:1367146500>", "<string:1079050243>", "<string:480592712>", "<string:1127874564>", "<string:1369309185>"] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: ["r", "f\u00F6re Kristus", "efter Kristus", "1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet", "jan.", "feb.", "mars", "apr.", "maj"], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: ["s\u00F6", "m\u00E5", "ti", "on", "to", "fr", "l\u00F6"], abbreviated: [true, true, true, true, true, true, true], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "any", formattingValues: { narrow: {}, abbreviated: {}, wide: { "Bool(false)": "<string:2487746561>", "Bool(false)": "<string:3808428398>", "Bool(false)": "<string:3741319592>", "Bool(false)": "<string:2852127140>", "Bool(false)": "<string:3472884298>", "Bool(false)": "<string:2936013191>", "Null": "Array", "Null": "isArray" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
