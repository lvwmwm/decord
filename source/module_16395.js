// Module ID: 16395
// Function ID: 16396
// Dependencies: []

// Module 16395
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "bg",
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
