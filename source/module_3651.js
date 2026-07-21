// Module ID: 3651
// Function ID: 27946
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
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [-1762197503, -1723727871] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [true, true, true, true], wide: ["<string:80413184>", "<string:80412160>", "<string:80411392>", "<string:59666432>"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [true, true, true, true, true, true, true, true, true, true, true, true], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [true, true, true, true, true, true, true, true, true, true, true, true], abbreviated: [], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": "a", "Bool(false)": "Avatar05/img", "Bool(false)": "FormatNumeric", "Bool(false)": "BACKGROUND_GRADIENT_DARK_OPACITY", "Bool(false)": "FormatNumeric", "Bool(false)": "lastShownFriendsListGiftIntents", "Null": "accessibleDismiss", "Null": "tea" }, abbreviated: { "Bool(false)": "a", "Bool(false)": "Avatar05/img", "Bool(false)": "FormatNumeric", "Bool(false)": "BACKGROUND_GRADIENT_DARK_OPACITY", "Bool(false)": "FormatNumeric", "Bool(false)": "lastShownFriendsListGiftIntents", "Null": "accessibleDismiss", "Null": "tea" }, wide: { "Bool(false)": "<string:1107520303>", "Bool(false)": "t\u1ED1i", "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003750914369490907, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013803581223834596, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013809315195508339, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001380166989994645, "Null": 0.000000000000000000000000000000000000000000000000000000007032566745974166, "Null": "isArray" } }, defaultWidth: "any", formattingValues: { narrow: {}, abbreviated: {}, wide: { "Bool(false)": "isArray", "Bool(false)": "it", "Bool(false)": "top", "Bool(false)": "r", "Bool(false)": "isArray", "Bool(false)": "accessible", "Null": "HTTP", "Null": "Map" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
