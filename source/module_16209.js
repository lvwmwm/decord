// Module ID: 16209
// Function ID: 16210
// Dependencies: []

// Module 16209
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "hu",
  pluralRuleFunction(arg0, arg1) {
    if (arg1) {
      if (1 == arg0) {
        let str2 = "one";
      } else {
        str2 = "other";
      }
      let str = str2;
    } else {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  }
});
