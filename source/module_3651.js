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
obj.era = obj.default({ values: { narrow: [], abbreviated: [1996489651, 1107297203], wide: ["%AsyncFunction%", "interactionId"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: ["a", "isArray", "uri", "fill"], wide: [true, true, true, true] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [1508900867, 21102594, 50332429, 1140851469, 191723, 193874, 194082, 194230, 49079364, 49079552, 49079808, 50309888], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [1508900867, 21102594, 50332429, 1140851469, 191723, 193874, 194082, 194230, 49079364, 49079552, 49079808, 50309888], abbreviated: [], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: ["STICKER_PACK_VIEW_ALL", "avoidInitialScroll", "STICKER_PACK_VIEW_ALL", "HScrollContentViewNativeComponent", "OPEN_TO_PLAY", "minutesAgo", "BigInt"], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: "a", y: "NUX_REVEAL_DURATION_MS", isArray: "bannerText", colors: "MemberType", construct: "y", y: "isArray", isArray: "MediaModalOverlayFooter", id: "Boolean" }, abbreviated: { unicodeVersion: "a", y: "NUX_REVEAL_DURATION_MS", isArray: "bannerText", colors: "MemberType", construct: "y", y: "isArray", isArray: "MediaModalOverlayFooter", id: "Boolean" }, wide: {} }, defaultWidth: "any", formattingValues: { narrow: { unicodeVersion: "AM", y: "PM", isArray: "n\u1EEDa \u0111\u00EAm", colors: "tr\u01B0a", construct: "s\u00E1ng", y: "chi\u1EC1u", isArray: "t\u1ED1i", id: "\u0111\u00EAm" }, abbreviated: { unicodeVersion: "AM", y: "PM", isArray: "n\u1EEDa \u0111\u00EAm", colors: "tr\u01B0a", construct: "s\u00E1ng", y: "chi\u1EC1u", isArray: "t\u1ED1i", id: "\u0111\u00EAm" }, wide: { unicodeVersion: false, y: false, isArray: false, colors: false, construct: false, y: false, isArray: false, id: false } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
