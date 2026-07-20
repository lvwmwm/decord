// Module ID: 15784
// Function ID: 120807
// Dependencies: []

// Module 15784
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "el",
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
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": "Enter Password", "Bool(true)": null });
