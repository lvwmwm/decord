// Module ID: 3651
// Function ID: 27951
// Dependencies: []

// Module 3651
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    const StringResult = String(unit);
    const NumberResult = Number(arg0);
    if ("date" === StringResult) {
      if (3 === NumberResult) {
        let str5 = "-\u0454";
      } else {
        str5 = "-\u0435";
      }
      let str3 = str5;
    } else {
      if ("minute" !== StringResult) {
        if ("second" !== StringResult) {
          str3 = "-\u0439";
        }
      }
      str3 = "-\u0430";
    }
    return NumberResult + str3;
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: [null, null], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [true, true, true, true], wide: ["<string:80462592>", "<string:80461568>", "<string:80460800>", "<string:59695104>"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [null, null, null, null, null, null, null, null, null, null, null, null], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [null, null, null, null, null, null, null, null, null, null, null, null], abbreviated: [], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000694614388448652, -0.00000000000000000000000000000000000000000008972325308973477, -168453688774835350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.00000000000000711088717316095, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000420189889285552, -2.001536838710462, -10391627576317852000000000000000000], short: [], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: "a", body: "__DISCORD_RNGH_USE_LAYOUT_EFFECT__", PX_8: "removeRecord", y: "isArray", isArray: "isArray", accessibilityRole: "isArray", useStateFromStores: "isArray", lj: "isArray" }, abbreviated: { Text: "a", body: "__DISCORD_RNGH_USE_LAYOUT_EFFECT__", PX_8: "removeRecord", y: "isArray", isArray: "isArray", accessibilityRole: "isArray", useStateFromStores: "isArray", lj: "isArray" }, wide: {} }, defaultWidth: "any", formattingValues: { narrow: {}, abbreviated: {}, wide: { Text: "tr", body: "sg", PX_8: "ch", y: "t\u1ED1i", isArray: "\u0111\u00EAm", accessibilityRole: "AM", useStateFromStores: "PM", lj: "n\u1EEDa \u0111\u00EAm" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
