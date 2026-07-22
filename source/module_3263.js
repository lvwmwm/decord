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
obj.era = obj.default({ values: { narrow: ["<string:3325886465>", "<string:846266370>"], abbreviated: [-1879047630, 203246592], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [true, true, true, true], wide: ["round", "r", "isArray", "construct"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["<string:71434242>", "<string:117441261>", "<string:1124074221>", "addormentato", "arredamento", "dormire", "<string:1188483665>", "letto", "notte", "persona a letto", "sonno", "stanca"] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [], wide: ["r", "isArray", "accessibilityRole", "bm", "__closure", "__d", "useRef", "r", "isArray", "createStyles", "useState", "r"] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: "DARK", body: "title", PX_8: "r", y: "isArray", isArray: "DARK", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" }, abbreviated: { Text: "DARK", body: "title", PX_8: "r", y: "isArray", isArray: "DARK", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" }, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { Text: "DARK", body: "title", PX_8: "r", y: "isArray", isArray: "DARK", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" }, abbreviated: { Text: "DARK", body: "title", PX_8: "r", y: "isArray", isArray: "DARK", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
