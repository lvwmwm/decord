// Module ID: 2052
// Function ID: 2053
// Dependencies: []

// Module 2052
const obj = {
  locale: "ko",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "ko-KP", parentLocale: "ko" });
