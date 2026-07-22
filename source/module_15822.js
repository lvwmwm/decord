// Module ID: 15822
// Function ID: 120959
// Dependencies: []

// Module 15822
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
globalThis.IntlMessageFormat.__addLocaleData({ 0: "png", 0: "SETTINGS_PREMIUM_MANAGE_PLAN" });
