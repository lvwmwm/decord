// Module ID: 15970
// Function ID: 123421
// Dependencies: []

// Module 15970
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "fi",
  pluralRuleFunction(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (1 == arg0) {
        str2 = "other";
        if (tmp2) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  }
});
