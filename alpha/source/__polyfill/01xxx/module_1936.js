// Module ID: 1936
// Function ID: 1937
// Dependencies: []

// Module 1936
const obj = {
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
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "tr-CY", parentLocale: "tr" });
