// Module ID: 3219
// Function ID: 25844
// Dependencies: []

// Module 3219
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: [], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [true, true, true, true, true, true, true, true, true, true, true, true], abbreviated: [50055424, -167161600, 55951943, 55952384, 55952640, 55952896, 50895616, 50837248, 28490496, -2098707968, 1050279938, -230555647], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [true, true, true, true, true, true, true, true, true, true, true, true], abbreviated: [50055424, -167161600, 55951943, 55952384, 55952640, 55952896, 50895616, 50837248, 28490496, -2098707968, 1050279938, -230555647], wide: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [true, true, true, true, true, true, true], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: "delayV", <string:13303808>: "A", <string:13369344>: "topic", <string:13631488>: "isArrayBufferToString", <string:13893632>: "on", <string:14024704>: "%MapIteratorPrototype%", <string:14286848>: "isArray", <string:14548992>: "DEFAULT_NAVIGATION_SPAN_NAME" }, abbreviated: { <string:13107200>: "delayV", <string:13303808>: "A", <string:13369344>: "topic", <string:13631488>: "isArrayBufferToString", <string:13893632>: "on", <string:14024704>: "%MapIteratorPrototype%", <string:14286848>: "isArray", <string:14548992>: "DEFAULT_NAVIGATION_SPAN_NAME" }, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { <string:13107200>: "delayV", <string:13303808>: "A", <string:13369344>: "topic", <string:13631488>: "isArrayBufferToString", <string:13893632>: "on", <string:14024704>: "%MapIteratorPrototype%", <string:14286848>: "isArray", <string:14548992>: "DEFAULT_NAVIGATION_SPAN_NAME" }, abbreviated: { <string:13107200>: "delayV", <string:13303808>: "A", <string:13369344>: "topic", <string:13631488>: "isArrayBufferToString", <string:13893632>: "on", <string:14024704>: "%MapIteratorPrototype%", <string:14286848>: "isArray", <string:14548992>: "DEFAULT_NAVIGATION_SPAN_NAME" }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
