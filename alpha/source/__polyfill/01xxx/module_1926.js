// Module ID: 1926
// Function ID: 1927
// Dependencies: []

// Module 1926
const obj = {
  locale: "ko",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "ko-KP", parentLocale: "ko" });
