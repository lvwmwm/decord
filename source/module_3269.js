// Module ID: 3269
// Function ID: 25972
// Dependencies: []

// Module 3269
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
obj.era = obj.default({ values: { narrow: [true, true], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [1409286581, 1463057694, 1463768885, 35128321], abbreviated: [], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  },
  formattingValues: { narrow: [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002482886318835015, 0.00000000000000000000000000000000000000000008972040582795066, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005305380996042525, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001434559588190797], abbreviated: [], wide: [407961602, 2067022082, -2042167294, -2013265140] },
  defaultFormattingWidth: "wide"
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [null, null, "gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [true, true, true, true, true, true, true], abbreviated: [true, true, true, true, true, true, true], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: "m.", <string:13303808>: "p.", <string:13369344>: "mezzanotte", <string:13631488>: "mezzogiorno", <string:13893632>: "di mattina", <string:14024704>: "del pomeriggio", <string:14286848>: "di sera", <string:14548992>: "di notte" }, abbreviated: { <string:13107200>: "m.", <string:13303808>: "p.", <string:13369344>: "mezzanotte", <string:13631488>: "mezzogiorno", <string:13893632>: "di mattina", <string:14024704>: "del pomeriggio", <string:14286848>: "di sera", <string:14548992>: "di notte" }, wide: { <string:13107200>: "AM", <string:13303808>: "PM", <string:13369344>: "mezzanotte", <string:13631488>: "mezzogiorno", <string:13893632>: "di mattina", <string:14024704>: "del pomeriggio", <string:14286848>: "di sera", <string:14548992>: "di notte" } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
