// Module ID: 3269
// Function ID: 25977
// Dependencies: []

// Module 3269
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
obj.era = obj.default({ values: { narrow: ["y", "diagnoseSdkConnectivity"], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [false, null, null, null], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  },
  formattingValues: { narrow: ["Array", "isArray", "then", "Object"], abbreviated: ["Array", "isArray", "cix", "y"], wide: [true, true, true, true] },
  defaultFormattingWidth: "wide"
});
obj.month = obj.default({ values: { narrow: [true, true, true, true, true, true, true, true, true, true, true, null], abbreviated: [], wide: [null, null, null, null, false, false, false, false, false, false, false, false] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: [503644164, 911278084, 742212356, 530907140, 494469124, 692191236, -2080374002], abbreviated: [503644164, 911278084, 742212356, 530907140, 494469124, 692191236, -2080374002], wide: [false, false, false, false, false, false, false] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: "m.", y: "p.", isArray: "mezzanotte", colors: "mezzogiorno", construct: "di mattina", y: "del pomeriggio", isArray: "di sera", id: "di notte" }, abbreviated: { unicodeVersion: "m.", y: "p.", isArray: "mezzanotte", colors: "mezzogiorno", construct: "di mattina", y: "del pomeriggio", isArray: "di sera", id: "di notte" }, wide: { unicodeVersion: "AM", y: "PM", isArray: "mezzanotte", colors: "mezzogiorno", construct: "di mattina", y: "del pomeriggio", isArray: "di sera", id: "di notte" } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
