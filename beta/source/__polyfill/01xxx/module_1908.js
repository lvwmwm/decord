// Module ID: 1908
// Function ID: 1909
// Dependencies: []

// Module 1908
const obj = {
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
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
