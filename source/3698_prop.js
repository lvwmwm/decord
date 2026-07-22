// Module ID: 3698
// Function ID: 28070
// Name: prop
// Dependencies: []

// Module 3698 (prop)
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
    const obj2 = { long: { accessibilityHint: "title", legacyCompat_selected: "__closure", legacyCompat_onPress: "withTiming", eventTarget: "textAlign" }, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "ro";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: { accessibilityHint: "title", legacyCompat_selected: "__closure", legacyCompat_onPress: "withTiming", eventTarget: "textAlign" }, narrow: {}, short: {} } }, locale: "ro" });
