// Module ID: 15794
// Function ID: 120839
// Dependencies: []

// Module 15794
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
