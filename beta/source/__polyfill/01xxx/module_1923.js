// Module ID: 1923
// Function ID: 1924
// Dependencies: []

// Module 1923
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
