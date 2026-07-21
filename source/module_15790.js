// Module ID: 15790
// Function ID: 120829
// Dependencies: []

// Module 15790
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
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: "absolute", 930166098: 32 });
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: null, 930166098: true });
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: null, 930166098: null });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: true, 930166098: "Enter Password" });
