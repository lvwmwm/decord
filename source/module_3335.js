// Module ID: 3335
// Function ID: 26144
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
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [true, "BA", "da", "DEPRECATED_KEYSPACES", "FEATURE", "a", "TU", "a", "EXPRESSIVE_GRADIENT_PINK_END", "a", "CHECKPOINT_PERSONA_COLORS", "a"], wide: [false, false, false, false, false, false, false, false, false, false, false, false] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-5166729548027175000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, true, true, true, true, true, true], short: [], abbreviated: [null, null, null, null, null, null, null], wide: ["a", "isArray", "construct", "top", "r", "isArray", "y"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": "1 \u0E1B\u0E35", "Bool(false)": "{{count}} \u0E1B\u0E35", "Bool(false)": "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E1B\u0E35", "Bool(false)": "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E1B\u0E35", "Bool(false)": "\u0E40\u0E01\u0E37\u0E2D\u0E1A 1 \u0E1B\u0E35", "Bool(false)": "\u0E40\u0E01\u0E37\u0E2D\u0E1A {{count}} \u0E1B\u0E35", "Null": "\u0E27\u0E31\u0E19EEEE\u0E17\u0E35\u0E48 do MMMM y", "Null": "do MMMM y" }, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Null": false, "Null": false } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
