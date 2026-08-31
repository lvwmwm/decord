// Module ID: 16790
// Function ID: 16791
// Dependencies: []

// Module 16790
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "fi",
  pluralRuleFunction(arg0, arg1) {
    let str2 = "other";
    if (!arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!str.split(".")[1]) {
          str3 = "one";
        }
      }
      str2 = str3;
    }
    return str2;
  }
});
