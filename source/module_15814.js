// Module ID: 15814
// Function ID: 120942
// Dependencies: []

// Module 15814
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "nl",
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
globalThis.IntlMessageFormat.__addLocaleData({ 0: true, 0: true });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ 0: true, 0: "Avatar02/Username" });
globalThis.IntlMessageFormat.__addLocaleData({ 0: false, 0: false });
globalThis.IntlMessageFormat.__addLocaleData({ 0: null, 0: null });
globalThis.IntlMessageFormat.__addLocaleData({ 0: "paddingHorizontal", 0: "construct" });
