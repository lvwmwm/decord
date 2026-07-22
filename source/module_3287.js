// Module ID: 3287
// Function ID: 26022
// Dependencies: []

// Module 3287
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    const StringResult = String(unit);
    if ("minute" !== StringResult) {
      if ("second" !== StringResult) {
        if ("date" === StringResult) {
          return NumberResult + "\uC77C";
        } else {
          return NumberResult + "\uBC88\uC9F8";
        }
      }
    }
    return String(NumberResult);
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [1615921155, 37814340] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["imageContainerExpiring", "locke", "imageContainerExpiring", "UNKNOWN_PLATFORM"], wide: ["isArray", "accessibilityRole", "bm", "__closure"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: ["flags", "Array", "isArray", "Boolean", "createStyles", "Array", "isArray"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: "parseFloat", body: "targetFrames", PX_8: "reType", y: "multiplyMatrices", isArray: "mi", accessibilityRole: "Rpc", useStateFromStores: "Float64Array", lj: "curryRight" }, abbreviated: { Text: "parseFloat", body: "targetFrames", PX_8: "reType", y: "multiplyMatrices", isArray: "mi", accessibilityRole: "Rpc", useStateFromStores: "Float64Array", lj: "curryRight" }, wide: { Text: "parseFloat", body: "targetFrames", PX_8: "reType", y: "multiplyMatrices", isArray: "mi", accessibilityRole: "Rpc", useStateFromStores: "Float64Array", lj: "curryRight" } }, defaultWidth: "wide", formattingValues: { narrow: { Text: "parseFloat", body: "targetFrames", PX_8: "reType", y: "multiplyMatrices", isArray: "mi", accessibilityRole: "Rpc", useStateFromStores: "Float64Array", lj: "curryRight" }, abbreviated: { Text: "parseFloat", body: "targetFrames", PX_8: "reType", y: "multiplyMatrices", isArray: "mi", accessibilityRole: "Rpc", useStateFromStores: "Float64Array", lj: "curryRight" }, wide: { Text: "parseFloat", body: "targetFrames", PX_8: "reType", y: "multiplyMatrices", isArray: "mi", accessibilityRole: "Rpc", useStateFromStores: "Float64Array", lj: "curryRight" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
