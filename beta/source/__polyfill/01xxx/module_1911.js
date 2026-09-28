// Module ID: 1911
// Function ID: 1912
// Dependencies: []

// Module 1911
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
