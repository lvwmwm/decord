// Module ID: 3701
// Function ID: 28073
// Name: prop
// Dependencies: []

// Module 3701 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { application: "flex-start", Set: 16, Icon: 32, id: "relative" }, narrow: { application: "flex-start", Set: 16, Icon: 32, id: "relative" }, short: { application: "flex-start", Set: 16, Icon: 32, id: "relative" } };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: { application: "<string:1912668163>", Set: "String", Icon: "String", id: "<string:3477389905>" }, narrow: {}, short: { application: "<string:1959723011>", Set: "<string:1959460867>", Icon: "<string:343015427>", id: "<string:335544320>" } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "th";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { application: "flex-start", Set: 16, Icon: 32, id: "relative" }, narrow: { application: "flex-start", Set: 16, Icon: 32, id: "relative" }, short: { application: "flex-start", Set: 16, Icon: 32, id: "relative" } }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: { application: "<string:1912668163>", Set: "String", Icon: "String", id: "<string:3477389905>" }, narrow: {}, short: { application: "<string:1959723011>", Set: "<string:1959460867>", Icon: "<string:343015427>", id: "<string:335544320>" } } }, locale: "th" });
