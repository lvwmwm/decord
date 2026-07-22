// Module ID: 15802
// Function ID: 120916
// Dependencies: []

// Module 15802
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
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ 0: true, 0: true });
globalThis.IntlMessageFormat.__addLocaleData({ 0: false, 0: false });
globalThis.IntlMessageFormat.__addLocaleData({ 0: 0.0000000000000000000000000000000000000000000000000007154545686270343, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007295240586021974 });
globalThis.IntlMessageFormat.__addLocaleData({ 0: false, 0: false });
