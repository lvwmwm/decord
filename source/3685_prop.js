// Module ID: 3685
// Function ID: 28057
// Name: prop
// Dependencies: []

// Module 3685 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: 120, Set: 80, Icon: "center", id: "r" }, narrow: { application: 120, Set: 80, Icon: "center", id: "r" }, short: { application: 120, Set: 80, Icon: "center", id: "r" } };
    obj.conjunction = obj;
    const obj1 = { long: { application: true, Set: true, Icon: true, id: true }, narrow: { application: true, Set: true, Icon: true, id: true }, short: { application: true, Set: true, Icon: true, id: true } };
    obj.disjunction = obj1;
    const obj2 = { long: { application: 120, Set: 80, Icon: "center", id: "r" }, narrow: {}, short: { application: 1958150146, Set: -352714749, Icon: 1090584578, id: 321693 } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "es";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: 120, Set: 80, Icon: "center", id: "r" }, narrow: { application: 120, Set: 80, Icon: "center", id: "r" }, short: { application: 120, Set: 80, Icon: "center", id: "r" } }, disjunction: { long: { application: true, Set: true, Icon: true, id: true }, narrow: { application: true, Set: true, Icon: true, id: true }, short: { application: true, Set: true, Icon: true, id: true } }, unit: { long: { application: 120, Set: 80, Icon: "center", id: "r" }, narrow: {}, short: { application: 1958150146, Set: -352714749, Icon: 1090584578, id: 321693 } } }, locale: "es" });
