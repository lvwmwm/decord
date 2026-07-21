// Module ID: 3690
// Function ID: 28062
// Name: prop
// Dependencies: []

// Module 3690 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: { application: 172, Set: 172, Icon: "center", id: 16 }, short: { application: 172, Set: 172, Icon: "center", id: 16 } };
    obj.conjunction = obj;
    const obj1 = { long: { application: true, Set: true, Icon: true, id: true }, narrow: { application: true, Set: true, Icon: true, id: true }, short: { application: true, Set: true, Icon: true, id: true } };
    obj.disjunction = obj1;
    const obj2 = { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: {}, short: { application: 172, Set: 172, Icon: "center", id: 16 } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "it";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: { application: 172, Set: 172, Icon: "center", id: 16 }, short: { application: 172, Set: 172, Icon: "center", id: 16 } }, disjunction: { long: { application: true, Set: true, Icon: true, id: true }, narrow: { application: true, Set: true, Icon: true, id: true }, short: { application: true, Set: true, Icon: true, id: true } }, unit: { long: { application: 172, Set: 172, Icon: "center", id: 16 }, narrow: {}, short: { application: 172, Set: 172, Icon: "center", id: 16 } } }, locale: "it" });
