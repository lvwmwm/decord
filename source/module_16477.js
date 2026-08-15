// Module ID: 16477
// Function ID: 16478
// Dependencies: []

// Module 16477
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "tr",
  pluralRuleFunction(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      if (1 == arg0) {
        str = "one";
      }
      str2 = str;
    }
    return str2;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ locale: "tr-CY", parentLocale: "tr" });
