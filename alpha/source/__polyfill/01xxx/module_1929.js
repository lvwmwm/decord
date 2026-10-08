// Module ID: 1929
// Function ID: 1930
// Dependencies: []

// Module 1929
const obj = {
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
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
