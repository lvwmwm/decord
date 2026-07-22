// Module ID: 3704
// Function ID: 28076
// Name: prop
// Dependencies: []

// Module 3704 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { accessibilityHint: null, legacyCompat_selected: null, legacyCompat_onPress: null, eventTarget: null }, narrow: {}, short: { accessibilityHint: null, legacyCompat_selected: null, legacyCompat_onPress: null, eventTarget: null } };
    obj.conjunction = obj;
    const obj1 = { long: { accessibilityHint: "H:mm", legacyCompat_selected: "H:mm:ss", legacyCompat_onPress: "D.MM.YYYY", eventTarget: "D MMMM YYYY" }, narrow: { accessibilityHint: "H:mm", legacyCompat_selected: "H:mm:ss", legacyCompat_onPress: "D.MM.YYYY", eventTarget: "D MMMM YYYY" }, short: { accessibilityHint: "H:mm", legacyCompat_selected: "H:mm:ss", legacyCompat_onPress: "D.MM.YYYY", eventTarget: "D MMMM YYYY" } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "vi";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { accessibilityHint: null, legacyCompat_selected: null, legacyCompat_onPress: null, eventTarget: null }, narrow: {}, short: { accessibilityHint: null, legacyCompat_selected: null, legacyCompat_onPress: null, eventTarget: null } }, disjunction: { long: { accessibilityHint: "H:mm", legacyCompat_selected: "H:mm:ss", legacyCompat_onPress: "D.MM.YYYY", eventTarget: "D MMMM YYYY" }, narrow: { accessibilityHint: "H:mm", legacyCompat_selected: "H:mm:ss", legacyCompat_onPress: "D.MM.YYYY", eventTarget: "D MMMM YYYY" }, short: { accessibilityHint: "H:mm", legacyCompat_selected: "H:mm:ss", legacyCompat_onPress: "D.MM.YYYY", eventTarget: "D MMMM YYYY" } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "vi" });
