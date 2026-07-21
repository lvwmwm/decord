// Module ID: 3707
// Function ID: 28079
// Name: prop
// Dependencies: []

// Module 3707 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: {}, narrow: { application: "SYSTEM_DM", Set: "_headers", Icon: "L", id: "ROLE_SUBSCRIPTIONS_EMOJIS" }, short: { application: "SYSTEM_DM", Set: "_headers", Icon: "L", id: "ROLE_SUBSCRIPTIONS_EMOJIS" } };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: {}, narrow: {}, short: {} };
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
prop.push({ data: { conjunction: { long: {}, narrow: { application: "SYSTEM_DM", Set: "_headers", Icon: "L", id: "ROLE_SUBSCRIPTIONS_EMOJIS" }, short: { application: "SYSTEM_DM", Set: "_headers", Icon: "L", id: "ROLE_SUBSCRIPTIONS_EMOJIS" } }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: {}, narrow: {}, short: {} } }, locale: "hi" });
