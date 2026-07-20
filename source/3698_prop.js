// Module ID: 3698
// Function ID: 28065
// Name: prop
// Dependencies: []

// Module 3698 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if ("function" === typeof Intl.ListFormat.__addLocaleData) {
    const _Intl2 = Intl;
    let obj = {};
    obj = {};
    obj = { long: { -33553176: "<string:1275069300>", -889191202: "<string:1140851572>", -1023408923: "{0}\u6216{1}", -905968411: "{0}\u3001{1}" }, narrow: { -33553176: "ToString", -889191202: "sdh-IQ", -1023408923: "ToString", -905968411: "CUP" }, short: { -33553176: "<string:1275069300>", -889191202: "<string:1140851572>", -1023408923: "{0}\u6216{1}", -905968411: "{0}\u3001{1}" } };
    obj.conjunction = obj;
    const obj1 = { long: {}, narrow: {}, short: {} };
    obj.disjunction = obj1;
    const obj2 = { long: { -33553176: "<string:1275069300>", -889191202: "<string:1140851572>", -1023408923: "{0}, \u0914\u0930 {1}", -905968411: "{0}, {1}" }, narrow: { -33553176: "ToString", -889191202: "sdh-IQ", -1023408923: "ToString", -905968411: "CUP" }, short: { -33553176: "ToString", -889191202: "sdh-IQ", -1023408923: "ToString", -905968411: "CUP" } };
    obj.unit = obj2;
    obj.data = obj;
    obj.locale = "ro";
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { -33553176: "<string:1275069300>", -889191202: "<string:1140851572>", -1023408923: "{0}\u6216{1}", -905968411: "{0}\u3001{1}" }, narrow: { -33553176: "ToString", -889191202: "sdh-IQ", -1023408923: "ToString", -905968411: "CUP" }, short: { -33553176: "<string:1275069300>", -889191202: "<string:1140851572>", -1023408923: "{0}\u6216{1}", -905968411: "{0}\u3001{1}" } }, disjunction: { long: {}, narrow: {}, short: {} }, unit: { long: { -33553176: "<string:1275069300>", -889191202: "<string:1140851572>", -1023408923: "{0}, \u0914\u0930 {1}", -905968411: "{0}, {1}" }, narrow: { -33553176: "ToString", -889191202: "sdh-IQ", -1023408923: "ToString", -905968411: "CUP" }, short: { -33553176: "ToString", -889191202: "sdh-IQ", -1023408923: "ToString", -905968411: "CUP" } } }, locale: "ro" });
