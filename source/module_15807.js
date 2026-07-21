// Module ID: 15807
// Function ID: 120866
// Dependencies: []

// Module 15807
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
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: 18182465, 930166098: 1106731264 });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: -1841102849, 930166098: -1845493364 });
globalThis.IntlMessageFormat.__addLocaleData({ -582979962: -1056964288, 930166098: 1107297327 });
globalThis.IntlMessageFormat.__addLocaleData({});
