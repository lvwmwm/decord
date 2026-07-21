// Module ID: 3707
// Function ID: 28074
// Name: prop
// Dependencies: []

// Module 3707 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: {}, short: {} };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: { "Bool(false)": -1811938582, "Bool(false)": 1140851434, "Bool(false)": 191123, "Bool(false)": 191124 } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "hi";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: {}, narrow: {}, short: {} }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: {}, narrow: {}, short: { "Bool(false)": -1811938582, "Bool(false)": 1140851434, "Bool(false)": 191123, "Bool(false)": 191124 } } }, locale: "hi" });
