// Module ID: 3335
// Function ID: 26149
// Dependencies: []

// Module 3335
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
      return NumberResult + ":a";
    }
    return NumberResult + ":e";
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["imageContainerExpiring", "locke", "imageContainerExpiring", "UNKNOWN_PLATFORM"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["bounciness", "num", "targetFrames", "night", "convertSkemaError", "../lib/braintree-error", "targetFrames", "sleep", "_findItemIndexWithKey", "Iterator", "targetFrames", "zzz"], abbreviated: [null, null, null, null, null, null, null, null, null, null, null, null], wide: [true, true, true, null, null, null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["a dormir", "buenas noches", "cama", "cansancio", "descansar", "dormir", "hotel"], short: [], abbreviated: [null, null, null, null, null, null, null], wide: ["a", "isArray", "spriteIndex", "top", "r", "isArray", "content"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: "1 \u0E1B\u0E35", body: "{{count}} \u0E1B\u0E35", PX_8: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E1B\u0E35", y: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E1B\u0E35", isArray: "\u0E40\u0E01\u0E37\u0E2D\u0E1A 1 \u0E1B\u0E35", accessibilityRole: "\u0E40\u0E01\u0E37\u0E2D\u0E1A {{count}} \u0E1B\u0E35", useStateFromStores: 88, lj: 88 }, abbreviated: {}, wide: { Text: "displayName", body: "uri", PX_8: "r", y: "isArray", isArray: "_oneway", accessibilityRole: "st", useStateFromStores: "Array", lj: "isArray" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: { Text: false, body: false, PX_8: false, y: false, isArray: false, accessibilityRole: false, useStateFromStores: false, lj: false } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
