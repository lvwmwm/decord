// Module ID: 3681
// Function ID: 28053
// Name: prop
// Dependencies: []

// Module 3681 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: true, Set: true, Icon: true, id: true }, narrow: { application: true, Set: true, Icon: true, id: true }, short: { application: true, Set: true, Icon: true, id: true } };
    obj.conjunction = obj;
    const obj1 = { long: { application: "<string:3942204610>", Set: "<string:3942252546>", Icon: "<string:3941400578>", id: "<string:3942252546>" }, narrow: { application: "<string:3942204610>", Set: "<string:3942252546>", Icon: "<string:3941400578>", id: "<string:3942252546>" }, short: { application: "<string:3942204610>", Set: "<string:3942252546>", Icon: "<string:3941400578>", id: "<string:3942252546>" } };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "de";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: true, Set: true, Icon: true, id: true }, narrow: { application: true, Set: true, Icon: true, id: true }, short: { application: true, Set: true, Icon: true, id: true } }, disjunction: { long: { application: "<string:3942204610>", Set: "<string:3942252546>", Icon: "<string:3941400578>", id: "<string:3942252546>" }, narrow: { application: "<string:3942204610>", Set: "<string:3942252546>", Icon: "<string:3941400578>", id: "<string:3942252546>" }, short: { application: "<string:3942204610>", Set: "<string:3942252546>", Icon: "<string:3941400578>", id: "<string:3942252546>" } }, unit: { long: {}, narrow: {}, short: {} } }, locale: "de" });
