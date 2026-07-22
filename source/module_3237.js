// Module ID: 3237
// Function ID: 25892
// Dependencies: []

// Module 3237
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
    let str = "\u03BF\u03C2";
    if ("year" !== unit) {
      str = "\u03BF\u03C2";
      if ("month" !== unit) {
        if ("week" !== unit) {
          if ("dayOfYear" !== unit) {
            if ("day" !== unit) {
              if ("hour" !== unit) {
                let str7 = "\u03BF";
              }
              str = str7;
            }
          }
        }
        str7 = "\u03B7";
      }
    }
    return Number(arg0) + str;
  }
};
obj.era = obj.default({ values: { narrow: [2035875843, 2036006915], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["\u03A4", "\u03A0", "\u03A0", "\u03A3"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [true, true, true, true, true, true, true, true, true, true, true, true], wide: ["<string:54659328>", "<string:32254464>", "<string:1147162880>", "1\u00BA trimestre", "2\u00BA trimestre", "3\u00BA trimestre", "4\u00BA trimestre", "<string:2907836257>", "<string:1627530241>", "<string:35934979>", "<string:39322200>", "<string:220070755>"] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: ["isArray", "uri", "resolve", "Array", "isArray", "accessible", "status"], abbreviated: [], wide: [-67700000021731620000000000, -44628831287712900000000000000000000000000000, -191679372266676200000000000000000000000000000000000000, -3535860363904785000000000000000000000000000000000000000000000000000000000, -15186404795811030000000000000000000000000000000000000000000000000000000000000000000, -65225112427493150000000000000000000000000000000000000000000000000000000000000000000000000000, -2.0012260973456373] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: "isArray", body: "isArray", PX_8: "isArray", y: "Array", isArray: 1, accessibilityRole: null, useStateFromStores: "flex", lj: "column" }, abbreviated: {}, wide: {} }, defaultWidth: "wide" });

export default obj;
export default exports.default;
