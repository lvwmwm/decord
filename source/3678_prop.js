// Module ID: 3678
// Function ID: 28050
// Name: prop
// Dependencies: []

// Module 3678 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: { accessibilityHint: null, legacyCompat_selected: 16, legacyCompat_onPress: 16, eventTarget: "flex" }, short: { accessibilityHint: null, legacyCompat_selected: 16, legacyCompat_onPress: 16, eventTarget: "flex" } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "bg";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: {}, narrow: { accessibilityHint: null, legacyCompat_selected: 16, legacyCompat_onPress: 16, eventTarget: "flex" }, short: { accessibilityHint: null, legacyCompat_selected: 16, legacyCompat_onPress: 16, eventTarget: "flex" } } }, locale: "bg" });
