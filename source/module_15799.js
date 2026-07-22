// Module ID: 15799
// Function ID: 120910
// Dependencies: []

// Module 15799
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
