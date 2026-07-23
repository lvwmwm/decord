// Module ID: 15931
// Function ID: 123115
// Dependencies: []

// Module 15931
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
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-AW", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-BE", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-BQ", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-CW", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-SR", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-SX", parentLocale: "nl" });
