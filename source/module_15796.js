// Module ID: 15796
// Function ID: 120833
// Dependencies: []

// Module 15796
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "no",
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
