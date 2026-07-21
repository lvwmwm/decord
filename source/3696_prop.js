// Module ID: 3696
// Function ID: 28068
// Name: prop
// Dependencies: []

// Module 3696 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: { application: "isArray", Set: "now", Icon: "content", id: "a" }, narrow: { application: "isArray", Set: "now", Icon: "content", id: "a" }, short: { application: "isArray", Set: "now", Icon: "content", id: "a" } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "pl";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: { application: "isArray", Set: "now", Icon: "content", id: "a" }, narrow: { application: "isArray", Set: "now", Icon: "content", id: "a" }, short: { application: "isArray", Set: "now", Icon: "content", id: "a" } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "pl" });
