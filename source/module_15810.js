// Module ID: 15810
// Function ID: 120872
// Dependencies: []

// Module 15810
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
globalThis.IntlMessageFormat.__addLocaleData({});
