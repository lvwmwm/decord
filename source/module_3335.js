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
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: ["r", "IMPLICIT", "r", "pako"], wide: [-867106814, 64841028, 64541440, 64724736] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004456143132310851, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004241875101371775, 58840350721.52512, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001544558296959693, "good", "goodnight", "nap", "night", "sleep", "sleeping", "tired", "whatever"], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-1546188227, null, null, null, null, null, null], short: [], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: "1 \u0E1B\u0E35", <string:13303808>: "{{count}} \u0E1B\u0E35", <string:13369344>: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E1B\u0E35", <string:13631488>: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E1B\u0E35", <string:13893632>: "\u0E40\u0E01\u0E37\u0E2D\u0E1A 1 \u0E1B\u0E35", <string:14024704>: "\u0E40\u0E01\u0E37\u0E2D\u0E1A {{count}} \u0E1B\u0E35", <string:14286848>: "\u0E27\u0E31\u0E19EEEE\u0E17\u0E35\u0E48 do MMMM y", <string:14548992>: "do MMMM y" }, abbreviated: {}, wide: { <string:13107200>: 1978269699, <string:13303808>: -358547453, <string:13369344>: -358547454, <string:13631488>: 1946222594, <string:13893632>: 16, <string:14024704>: false, <string:14286848>: false, <string:14548992>: false } }, defaultWidth: "wide", formattingValues: { narrow: { <string:13107200>: "center", <string:13303808>: "center", <string:13369344>: "<string:3909092103>", <string:13631488>: "<string:3808428784>", <string:13893632>: "<string:3741319920>", <string:14024704>: "<string:2197816048>", <string:14286848>: "<string:1358955270>", <string:14548992>: "<string:24314392>" }, abbreviated: { <string:13107200>: "center", <string:13303808>: "center", <string:13369344>: "<string:3909092103>", <string:13631488>: "<string:3808428784>", <string:13893632>: "<string:3741319920>", <string:14024704>: "<string:2197816048>", <string:14286848>: "<string:1358955270>", <string:14548992>: "<string:24314392>" }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
