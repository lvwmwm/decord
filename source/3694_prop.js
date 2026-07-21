// Module ID: 3694
// Function ID: 28066
// Name: prop
// Dependencies: []

// Module 3694 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: "center", Set: "r", Icon: "isArray", id: "warn" }, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: { application: "center", Set: "r", Icon: "isArray", id: "warn" }, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "nl";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: "center", Set: "r", Icon: "isArray", id: "warn" }, narrow: {}, short: {} }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: { application: "center", Set: "r", Icon: "isArray", id: "warn" }, narrow: {}, short: {} } }, locale: "nl" });
