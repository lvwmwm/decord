// Module ID: 3251
// Function ID: 25931
// Dependencies: []

// Module 3251
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = { narrow: [true, true, true, true, true, true, true, true, true, "right", "type", "withTiming"], abbreviated: [true, true, true, true, true, true, true, true, "Array", "isArray", "flex", "resizeMode"], wide: [] };
const obj2 = { narrow: [null, null, null, null, null, 178015232, 405209091], short: ["<string:3841983255>", "<string:1241515052>", true, true, true, true, true], abbreviated: [], wide: [] };
const obj4 = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: [-327876607, 442236930], abbreviated: [-327876607, 442236930], wide: [null, null] }, defaultWidth: "wide" }),
  quarter: obj.default({
    values: { narrow: [], abbreviated: ["imageContainerExpiring", "locke", "imageContainerExpiring", "UNKNOWN_PLATFORM"], wide: [null, null, null, null] },
    defaultWidth: "wide",
    argumentCallback(arg0) {
      return arg0 - 1;
    }
  }),
  month: obj.default({ values: obj, defaultWidth: "wide", formattingValues: { narrow: obj.narrow, abbreviated: obj.abbreviated, wide: ["REACTION_RIGHT_CLICK_MENU_UPSELL", "a", "requestedAt", "r", "onPressAppCommand", "Array", "launchPadType", "a", "lifecycleSubscription", "r", "GCASH", "Array"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: obj2, defaultWidth: "wide", formattingValues: { narrow: obj2.narrow, short: obj2.short, abbreviated: obj2.abbreviated, wide: [] }, defaultFormattingWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { Text: false, body: false, PX_8: false, y: false, isArray: false, accessibilityRole: false, useStateFromStores: false, lj: false }, abbreviated: { Text: false, body: false, PX_8: false, y: false, isArray: false, accessibilityRole: false, useStateFromStores: false, lj: false }, wide: { Text: false, body: false, PX_8: false, y: false, isArray: false, accessibilityRole: false, useStateFromStores: false, lj: 49284608 } }, defaultWidth: "wide" })
};

export default obj4;
export default exports.default;
