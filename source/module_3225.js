// Module ID: 3225
// Function ID: 25863
// Dependencies: []

// Module 3225
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
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [-196673533, 603980556] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: [], wide: ["r", "GOOGLE_GENAI_INTEGRATION_NAME", "r", "\u021A"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-838860306, -1409285481, 1493172549, -2013265125, -989855295, -1275068117, 486539707], short: ["<string:19645696>", "<string:29078528>", "<string:37231872>", "<string:54252800>", "<string:1144934656>", "1. Quartal", "2. Quartal"], abbreviated: ["allowEmpty", "%BigInt%", "setMaxListeners", "isNaN", "SOLID", "P", "_headers"], wide: [null, null, null, null, false, false, false] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { unicodeVersion: 26148096, y: -197705216, isArray: -1895956479, colors: -1623064575, construct: 2097152344, y: 1107296801, isArray: 88223, id: 139646 }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
