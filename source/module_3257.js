// Module ID: 3257
// Function ID: 25945
// Dependencies: []

// Module 3257
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if (0 === NumberResult) {
      return "0";
    } else {
      let str = "\u00E8me";
      if (1 === NumberResult) {
        let str3 = "er";
        if (unit) {
          const items = ["<string:3345957893>", "<string:1528496130>", "<string:931528705>", "<string:131006465>", "<string:3328245762>"];
          str3 = "er";
          if (items.includes(unit)) {
            str3 = "\u00E8re";
          }
        }
        str = str3;
      }
      return NumberResult + str;
    }
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [false, false] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["CONTACT_SYNC_ONBOARDING_LOCATION", "hasBogoReward", "Array", "limitedTimeBadge"], wide: [false, false, false, false] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["bounciness", "num", "targetFrames", "night", "convertSkemaError", "../lib/braintree-error", "targetFrames", "sleep", "_findItemIndexWithKey", "Iterator", "targetFrames", "zzz"], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [null, null, null, null, null, null, null], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: "1 sat", body: "1 sat", PX_8: "1 sat", y: null, isArray: "{{count}} dana", accessibilityRole: "{{count}} dana", useStateFromStores: "1 dan", lj: "1 dan" }, abbreviated: {}, wide: { Text: "{{count}} tjedna", body: "{{count}} tjedana", PX_8: "1 tjedan", y: "1 tjedan", isArray: "1 tjedan", accessibilityRole: null, useStateFromStores: "oko {{count}} mjeseca", lj: "oko {{count}} mjeseci" } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
