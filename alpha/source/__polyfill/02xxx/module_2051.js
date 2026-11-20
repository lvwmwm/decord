// Module ID: 2051
// Function ID: 2052
// Dependencies: []

// Module 2051
const obj = {
  locale: "ko",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "ko-KP", parentLocale: "ko" });
