// Module ID: 3679
// Function ID: 28051
// Name: prop
// Dependencies: []

// Module 3679 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: { accessibilityHint: false, legacyCompat_selected: false, legacyCompat_onPress: false, eventTarget: false }, narrow: { accessibilityHint: false, legacyCompat_selected: false, legacyCompat_onPress: false, eventTarget: false }, short: { accessibilityHint: false, legacyCompat_selected: false, legacyCompat_onPress: false, eventTarget: false } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: { accessibilityHint: true, legacyCompat_selected: true, legacyCompat_onPress: true, eventTarget: true } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "cs";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: { accessibilityHint: false, legacyCompat_selected: false, legacyCompat_onPress: false, eventTarget: false }, narrow: { accessibilityHint: false, legacyCompat_selected: false, legacyCompat_onPress: false, eventTarget: false }, short: { accessibilityHint: false, legacyCompat_selected: false, legacyCompat_onPress: false, eventTarget: false } }, unit: { long: {}, narrow: {}, short: { accessibilityHint: true, legacyCompat_selected: true, legacyCompat_onPress: true, eventTarget: true } } }, locale: "cs" });
