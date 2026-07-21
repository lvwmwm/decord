// Module ID: 15805
// Function ID: 120861
// Name: pluralRuleFunction
// Dependencies: []

// Module 15805 (pluralRuleFunction)
let obj = {
  locale: "pt",
  pluralRuleFunction(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (tmp2) {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 <= 2) {
            str2 = "other";
            if (2 != arg0) {
              str2 = "one";
            }
          }
        }
      }
      str = str2;
    }
    return str;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: "nun", 930166098: "drl" });
obj = {
  -582979962: true,
  930166098: "/assets/images/native/icons/empty_channel",
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
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: false, 930166098: false });
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: "y", 930166098: "isArray" });
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: null, 930166098: null });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: null, 930166098: null });
