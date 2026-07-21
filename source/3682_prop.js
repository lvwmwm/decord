// Module ID: 3682
// Function ID: 28054
// Name: prop
// Dependencies: []

// Module 3682 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: { application: "{0}, {1}", Set: "{0}, {1}", Icon: "{0} y {1}", id: "{0}, {1}" }, narrow: { application: "{0}, {1}", Set: "{0}, {1}", Icon: "{0} y {1}", id: "{0}, {1}" }, short: { application: "{0}, {1}", Set: "{0}, {1}", Icon: "{0} y {1}", id: "{0}, {1}" } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
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
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: { application: "{0}, {1}", Set: "{0}, {1}", Icon: "{0} y {1}", id: "{0}, {1}" }, narrow: { application: "{0}, {1}", Set: "{0}, {1}", Icon: "{0} y {1}", id: "{0}, {1}" }, short: { application: "{0}, {1}", Set: "{0}, {1}", Icon: "{0} y {1}", id: "{0}, {1}" } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "el" });
