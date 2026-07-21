// Module ID: 1928
// Function ID: 21783
// Dependencies: []

// Module 1928
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    const NumberResult = Number(arg0);
    const result = NumberResult % 100;
    if (result > 20) {
      const result1 = result % 10;
      if (1 === result1) {
        return NumberResult + "st";
      } else if (2 === result1) {
        return NumberResult + "nd";
      } else if (3 === result1) {
        return NumberResult + "rd";
      }
    }
    return NumberResult + "th";
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: ["r", "crc"], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["tongue", null, null, null, null, null, null, null, null, null, null, null], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [0.000000000000000000000001655593684685282, 0.00000000000000000010850098812343142, 12563556145893409000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243970362960756, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243991582918587, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000424384304321327, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000424367328355], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": "<string:1107296627>", "Bool(false)": "<string:1358954867>", "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Null": false, "Null": false }, abbreviated: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Null": true, "Null": true }, wide: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Null": false, "Null": false } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { "Bool(false)": 1, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": null, "Null": null, "Null": null }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
