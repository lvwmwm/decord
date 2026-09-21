// Module ID: 1900
// Function ID: 1901
// Dependencies: []

// Module 1900
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "da",
  pluralRuleFunction(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    if (arg1) {
      let str3 = "other";
    } else {
      str3 = "one";
      if (1 != arg0) {
        if (!tmp3) {
          str3 = "one";
          if (0 != first) {
            str3 = "one";
          }
        }
      }
    }
    return str3;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ locale: "da-GL", parentLocale: "da" });
