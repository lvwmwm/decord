// Module ID: 16051
// Function ID: 123831
// Dependencies: []

// Module 16051
let obj = {
  locale: "zh",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans", parentLocale: "zh" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans-HK", parentLocale: "zh-Hans" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans-MO", parentLocale: "zh-Hans" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans-SG", parentLocale: "zh-Hans" });
obj = {
  locale: "zh-Hant",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hant-HK", parentLocale: "zh-Hant" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hant-MO", parentLocale: "zh-Hant-HK" });
