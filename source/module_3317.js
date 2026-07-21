// Module ID: 3317
// Function ID: 26095
// Dependencies: []

// Module 3317
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("week" === unit) {
      let text = `${tmp2}ª`;
    } else {
      text = `${tmp2}º`;
    }
    return text;
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["s\u00E1", "dom", "lun", "mar"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [true, true, true, "<string:4132569089>", "<string:3942859270>", "<string:4214947842>", "<string:810614786>", "<string:32785732>", "<string:22904832>", "<string:33026048>", "<string:33021696>", "<string:2266025984>"], abbreviated: [true, true, true, true, true, true, true, true, true, "<string:1464471387>", "<string:623785378>", "<string:505365552>"], wide: [true, true, true, true, true, true, true, true, true, true, true, true] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [true, true, true, true, true, true, true], abbreviated: ["<string:496566276>", "<string:1244921860>", "<string:44892164>", "<string:1387790337>", "<string:204472324>", "<string:1011286019>", "<string:3959423804>"], wide: ["r", "isArray", "keys", "h", "a", "isArray", "valueOf"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": "1 lun\u0103", "Bool(false)": "{{count}} luni", "Bool(false)": "circa 1 an", "Bool(false)": "circa {{count}} ani", "Bool(false)": "1 an", "Bool(false)": "{{count}} ani", "Null": "peste 1 an", "Null": "peste {{count}} ani" }, abbreviated: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Null": true, "Null": true }, wide: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Null": true, "Null": true } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
