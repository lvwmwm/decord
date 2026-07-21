// Module ID: 3317
// Function ID: 26100
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
  values: { narrow: [null, null, null, null], abbreviated: [], wide: ["sr", "Array", "isArray", "sr"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [null, null, "kh\u00F4ng quan t\u00E2m", "m\u1EB7t", "m\u1EB7t \u0111ang ng\u1EE7", "m\u1EC7t m\u1ECFi", "ng\u1EE7", "ng\u1EE7 ngoan", "sao c\u0169ng \u0111\u01B0\u1EE3c", "zzz", true, true] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["mai", "iun", "iul", "aug", "sep", "oct", "noi"], short: ["sep", "oct", "noi", "dec", "cover", "contain", "stretch"], abbreviated: [null, null, null, null, null, null, null], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { unicodeVersion: true, y: true, isArray: true, colors: true, construct: true, y: true, isArray: true, id: true }, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: { unicodeVersion: 1, y: 4, isArray: 2, colors: "AM", construct: "PM", y: "miezul nop\u021Bii", isArray: "amiaz\u0103", id: "diminea\u021B\u0103" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
