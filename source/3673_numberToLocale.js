// Module ID: 3673
// Function ID: 28000
// Name: numberToLocale
// Dependencies: []
// Exports: localeToNumber

// Module 3673 (numberToLocale)
function numberToLocale(arg0) {
  return arg0.toString().replace(/\d/g, (arg0) => locale.locale[arg0]);
}
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
let closure_0 = { locale: { "Bool(false)": null, "Bool(false)": 0, "Bool(false)": -1, "Bool(false)": 0, "Bool(false)": "onStartShouldSetResponder", "Bool(false)": "onStartShouldSetResponderCapture", "Bool(false)": "onScrollShouldSetResponder", "Bool(false)": "onScrollShouldSetResponderCapture", "Bool(false)": "onSelectionChangeShouldSetResponder", "Bool(false)": "onSelectionChangeShouldSetResponderCapture" }, number: { nextWeek: "{0} {1}", lastDay: "{0} {1}", lastWeek: "{0} {1}", stopImmediatePropagation: "{0} {1}", CONVERSATIONS_EXTRACTION_PROCESSING: "{0} a\u00A0{1}", trackSelectGIF: "{0}, {1}", ss: "{0}, {1}", mm: "{0}, {1}", hh: "{0} og {1}", dd: "{0}, {1}" } };
obj = {
  ordinalNumber(arg0, arg1) {
    return numberToLocale(Number(arg0));
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [null, null, null, null], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["MMM", "MMMM", "ww", 2, 0.182, 0, "w", "ww", "W", "WW", 2, "dd"], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [false, false, false, false, false, false, false] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export const localeToNumber = function localeToNumber(arg0) {
  return Number(arg0.toString().replace(/[१२३४५६७८९०]/g, (arg0) => number.number[arg0]));
};
export { numberToLocale };
export default obj;
