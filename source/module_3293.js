// Module ID: 3293
// Function ID: 26041
// Dependencies: []

// Module 3293
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "-oji";
  }
};
obj.era = obj.default({ values: { narrow: [948174849, -1208156159], abbreviated: [948174849, -1208156159], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013278992816533886, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013832287408886773, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014385569894069962, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003825030592676471], wide: [null, null, true, true] },
  defaultWidth: "wide",
  formattingValues: { narrow: [null, null, null, null], abbreviated: [], wide: [null, null, true, true] },
  defaultFormattingWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED", "remainTime", "registerIncodeInterview", "DISMISSED_IN_GAME_MESSAGE_NUX", "isArray", "return", "ConnectGuardianCard", "nameplateText", "isArray", "headerLeftLabelVisible", "customEmoji", "isArray"], abbreviated: ["v.C.", "n.C.", "voor Christus", "na Christus", "dobranoc", "drzemka", "hotel", "\u0142\u00F3\u017Cko", "nocleg", "nocowanie", "osoba", "pensjonat"], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: ["FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED", "remainTime", "registerIncodeInterview", "DISMISSED_IN_GAME_MESSAGE_NUX", "isArray", "return", "ConnectGuardianCard", "nameplateText", "isArray", "headerLeftLabelVisible", "customEmoji", "isArray"], abbreviated: ["v.C.", "n.C.", "voor Christus", "na Christus", "dobranoc", "drzemka", "hotel", "\u0142\u00F3\u017Cko", "nocleg", "nocowanie", "osoba", "pensjonat"], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: [], abbreviated: [null, null, null, null, null, null, null], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [null, null, null, null, null, null, null], short: [], abbreviated: [null, null, null, null, null, null, null], wide: [] }, defaultFormattingWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: false, y: false, isArray: false, colors: false, construct: false, y: false, isArray: false, id: false }, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { unicodeVersion: null, y: null, isArray: null, colors: null, construct: null, y: null, isArray: null, id: null }, abbreviated: { unicodeVersion: "isArray", y: "WireType", isArray: "toString", colors: "r", construct: "isArray", y: "accessibilityRole", isArray: "max", id: "r" }, wide: { unicodeVersion: "isArray", y: "WireType", isArray: "toString", colors: "r", construct: "isArray", y: "accessibilityRole", isArray: "max", id: "r" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
