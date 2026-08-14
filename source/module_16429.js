// Module ID: 16429
// Function ID: 16430
// Dependencies: []

// Module 16429
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "vi",
  pluralRuleFunction(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  }
});
