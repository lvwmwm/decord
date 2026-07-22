// Module ID: 3311
// Function ID: 26085
// Dependencies: []

// Module 3311
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [null, null, null, null], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [1409548289, 2072117251, 1409613826, -1575813117, 1409744898, -1305935869, 827392001, 187720193, 1677697105, 1109274671, 164503, 164504], abbreviated: ["n", "p", "w", "\u015B", "c", "p", "s", "antes de cristo", "depois de cristo", "5", "5:00", "clock"], wide: [null, false, false, false, false, null, null, "a", "m", "j", "j", "a"] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: ["n", "p", "w", "\u015B", "c", "p", "s", "antes de cristo", "depois de cristo", "5", "5:00", "clock"], wide: [false, false, false, false, false, false, false, "y", "isArray", "useState", "PX_16", null] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: ["T", "Q", "Q", "S", "S", "dom", "seg"], abbreviated: [false, false, false, false, false, false, false], wide: [true, true, true, true, true, true, true] }, defaultWidth: "wide", formattingValues: { narrow: [true, true, true, true, true, true, true], short: ["T", "Q", "Q", "S", "S", "dom", "seg"], abbreviated: [false, false, false, false, false, false, false], wide: [true, true, true, true, true, true, true] }, defaultFormattingWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: false, body: false, PX_8: false, y: false, isArray: false, accessibilityRole: false, useStateFromStores: false, lj: false }, abbreviated: { Text: null, body: null, PX_8: 1, y: 4, isArray: 2, accessibilityRole: "es-AR", useStateFromStores: "es-419", lj: null }, wide: { Text: null, body: null, PX_8: 1, y: 4, isArray: 2, accessibilityRole: "es-AR", useStateFromStores: "es-419", lj: null } }, defaultWidth: "wide", formattingValues: { narrow: { Text: 1946157652, body: -1275067820, PX_8: 1375732356, y: 167907681, isArray: "meia-noite", accessibilityRole: "meio-dia", useStateFromStores: "manh\u00E3", lj: "tarde" }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
