// Module ID: 3335
// Function ID: 26149
// Dependencies: []

// Module 3335
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    const NumberResult = Number(arg0);
    const result = NumberResult % 100;
    if (result > 20) {
      const result1 = result % 10;
      return NumberResult + ":a";
    }
    return NumberResult + ":e";
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: ["r", "isArray", "Icon", "channel_id"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [null, null, null, null, null, null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-838860306, -1409285481, 1493172549, -2013265125, -989855295, -1275068117, 486539707], short: [], abbreviated: [null, null, null, null, null, null, null], wide: ["a", "isArray", "size", "top", "r", "isArray", "cix"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: "1 \u0E1B\u0E35", y: "{{count}} \u0E1B\u0E35", isArray: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E1B\u0E35", colors: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E1B\u0E35", construct: "\u0E40\u0E01\u0E37\u0E2D\u0E1A 1 \u0E1B\u0E35", y: "\u0E40\u0E01\u0E37\u0E2D\u0E1A {{count}} \u0E1B\u0E35", isArray: 56, id: "500%" }, abbreviated: {}, wide: { unicodeVersion: "<string:843186178>", y: "<string:1593836129>", isArray: "NavigationRouteContext", colors: "EXYNOS", construct: "screensEnabled", y: "<string:1153585664>", isArray: "<string:4274930882>", id: "<string:4274847746>" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
