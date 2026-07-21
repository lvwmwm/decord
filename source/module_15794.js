// Module ID: 15794
// Function ID: 120873
// Dependencies: []

// Module 15794
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "de",
  pluralRuleFunction(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (1 == arg0) {
        str2 = "other";
        if (tmp2) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "absolute", deviceWidth: 32 });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "Array", deviceWidth: "isArray" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: true, deviceWidth: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "none", deviceWidth: false });
globalThis.IntlMessageFormat.__addLocaleData({});
