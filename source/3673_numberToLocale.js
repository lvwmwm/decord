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
let closure_0 = { locale: { paddingHorizontal: 1375731712, height: 1608474590, flexDirection: 1105958737, alignItems: 136501, guildId: 34945602, Set: 34945792, d: 1817137664, r: 1090612304, index: 321998, forEach: 208732433 }, number: {} };
obj = {
  ordinalNumber(arg0, arg1) {
    return numberToLocale(Number(arg0));
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: ["a", "isArray", "Text", "channelId"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["MMM", "MMMM", "ww", 2, 0.182, 0, "w", "ww", "W", "WW", 2, "dd"], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [false, false, false, false, false, false, false] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: "center", y: -352714750, isArray: -352714750, colors: -352714750, construct: 979435522, y: 16891473, isArray: 28000321, id: 1153585408 }, abbreviated: { unicodeVersion: "center", y: -352714750, isArray: -352714750, colors: -352714750, construct: 979435522, y: 16891473, isArray: 28000321, id: 1153585408 }, wide: { unicodeVersion: "center", y: -352714750, isArray: -352714750, colors: -352714750, construct: 979435522, y: 16891473, isArray: 28000321, id: 1153585408 } }, defaultWidth: "wide", formattingValues: { narrow: { unicodeVersion: "center", y: -352714750, isArray: -352714750, colors: -352714750, construct: 979435522, y: 16891473, isArray: 28000321, id: 1153585408 }, abbreviated: { unicodeVersion: "center", y: -352714750, isArray: -352714750, colors: -352714750, construct: 979435522, y: 16891473, isArray: 28000321, id: 1153585408 }, wide: { unicodeVersion: "center", y: -352714750, isArray: -352714750, colors: -352714750, construct: 979435522, y: 16891473, isArray: 28000321, id: 1153585408 } }, defaultFormattingWidth: "wide" });

export const localeToNumber = function localeToNumber(arg0) {
  return Number(arg0.toString().replace(/[१२३४५६७८९०]/g, (arg0) => number.number[arg0]));
};
export { numberToLocale };
export default obj;
