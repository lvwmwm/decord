// Module ID: 3699
// Function ID: 28071
// Name: prop
// Dependencies: []

// Module 3699 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: { application: "<string:3940566210>", Set: "<string:3942252546>", Icon: "<string:3940548610>", id: "<string:3942252546>" }, narrow: { application: "<string:3940566210>", Set: "<string:3942252546>", Icon: "<string:3940548610>", id: "<string:3942252546>" }, short: { application: "<string:3940566210>", Set: "<string:3942252546>", Icon: "<string:3940548610>", id: "<string:3942252546>" } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "ru";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: { application: "<string:3940566210>", Set: "<string:3942252546>", Icon: "<string:3940548610>", id: "<string:3942252546>" }, narrow: { application: "<string:3940566210>", Set: "<string:3942252546>", Icon: "<string:3940548610>", id: "<string:3942252546>" }, short: { application: "<string:3940566210>", Set: "<string:3942252546>", Icon: "<string:3940548610>", id: "<string:3942252546>" } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "ru" });
