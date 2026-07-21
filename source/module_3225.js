// Module ID: 3225
// Function ID: 25858
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
obj.era = obj.default({ values: { narrow: [453426222303017500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003453203587287563], abbreviated: [null, null], wide: [210387204, -1991835645] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [], wide: ["r", "GIF_PICKER_AVATAR_OR_BANNER_MODAL", "r", "\u0129"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-5166729548027175000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, true, true, true, true, true, true], short: [1156665600, 149331, 93906, 127852, 136925, 41263169, -1286123264], abbreviated: [false, false, false, false, false, false, false], wide: [true, true, true, true, true, true, true] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Null": false, "Null": false }, abbreviated: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Null": false, "Null": false }, wide: { "Bool(false)": "<string:608305153>", "Bool(false)": "<string:3439329682>", "Bool(false)": "<string:1107296608>", "Bool(false)": "1 Jahr", "Bool(false)": "{{count}} Jahre", "Bool(false)": "<string:26355010>", "Null": "<string:23121664>", "Null": "<string:696336896>" } }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Null": false, "Null": false }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
