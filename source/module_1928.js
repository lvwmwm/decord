// Module ID: 1928
// Function ID: 21788
// Dependencies: []

// Module 1928
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    const NumberResult = Number(arg0);
    const result = NumberResult % 100;
    if (result > 20) {
      const result1 = result % 10;
      if (1 === result1) {
        return NumberResult + "st";
      } else if (2 === result1) {
        return NumberResult + "nd";
      } else if (3 === result1) {
        return NumberResult + "rd";
      }
    }
    return NumberResult + "th";
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: ["r", "validators"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["imageContainerExpiring", "locke", "imageContainerExpiring", "UNKNOWN_PLATFORM"], wide: ["HAVEN_DISCONNECT", "o", "a", "isArray"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["bounciness", "num", "targetFrames", "night", "convertSkemaError", "../lib/braintree-error", "targetFrames", "sleep", "_findItemIndexWithKey", "Iterator", "targetFrames", "zzz"], abbreviated: [], wide: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "cara", "cara durmiendo", "dormido", "sue\u00F1o", "zzz", 823346595756444300000000000000000000000000000000000000000000000, 12563289287386380000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004245795279341505] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["r", "isArray", "_desired", "join", "o", "a", "isArray"], short: [], abbreviated: [null, null, null, null, null, null, null], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: 0.00000000000000000000000000000000000000000000000000000000000004667253317632887, body: 0.0000000000000000000000000000000000000007492573506792921, PX_8: 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, y: 0.000000000000000000000000000000000000000000000000000000000000041336278527542125, isArray: 241979899612687240000000000000000000000000000000000000000000000000000000000000000000, accessibilityRole: 0.0000000000000000000000000000000000000000000000000000000000000466726142658881, useStateFromStores: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000870422887652842, lj: -72460078556573560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, abbreviated: {}, wide: { Text: 41156609, body: 33554432, PX_8: 0, y: 16777216, isArray: 1090519040, accessibilityRole: 153904, useStateFromStores: 16413473, lj: 65536000 } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { Text: false, body: false, PX_8: false, y: false, isArray: null, accessibilityRole: null, useStateFromStores: null, lj: true }, wide: { Text: 600, body: true, PX_8: "/assets/.cache/intl/ZGVzaWdu", y: null, isArray: "0428a053ac70bfa6d33647148b36bffa", accessibilityRole: "es-ES.messages.0428a053ac70bfa6d33647148b36bffa.compiled.messages", useStateFromStores: "jsona", lj: "accent" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
