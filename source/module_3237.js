// Module ID: 3237
// Function ID: 25887
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
obj.era = obj.default({ values: { narrow: [], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: [], wide: ["<string:49773056>", "<string:1143693568>", "\u03A4", "\u03A0"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [false, false, false, false, false, false, false], short: [], abbreviated: [], wide: ["y", "Tag", "y", "getUserVerificationDeeplink", "Pressable", "handleCopyText", "Pressable"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { <string:13107200>: 6, <string:13303808>: 6, <string:13369344>: null, <string:13631488>: "\u{1F629}", <string:13893632>: 6, <string:14024704>: 48, <string:14286848>: "center", <string:14548992>: 1 }, wide: { <string:13107200>: 6, <string:13303808>: 6, <string:13369344>: null, <string:13631488>: "\u{1F629}", <string:13893632>: 6, <string:14024704>: 48, <string:14286848>: "center", <string:14548992>: 1 } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
