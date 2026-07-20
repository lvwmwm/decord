// Module ID: 15798
// Function ID: 120837
// Name: pluralRuleFunction
// Dependencies: []

// Module 15798 (pluralRuleFunction)
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
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": "nun", "Bool(true)": "drl" });
obj = {
  "Bool(true)": null,
  "Bool(true)": null,
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
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": "y", "Bool(true)": "context_uri" });
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": "y", "Bool(true)": "DEFAULT_BORDER_RADIUS" });
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": null, "Bool(true)": null });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": "<string:1528037380>", "Bool(true)": "<string:1739194372>" });
