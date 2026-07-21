// Module ID: 3688
// Function ID: 28060
// Name: prop
// Dependencies: []

// Module 3688 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: { application: null, Set: null, Icon: null, id: null }, narrow: { application: null, Set: null, Icon: null, id: null }, short: { application: null, Set: null, Icon: null, id: null } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "hr";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: { application: null, Set: null, Icon: null, id: null }, narrow: { application: null, Set: null, Icon: null, id: null }, short: { application: null, Set: null, Icon: null, id: null } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "hr" });
