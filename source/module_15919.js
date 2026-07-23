// Module ID: 15919
// Function ID: 123089
// Dependencies: []

// Module 15919
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
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-AT", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-BE", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-CH", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-LI", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-LU", parentLocale: "de" });
