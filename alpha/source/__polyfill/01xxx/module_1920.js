// Module ID: 1920
// Function ID: 1921
// Dependencies: []

// Module 1920
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
