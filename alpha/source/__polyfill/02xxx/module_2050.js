// Module ID: 2050
// Function ID: 2051
// Dependencies: []

// Module 2050
const obj = {
  locale: "ko",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "ko-KP", parentLocale: "ko" });
