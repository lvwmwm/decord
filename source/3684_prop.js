// Module ID: 3684
// Function ID: 28059
// Name: prop
// Dependencies: []

// Module 3684 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { end: "{0} \u03BA\u03B1\u03B9 {1}", middle: "{0}, {1}", pair: "{0} \u03BA\u03B1\u03B9 {1}", start: "{0}, {1}" }, narrow: { end: "{0}, {1}", middle: "{0}, {1}", pair: "{0}, {1}", start: "{0}, {1}" }, short: { end: "{0} \u03BA\u03B1\u03B9 {1}", middle: "{0}, {1}", pair: "{0} \u03BA\u03B1\u03B9 {1}", start: "{0}, {1}" } };
    obj.conjunction = obj;
    const obj1 = { long: { end: "{0} \u03AE {1}", middle: "{0}, {1}", pair: "{0} \u03AE {1}", start: "{0}, {1}" }, narrow: { end: "{0} \u03AE {1}", middle: "{0}, {1}", pair: "{0} \u03AE {1}", start: "{0}, {1}" }, short: { end: "{0} \u03AE {1}", middle: "{0}, {1}", pair: "{0} \u03AE {1}", start: "{0}, {1}" } };
    obj.disjunction = obj1;
    const obj2 = { long: { end: "{0}, {1}", middle: "{0}, {1}", pair: "{0}, {1}", start: "{0}, {1}" }, narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" }, short: { end: "{0}, {1}", middle: "{0}, {1}", pair: "{0}, {1}", start: "{0}, {1}" } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "el";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { end: "{0} \u03BA\u03B1\u03B9 {1}", middle: "{0}, {1}", pair: "{0} \u03BA\u03B1\u03B9 {1}", start: "{0}, {1}" }, narrow: { end: "{0}, {1}", middle: "{0}, {1}", pair: "{0}, {1}", start: "{0}, {1}" }, short: { end: "{0} \u03BA\u03B1\u03B9 {1}", middle: "{0}, {1}", pair: "{0} \u03BA\u03B1\u03B9 {1}", start: "{0}, {1}" } }, disjunction: { long: { end: "{0} \u03AE {1}", middle: "{0}, {1}", pair: "{0} \u03AE {1}", start: "{0}, {1}" }, narrow: { end: "{0} \u03AE {1}", middle: "{0}, {1}", pair: "{0} \u03AE {1}", start: "{0}, {1}" }, short: { end: "{0} \u03AE {1}", middle: "{0}, {1}", pair: "{0} \u03AE {1}", start: "{0}, {1}" } }, unit: { long: { end: "{0}, {1}", middle: "{0}, {1}", pair: "{0}, {1}", start: "{0}, {1}" }, narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" }, short: { end: "{0}, {1}", middle: "{0}, {1}", pair: "{0}, {1}", start: "{0}, {1}" } } }, locale: "el" });
