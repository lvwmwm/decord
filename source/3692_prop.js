// Module ID: 3692
// Function ID: 28064
// Name: prop
// Dependencies: []

// Module 3692 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { accessibilityHint: "{0} en {1}", legacyCompat_selected: "{0}, {1}", legacyCompat_onPress: "{0} en {1}", eventTarget: "{0}, {1}" }, narrow: { accessibilityHint: "{0} en {1}", legacyCompat_selected: "{0}, {1}", legacyCompat_onPress: "{0} en {1}", eventTarget: "{0}, {1}" }, short: { accessibilityHint: "{0} en {1}", legacyCompat_selected: "{0}, {1}", legacyCompat_onPress: "{0} en {1}", eventTarget: "{0}, {1}" } };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "ko";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { accessibilityHint: "{0} en {1}", legacyCompat_selected: "{0}, {1}", legacyCompat_onPress: "{0} en {1}", eventTarget: "{0}, {1}" }, narrow: { accessibilityHint: "{0} en {1}", legacyCompat_selected: "{0}, {1}", legacyCompat_onPress: "{0} en {1}", eventTarget: "{0}, {1}" }, short: { accessibilityHint: "{0} en {1}", legacyCompat_selected: "{0}, {1}", legacyCompat_onPress: "{0} en {1}", eventTarget: "{0}, {1}" } }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: {}, narrow: {}, short: {} } }, locale: "ko" });
