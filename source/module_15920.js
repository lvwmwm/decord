// Module ID: 15920
// Function ID: 123091
// Dependencies: []

// Module 15920
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
