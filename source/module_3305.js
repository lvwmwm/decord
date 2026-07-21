// Module ID: 3305
// Function ID: 26064
// Dependencies: []

// Module 3305
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
  values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: ["r", "GIF_PICKER_AVATAR_OR_BANNER_MODAL", "r", "\u0129"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-5166729548027175000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, true, true, true, true, true, true], short: [1156665600, 149331, 93906, 127852, 136925, 41263169, -1286123264], abbreviated: [], wide: [true, true, true, true, true, true, true] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null, "Null": null }, abbreviated: {}, wide: { "Bool(false)": 116326403, "Bool(false)": -213712893, "Bool(false)": -1711275744, "Bool(false)": -1728052785, "Bool(false)": 1124073935, "Bool(false)": 87337, "Null": true, "Null": true } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
