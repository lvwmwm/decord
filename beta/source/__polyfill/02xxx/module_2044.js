// Module ID: 2044
// Function ID: 2045
// Dependencies: []

// Module 2044
const obj = {
  locale: "fi",
  pluralRuleFunction(arg0, arg1) {
    let str2 = "other";
    const str = String(arg0);
    const tmp = str.split(".")[1];
    if (!arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!tmp) {
          str3 = "one";
        }
      }
      str2 = str3;
    }
    return str2;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
