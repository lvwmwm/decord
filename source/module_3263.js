// Module ID: 3263
// Function ID: 25956
// Dependencies: []

// Module 3263
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
obj.era = obj.default({ values: { narrow: [194268160, 194379779], abbreviated: [true, true], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [1409286581, 1463057694, 1463768885, 35128321], abbreviated: [], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["ie.", "isz.", "i. e.", "i. sz.", "Krisztus el\u0151tt", "id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint", "\u00E1lmos", "alszik", "alv\u00E1s", "alv\u00F3 arc", "arc", "f\u00E1radt"], wide: [true, true, true, true, true, true, true, true, true, true, true, null] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: ["ie.", "isz.", "i. e.", "i. sz.", "Krisztus el\u0151tt", "id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint", "\u00E1lmos", "alszik", "alv\u00E1s", "alv\u00F3 arc", "arc", "f\u00E1radt"], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: { <string:13107200>: null, <string:13303808>: null, <string:13369344>: null, <string:13631488>: null, <string:13893632>: null, <string:14024704>: null, <string:14286848>: null, <string:14548992>: null } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: { <string:13107200>: null, <string:13303808>: null, <string:13369344>: null, <string:13631488>: null, <string:13893632>: null, <string:14024704>: null, <string:14286848>: null, <string:14548992>: null } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
