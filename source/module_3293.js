// Module ID: 3293
// Function ID: 26036
// Dependencies: []

// Module 3293
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "-oji";
  }
};
obj.era = obj.default({ values: { narrow: ["sausis", "vasaris"], abbreviated: ["sausis", "vasaris"], wide: [-889192032, 1560281375] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: [-0.000000000000000000000000000000000000000000000000000000000000000000000000000017280747189780522, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000236864166142644, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000356227921477775, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000423919587243683], wide: [null, "T", "K", "P"] },
  defaultWidth: "wide",
  formattingValues: { narrow: [false, false, false, false], abbreviated: [], wide: [null, "T", "K", "P"] },
  defaultFormattingWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["getAccessibleGuildOfficialTextColor", "lte", "dismissedEventIds", "LI", "MUR", "zzz", "clearText", "r", "enableVoiceActivityNotifications", "Array", "UNREAD_GREY", "Array"] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide", formattingValues: { narrow: [], short: [], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultFormattingWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: null, <string:13303808>: null, <string:13369344>: null, <string:13631488>: null, <string:13893632>: null, <string:14024704>: null, <string:14286848>: null, <string:14548992>: null }, abbreviated: { <string:13107200>: false, <string:13303808>: false, <string:13369344>: false, <string:13631488>: false, <string:13893632>: false, <string:14024704>: false, <string:14286848>: false, <string:14548992>: false }, wide: { <string:13107200>: false, <string:13303808>: false, <string:13369344>: false, <string:13631488>: false, <string:13893632>: false, <string:14024704>: false, <string:14286848>: false, <string:14548992>: false } }, defaultWidth: "wide", formattingValues: { narrow: { <string:13107200>: null, <string:13303808>: null, <string:13369344>: "before", <string:13631488>: null, <string:13893632>: null, <string:14024704>: true, <string:14286848>: true, <string:14548992>: "password" }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
