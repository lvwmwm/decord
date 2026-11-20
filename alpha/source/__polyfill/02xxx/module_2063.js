// Module ID: 2063
// Function ID: 2064
// Dependencies: []

// Module 2063
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
