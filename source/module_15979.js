// Module ID: 15979
// Function ID: 123439
// Dependencies: []

// Module 15979
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
