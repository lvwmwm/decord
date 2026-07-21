// Module ID: 3695
// Function ID: 28067
// Name: prop
// Dependencies: []

// Module 3695 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: { application: false, Set: false, Icon: false, id: false }, narrow: { application: false, Set: false, Icon: false, id: false }, short: { application: false, Set: false, Icon: false, id: false } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "nb";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: { application: false, Set: false, Icon: false, id: false }, narrow: { application: false, Set: false, Icon: false, id: false }, short: { application: false, Set: false, Icon: false, id: false } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "nb" });
