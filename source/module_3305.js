// Module ID: 3305
// Function ID: 26064
// Dependencies: []

// Module 3305
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: ["r", "IMPLICIT", "r", "pako"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004456143132310851, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004241875101371775, 58840350721.52512, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001544558296959693, "good", "goodnight", "nap", "night", "sleep", "sleeping", "tired", "whatever"], abbreviated: [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987], wide: [null, "sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017A", "lis"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-1546188227, null, null, null, null, null, null], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: "top", <string:13303808>: "r", <string:13369344>: "isArray", <string:13631488>: "WireType", <string:13893632>: "padding", <string:14024704>: "unicodeVersion", <string:14286848>: "a", <string:14548992>: "isArray" }, abbreviated: {}, wide: { <string:13107200>: "a", <string:13303808>: "BOOST_LEVEL_UPSELL_BUTTON", <string:13369344>: "a", <string:13631488>: "consumeLeftInset", <string:13893632>: "at", <string:14024704>: "BbESsg", <string:14286848>: "%Uint8ArrayPrototype%", <string:14548992>: "withLeftMargin" } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
