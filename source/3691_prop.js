// Module ID: 3691
// Function ID: 28066
// Name: prop
// Dependencies: []

// Module 3691 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, narrow: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, short: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" } };
    obj.conjunction = obj;
    const obj1 = { long: { end: "{0} vagy {1}", middle: "{0}, {1}", pair: "{0} vagy {1}", start: "{0}, {1}" }, narrow: { end: "{0} vagy {1}", middle: "{0}, {1}", pair: "{0} vagy {1}", start: "{0}, {1}" }, short: { end: "{0} vagy {1}", middle: "{0}, {1}", pair: "{0} vagy {1}", start: "{0}, {1}" } };
    obj.disjunction = obj1;
    const obj2 = { long: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, narrow: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, short: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "hu";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, narrow: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, short: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" } }, disjunction: { long: { end: "{0} vagy {1}", middle: "{0}, {1}", pair: "{0} vagy {1}", start: "{0}, {1}" }, narrow: { end: "{0} vagy {1}", middle: "{0}, {1}", pair: "{0} vagy {1}", start: "{0}, {1}" }, short: { end: "{0} vagy {1}", middle: "{0}, {1}", pair: "{0} vagy {1}", start: "{0}, {1}" } }, unit: { long: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, narrow: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" }, short: { end: "{0} \u00E9s {1}", middle: "{0}, {1}", pair: "{0} \u00E9s {1}", start: "{0}, {1}" } } }, locale: "hu" });
