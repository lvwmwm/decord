// Module ID: 16041
// Function ID: 123810
// Dependencies: []

// Module 16041
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
