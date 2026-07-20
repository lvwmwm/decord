// Module ID: 3257
// Function ID: 25940
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
          const items = [];
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
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004456143132310851, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004241875101371775, 58840350721.52512, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001544558296959693, "good", "goodnight", "nap", "night", "sleep", "sleeping", "tired", "whatever"], abbreviated: [null, null, null, null, null, null, null, null, null, null, null, null], wide: [true, true, true, true, true, true, true, true, true, true, true, true] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [null, null, null, null, null, null, null], wide: [false, false, false, false, false, false, false] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: "1 sat", <string:13303808>: "1 sat", <string:13369344>: "1 sat", <string:13631488>: null, <string:13893632>: "{{count}} dana", <string:14024704>: "{{count}} dana", <string:14286848>: "1 dan", <string:14548992>: "1 dan" }, abbreviated: {}, wide: { <string:13107200>: "{{count}} tjedna", <string:13303808>: "{{count}} tjedana", <string:13369344>: "1 tjedan", <string:13631488>: "1 tjedan", <string:13893632>: "1 tjedan", <string:14024704>: null, <string:14286848>: "oko {{count}} mjeseca", <string:14548992>: "oko {{count}} mjeseci" } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
