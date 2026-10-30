// Module ID: 1934
// Function ID: 1935
// Dependencies: []

// Module 1934
const obj = {
  locale: "vi",
  pluralRuleFunction(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
