// Module ID: 1927
// Function ID: 1928
// Dependencies: []

// Module 1927
const obj = {
  locale: "ko",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "ko-KP", parentLocale: "ko" });
