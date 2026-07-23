// Module ID: 15927
// Function ID: 123107
// Dependencies: []

// Module 15927
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "it",
  pluralRuleFunction(arg0, arg1) {
    String(arg0);
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str3 = "other";
          }
          let str2 = str3;
        }
      }
      str3 = "many";
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "other";
        if (tmp2) {
          str2 = "one";
        }
      }
    }
    return str2;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ locale: "it-CH", parentLocale: "it" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "it-SM", parentLocale: "it" });
