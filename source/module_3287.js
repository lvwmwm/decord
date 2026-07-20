// Module ID: 3287
// Function ID: 26017
// Dependencies: []

// Module 3287
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    const StringResult = String(unit);
    if ("minute" !== StringResult) {
      if ("second" !== StringResult) {
        if ("date" === StringResult) {
          return NumberResult + "\uC77C";
        } else {
          return NumberResult + "\uBC88\uC9F8";
        }
      }
    }
    return String(NumberResult);
  }
};
obj.era = obj.default({ values: { narrow: [true, true], abbreviated: [true, true], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: ["r", "IMPLICIT", "r", "pako"], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: [null, null, null, null, null, null, null], abbreviated: [null, null, null, null, null, null, null], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
