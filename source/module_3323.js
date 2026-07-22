// Module ID: 3323
// Function ID: 26114
// Dependencies: []

// Module 3323
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
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [true, true], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [], wide: [false, false, false, false] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410"], wide: ["<string:59480064>", "<string:272518144>", "<string:271908867>", "<string:228458499>", "<string:272695299>", "<string:229113859>", "<string:2490236931>", "<string:2490302467>", "<string:272891907>", "<string:272957443>", "<string:273022979>", "<string:273088515>"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:1378377985>", "<string:67699333>", "<string:32203073>", "<string:2490126848>", "<string:2201634502>", "<string:2201681922>", "<string:2201747458>"], short: [], abbreviated: [null, null, null, null, null, null, null], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { Text: "center", body: "center", PX_8: 1967259651, y: -1302659069, isArray: 1967194115, accessibilityRole: 927137795, useStateFromStores: 1308623733, lj: 822084469 }, wide: { Text: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000480906339477192, body: "<string:838861685>", PX_8: "<string:1124074357>", y: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", isArray: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", accessibilityRole: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442", useStateFromStores: "<string:58059331>", lj: "<string:58061312>" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { Text: "center", body: "center", PX_8: 1967259651, y: -1302659069, isArray: 1967194115, accessibilityRole: 927137795, useStateFromStores: 1308623733, lj: 822084469 }, wide: { Text: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000480906339477192, body: "<string:838861685>", PX_8: "<string:1124074357>", y: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", isArray: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", accessibilityRole: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442", useStateFromStores: "<string:58059331>", lj: "<string:58061312>" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
