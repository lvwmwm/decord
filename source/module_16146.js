// Module ID: 16146
// Function ID: 16147
// Dependencies: []

// Module 16146
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
