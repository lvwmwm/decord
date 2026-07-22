// Module ID: 3245
// Function ID: 25909
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
  values: { narrow: [], abbreviated: [], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return Number(arg0) - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:1378377985>", "<string:67699333>", "<string:32203073>", "<string:2490126848>", "<string:2201634502>", "<string:2201681922>", "<string:2201747458>"], short: [], abbreviated: [15186411071651807000000000000000000000000000000000000000000000000000000000000000000, 8595204136.87697, 36916120907087370000, 680982244708364000000000000000000000000, 10390964543369563000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002873436941153754, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002867983412028824], wide: ["<string:1207960195>", "<string:1241514627>", "<string:1191182979>", "sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { Text: "call", body: "h", PX_8: "r", y: "isArray", isArray: "s", accessibilityRole: "st", useStateFromStores: "Array", lj: "isArray" }, abbreviated: { Text: true, body: 12.1, PX_8: 94, y: null, isArray: 1, accessibilityRole: "column", useStateFromStores: "stretch", lj: "center" }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
