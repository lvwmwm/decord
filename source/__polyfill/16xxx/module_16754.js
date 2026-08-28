// Module ID: 16754
// Function ID: 16755
// Dependencies: []

// Module 16754
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
globalThis.IntlMessageFormat.__addLocaleData({ locale: "el-CY", parentLocale: "el" });
