// Module ID: 3693
// Function ID: 28065
// Name: prop
// Dependencies: []

// Module 3693 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: "{0} lub {1}", Set: "{0}, {1}", Icon: "{0} lub {1}", id: "{0}, {1}" }, narrow: { application: "{0} lub {1}", Set: "{0}, {1}", Icon: "{0} lub {1}", id: "{0}, {1}" }, short: { application: "{0} lub {1}", Set: "{0}, {1}", Icon: "{0} lub {1}", id: "{0}, {1}" } };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "lt";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: "{0} lub {1}", Set: "{0}, {1}", Icon: "{0} lub {1}", id: "{0}, {1}" }, narrow: { application: "{0} lub {1}", Set: "{0}, {1}", Icon: "{0} lub {1}", id: "{0}, {1}" }, short: { application: "{0} lub {1}", Set: "{0}, {1}", Icon: "{0} lub {1}", id: "{0}, {1}" } }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: {}, narrow: {}, short: {} } }, locale: "lt" });
