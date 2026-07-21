// Module ID: 3299
// Function ID: 26055
// Dependencies: []

// Module 3299
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "e";
  }
};
obj.era = obj.default({ values: { narrow: ["ma", "di"], abbreviated: [null, null], wide: ["<string:1171850257>", "<string:4165402900>"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: [], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["type", "filter", "pos", "ip", "r", "isArray", "props", "ip", "r", "isArray", "type", "disabled"], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [null, null, null, null, null, null, null], abbreviated: [], wide: ["<string:1157103619>", "<string:330694657>", "<string:1689518083>", "<string:1045495811>", "<string:23541828>", "<string:23541504>", "<string:23541248>"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: "33.33%", y: "center", isArray: "center", colors: true, construct: true, y: true, isArray: true, id: true }, abbreviated: { unicodeVersion: "33.33%", y: "center", isArray: "center", colors: true, construct: true, y: true, isArray: true, id: true }, wide: { unicodeVersion: "33.33%", y: "center", isArray: "center", colors: true, construct: true, y: true, isArray: true, id: true } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
