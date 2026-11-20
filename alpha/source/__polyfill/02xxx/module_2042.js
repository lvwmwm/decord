// Module ID: 2042
// Function ID: 2043
// Dependencies: []

// Module 2042
const obj = {
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
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "el-CY", parentLocale: "el" });
