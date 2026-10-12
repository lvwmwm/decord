// Module ID: 1929
// Function ID: 1930
// Dependencies: []

// Module 1929
const obj = {
  locale: "nl",
  pluralRuleFunction(arg0, arg1) {
    let str2 = "other";
    const str = String(arg0);
    const tmp = str.split(".")[1];
    if (!arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!tmp) {
          str3 = "one";
        }
      }
      str2 = str3;
    }
    return str2;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-AW", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-BE", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-BQ", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-CW", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-SR", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-SX", parentLocale: "nl" });
