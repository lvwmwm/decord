// Module ID: 15800
// Function ID: 120842
// Dependencies: []

// Module 15800
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "ru",
  pluralRuleFunction(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (tmp2) {
        if (substr >= 2) {
          if (substr <= 4) {
            let str5 = "few";
            if (substr1 >= 12) {
              str5 = "few";
            }
          }
          str3 = str5;
        }
      }
      if (!tmp2) {
        if (tmp2) {
          if (substr >= 5) {
            str5 = str6;
          }
        }
        let str6 = "other";
        if (tmp2) {
          str6 = "other";
          if (substr1 >= 11) {
            str6 = "other";
          }
        }
      }
      str6 = "many";
    }
    return str2;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": "<string:3206676482>", "Bool(true)": "<string:2102460418>" });
globalThis.IntlMessageFormat.__addLocaleData({ "Bool(true)": true, "Bool(true)": "/assets/images/native/icons/empty_channel" });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({});
