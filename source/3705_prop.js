// Module ID: 3705
// Function ID: 28077
// Name: prop
// Dependencies: []

// Module 3705 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: "isArray", Set: "construct", Icon: "Array", id: "isArray" }, narrow: {}, short: { application: "isArray", Set: "construct", Icon: "Array", id: "isArray" } };
    obj.conjunction = obj;
    const obj1 = { long: { application: "L", Set: 8, Icon: 1, id: 8 }, narrow: { application: "L", Set: 8, Icon: 1, id: 8 }, short: { application: "L", Set: 8, Icon: 1, id: 8 } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "zh-Hans";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: "isArray", Set: "construct", Icon: "Array", id: "isArray" }, narrow: {}, short: { application: "isArray", Set: "construct", Icon: "Array", id: "isArray" } }, disjunction: { long: { application: "L", Set: 8, Icon: 1, id: 8 }, narrow: { application: "L", Set: 8, Icon: 1, id: 8 }, short: { application: "L", Set: 8, Icon: 1, id: 8 } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "zh-Hans" });
