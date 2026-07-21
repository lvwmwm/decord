// Module ID: 3715
// Function ID: 28444
// Name: n
// Dependencies: []

// Module 3715 (n)
const fn = function n(moment) {
  return moment.defineLocale("en-gb", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: { "Bool(true)": -1056964022, "Bool(true)": 1426063774, "Bool(true)": 1174405701, "Bool(true)": 78471, "Bool(true)": 78472, "Bool(true)": 83751 },
    calendar: { intl: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009919227068201119, flex: 859756496762131800000000000000000000000000000000000000000000000000000000000000000000000000000, getChannel: 146589387140.0136, PX_8: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000094246457044, textAlign: 0.00000000000000000000000000000000000000000000000000000000000000002763230690774519, unicodeVersion: 59711461306563985000000000000000000 },
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal(arg0) {
      const result = arg0 % 10;
      let str = "th";
      let str2 = "th";
      if (1 !== ~~arg0 % 100 / 10) {
        let str3 = "st";
        if (1 !== result) {
          let str4 = "nd";
          if (2 !== result) {
            if (3 === result) {
              str = "rd";
            }
            str4 = str;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return arg0 + str2;
    },
    week: { "Bool(true)": null, "Bool(true)": null }
  });
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    if ("function" === typeof require) {
      fn(require(dependencyMap[0]));
    }
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(["HH:mm:ss"], fn);
  }
}
fn(this.moment);
