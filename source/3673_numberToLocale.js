// Module ID: 3673
// Function ID: 28005
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
let closure_0 = { locale: { format: "pos", r: "Array", memo: "isArray", forEach: "code", createStyles: "pos", unicodeVersion: "Array", ty: "isArray", unicodeVersion: "accessible", body: "kind", l: "unicodeVersion" }, number: {} };
obj = {
  ordinalNumber(arg0, arg1) {
    return numberToLocale(Number(arg0));
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [-314507261, 1090519484, 150522, 625], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["MMM", "MMMM", "ww", 2, 0.182, 0, "w", "ww", "W", "WW", 2, "dd"], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [true, true, true, true, true, true, true], wide: [true, true, true, true, true, true, true] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export const localeToNumber = function localeToNumber(arg0) {
  return Number(arg0.toString().replace(/[१२३४५६७८९०]/g, (arg0) => number.number[arg0]));
};
export { numberToLocale };
export default obj;
