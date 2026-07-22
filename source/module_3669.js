// Module ID: 3669
// Function ID: 27994
// Dependencies: []

// Module 3669
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return NumberResult + "\u65E5";
    } else if ("hour" === unit) {
      return NumberResult + "\u6642";
    } else if ("minute" === unit) {
      return NumberResult + "\u5206";
    } else if ("second" === unit) {
      return NumberResult + "\u79D2";
    } else {
      return "\u7B2C " + NumberResult;
    }
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [65715200, 65879808] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [51240448, 51240960, 51241472, 51241984], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["r", "pendingCancellationMessage", "a", "delimiter", "a", "APPLICATION_STORE", "a", "SCHOOL_CLUB", "a", "DATA-ID", "a", "getChannelOpenedMetadata"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:278462467>", "<string:230948867>", "<string:231079939>", "<string:231735299>", "<string:231211011>", "<string:3187146755>", "<string:231931907>"], short: ["<string:278462467>", "<string:230948867>", "<string:231079939>", "<string:231735299>", "<string:231211011>", "<string:3187146755>", "<string:231931907>"], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { Text: "center", body: 1912603510, PX_8: 704643958, y: "isArray", isArray: "HTTP", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" }, wide: { Text: "center", body: 1912603510, PX_8: 704643958, y: "isArray", isArray: "HTTP", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { Text: "center", body: 1912603510, PX_8: 704643958, y: "isArray", isArray: "HTTP", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" }, wide: { Text: "center", body: 1912603510, PX_8: 704643958, y: "isArray", isArray: "HTTP", accessibilityRole: "title", useStateFromStores: "r", lj: "isArray" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
