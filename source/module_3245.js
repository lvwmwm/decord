// Module ID: 3245
// Function ID: 25904
// Dependencies: []

// Module 3245
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "\u00BA";
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: [], wide: ["r", "threadEmbed", "Array", "eligiblePromptTypes"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return Number(arg0) - 1;
  }
});
obj.month = obj.default({ values: { narrow: [null, null, null, null, null, null, null, null, null, null, null, null], abbreviated: [637534988, -570425048, 218104118, -1493171850, 855638297, 1275069123, 85762, 108993, 133589, 103622, 85107, 198935], wide: ["r", "isArray", "t", "to", "Array", "isArray", "source", "d", "Array", "isArray", "l", "text"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:1378377985>", "<string:67109513>", "<string:1229379153>", "<string:1241514627>", "<string:1258291843>", "<string:1275069059>", "<string:1291846275>"], short: [null, null, null, null, null, null, null], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: null, <string:13303808>: 16, <string:13369344>: 5, <string:13631488>: false, <string:13893632>: 79.82, <string:14024704>: null, <string:14286848>: 1, <string:14548992>: "row" }, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
