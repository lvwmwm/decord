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
obj.era = obj.default({ values: { narrow: ["r", "crc"], abbreviated: ["r", "crc"], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["Array", "INDEX_BOUNDS_HEIGHT_OFFSET", "Array", "enablePreparedTextLayout", "onBeforeJumpToMessage", "halfCeil", "%Math.sign%"], short: ["Array", "INDEX_BOUNDS_HEIGHT_OFFSET", "Array", "enablePreparedTextLayout", "onBeforeJumpToMessage", "halfCeil", "%Math.sign%"], abbreviated: ["Array", "INDEX_BOUNDS_HEIGHT_OFFSET", "Array", "enablePreparedTextLayout", "onBeforeJumpToMessage", "halfCeil", "%Math.sign%"], wide: [-1560280306, 1241514363, 1644167644, -33553970, -419430139, 1778385273, "<string:2722889730>"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
