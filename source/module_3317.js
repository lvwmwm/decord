// Module ID: 3317
// Function ID: 26100
// Dependencies: []

// Module 3317
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("week" === unit) {
      let text = `${tmp2}ª`;
    } else {
      text = `${tmp2}º`;
    }
    return text;
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [1997947394, 1339424771] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [null, null, null, null, true, true, null, null, "kh\u00F4ng quan t\u00E2m", "m\u1EB7t", "m\u1EB7t \u0111ang ng\u1EE7", "m\u1EC7t m\u1ECFi"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie"], wide: ["<string:4194305170>", "<string:4211081858>", "<string:4227859074>", "<string:4244636290>", "<string:1090519682>", "du", "<string:1829034579>"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: false, body: false, PX_8: false, y: false, isArray: false, accessibilityRole: false, useStateFromStores: false, lj: false }, abbreviated: { Text: "isArray", body: "useMemo", PX_8: "hd", y: "Array", isArray: "isArray", accessibilityRole: "x", useStateFromStores: "delete", lj: "i" }, wide: { Text: 1358954496, body: 712459499, PX_8: 712507394, y: 20054018, isArray: -955645950, accessibilityRole: -61800447, useStateFromStores: 1077817, lj: 1572864 } }, defaultWidth: "wide", formattingValues: { narrow: { Text: "Set", body: "title", PX_8: "r", y: "isArray", isArray: "Set", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
