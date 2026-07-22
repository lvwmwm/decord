// Module ID: 3663
// Function ID: 27980
// Dependencies: []

// Module 3663
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    const str = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return str.toString() + "\u65E5";
    } else if ("hour" === unit) {
      return str.toString() + "\u65F6";
    } else if ("minute" === unit) {
      return str.toString() + "\u5206";
    } else if ("second" === unit) {
      return str.toString() + "\u79D2";
    } else {
      return "\u7B2C " + str.toString();
    }
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [65715200, 65879808] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["r", "pendingCancellationMessage", "a", "delimiter", "a", "APPLICATION_STORE", "a", "SCHOOL_CLUB", "a", "DATA-ID", "a", "getChannelOpenedMetadata"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:278462467>", "<string:230948867>", "<string:231079939>", "<string:231735299>", "<string:231211011>", "<string:3187146755>", "<string:231931907>"], short: ["<string:278462467>", "<string:230948867>", "<string:231079939>", "<string:231735299>", "<string:231211011>", "<string:3187146755>", "<string:231931907>"], abbreviated: [null, null, null, null, null, null, null], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { Text: "\u0967 \u092E\u0939\u0940\u0928\u093E", body: "{{count}} \u092E\u0939\u0940\u0928\u0947", PX_8: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", y: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", isArray: "\u0967 \u0935\u0930\u094D\u0937", accessibilityRole: "{{count}} \u0935\u0930\u094D\u0937", useStateFromStores: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", lj: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" }, wide: { Text: "\u0967 \u092E\u0939\u0940\u0928\u093E", body: "{{count}} \u092E\u0939\u0940\u0928\u0947", PX_8: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", y: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", isArray: "\u0967 \u0935\u0930\u094D\u0937", accessibilityRole: "{{count}} \u0935\u0930\u094D\u0937", useStateFromStores: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", lj: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { Text: "\u0967 \u092E\u0939\u0940\u0928\u093E", body: "{{count}} \u092E\u0939\u0940\u0928\u0947", PX_8: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", y: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", isArray: "\u0967 \u0935\u0930\u094D\u0937", accessibilityRole: "{{count}} \u0935\u0930\u094D\u0937", useStateFromStores: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", lj: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" }, wide: { Text: "\u0967 \u092E\u0939\u0940\u0928\u093E", body: "{{count}} \u092E\u0939\u0940\u0928\u0947", PX_8: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", y: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", isArray: "\u0967 \u0935\u0930\u094D\u0937", accessibilityRole: "{{count}} \u0935\u0930\u094D\u0937", useStateFromStores: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", lj: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
