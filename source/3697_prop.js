// Module ID: 3697
// Function ID: 28069
// Name: prop
// Dependencies: []

// Module 3697 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: {}, short: { application: 172, Set: 172, Icon: "center", id: 16 } };
    obj.conjunction = obj;
    const obj1 = { long: { application: 4, Set: "flex-end", Icon: 210, id: null }, narrow: { application: 4, Set: "flex-end", Icon: 210, id: null }, short: { application: 4, Set: "flex-end", Icon: 210, id: null } };
    obj.disjunction = obj1;
    const obj2 = { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: {}, short: { application: 172, Set: 172, Icon: "center", id: 16 } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "pt";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: {}, short: { application: 172, Set: 172, Icon: "center", id: 16 } }, disjunction: { long: { application: 4, Set: "flex-end", Icon: 210, id: null }, narrow: { application: 4, Set: "flex-end", Icon: 210, id: null }, short: { application: 4, Set: "flex-end", Icon: 210, id: null } }, unit: { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: {}, short: { application: 172, Set: 172, Icon: "center", id: 16 } } }, locale: "pt" });
