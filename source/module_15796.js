// Module ID: 15796
// Function ID: 120877
// Dependencies: []

// Module 15796
let obj = {
  locale: "en",
  pluralRuleFunction(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (1 != substr) {
        if (2 != substr) {
          let str7 = "other";
          if (3 == substr) {
            str7 = "other";
            if (13 != substr1) {
              str7 = "few";
            }
          }
          let str5 = str7;
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (tmp2) {
          str3 = "one";
        }
      }
    }
    return str3;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "restricted", deviceWidth: "message" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
obj = {
  locale: "en-Dsrt",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "name", deviceWidth: "Array" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "Path" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "getChannel" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "slice" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "channel_id" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "np" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "value" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "channel" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "valueOf" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "icon" });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "props" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "guildId" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "location" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "rejectWithError" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "borderRadius" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "accessible", deviceWidth: "intl" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "App Crashed", deviceWidth: "o" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
obj = {
  locale: "en-Shaw",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: true, deviceWidth: true });
globalThis.IntlMessageFormat.__addLocaleData({});
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: "Array", deviceWidth: "isArray" });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
globalThis.IntlMessageFormat.__addLocaleData({ *-*-*: null, deviceWidth: null });
