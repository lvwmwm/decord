// Module ID: 3263
// Function ID: 25961
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
obj.era = obj.default({ values: { narrow: ["sije\u010Dnja", "velja\u010De"], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [true, true, true, true], wide: ["r", "GOOGLE_GENAI_INTEGRATION_NAME", "r", "\u021A"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["<string:1816264706>", "<string:1040187983>", "<string:1107296844>", "Krisztus el\u0151tt", "id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint", "<string:36776779>", "<string:36781312>", "<string:20551424>", "<string:32439808>", "<string:27151616>", "<string:35765248>", "<string:48553472>"], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: ["<string:1816264706>", "<string:1040187983>", "<string:1107296844>", "Krisztus el\u0151tt", "id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint", "<string:36776779>", "<string:36781312>", "<string:20551424>", "<string:32439808>", "<string:27151616>", "<string:35765248>", "<string:48553472>"], wide: ["hotel", "letto", "notte", "persona a letto", "sonno", "stanca", "stanco", "zzz", 15188063935879123000000000000000000000000000000000000000000000000000000000000000000, 36920189787305850000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002931600845917525, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003550289939029716] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [true, true, true, true, true, true, true], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: true, y: true, isArray: true, colors: true, construct: true, y: true, isArray: true, id: true }, abbreviated: { unicodeVersion: true, y: true, isArray: true, colors: true, construct: true, y: true, isArray: true, id: true }, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { unicodeVersion: true, y: true, isArray: true, colors: true, construct: true, y: true, isArray: true, id: true }, abbreviated: { unicodeVersion: true, y: true, isArray: true, colors: true, construct: true, y: true, isArray: true, id: true }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
