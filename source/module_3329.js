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
obj.era = obj.default({ values: { narrow: [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000496467009213705, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000424581649946671], abbreviated: ["a", "isArray"], wide: [true, true] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: ["a", "isArray", "uri", "fill"], wide: [true, true, true, true] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [null, null, null, null, null, null, null, null, null, null, null, null], abbreviated: [51198464, 51198976, 51199488, 51196672, -1742649600, 220790787, 221052931, -1742536701, 221315075, -1742471165, -1742405629, -163512317], wide: [827392002, 112411650, 496369667, -2017263612, -708378622, 1464926209, 1714176757, 1373831172, -1622081533, 487539527, 676790276, 1371668481] }, defaultWidth: "wide", formattingValues: { narrow: [null, null, null, null, null, null, null, null, null, null, null, null], abbreviated: ["r", "f\u00F6re Kristus", "efter Kristus", "1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet", "jan.", "feb.", "mars", "apr.", "maj"], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: ["s\u00F6", "m\u00E5", "ti", "on", "to", "fr", "l\u00F6"], abbreviated: [1448280066, 491454468, 500826116, 849412097, 216530948, -431554557, -419429620], wide: ["a", "isArray", "getChannel", "value", "Array", "isArray", "ct"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: 859898112, y: 285213928, isArray: 815361, colors: 1375797248, construct: 1153582274, y: 132521, isArray: 132522, id: 131488 }, abbreviated: { unicodeVersion: 859898112, y: 285213928, isArray: 815361, colors: 1375797248, construct: 1153582274, y: 132521, isArray: 132522, id: 131488 }, wide: {} }, defaultWidth: "any", formattingValues: { narrow: {}, abbreviated: {}, wide: { unicodeVersion: false, y: false, isArray: false, colors: false, construct: false, y: false, isArray: false, id: false } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
