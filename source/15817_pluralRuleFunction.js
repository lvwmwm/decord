// Module ID: 15817
// Function ID: 120948
// Name: pluralRuleFunction
// Dependencies: []

// Module 15817 (pluralRuleFunction)
let obj = {
  locale: "pt",
  pluralRuleFunction(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (tmp2) {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 <= 2) {
            str2 = "other";
            if (2 != arg0) {
              str2 = "one";
            }
          }
        }
      }
      str = str2;
    }
    return str;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ 0: null, 0: null });
obj = {
  0: true,
  0: true,
  pluralRuleFunction(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (1 == arg0) {
        str2 = "other";
        if (tmp2) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ 0: "nun", 0: "drl" });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ 0: "LongType", 0: "c_chara_4" });
globalThis.IntlMessageFormat.__addLocaleData({ 0: "y", 0: "isArray" });
globalThis.IntlMessageFormat.__addLocaleData({ 0: null, 0: null });
globalThis.IntlMessageFormat.__addLocaleData({});
