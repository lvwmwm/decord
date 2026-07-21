// Module ID: 3738
// Function ID: 28560
// Name: _
// Dependencies: []

// Module 3738 (_)
const fn = function _(moment) {
  let closure_0 = { paddingHorizontal: 1375731712, height: 1608474590, flexDirection: 1105958737, alignItems: 136501, guildId: 34945602, Set: 34945792, d: 1817137664, r: 1090612304, index: 321998, forEach: 208732433 };
  let closure_1 = {};
  return moment.defineLocale("hi", {
    months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_"),
    monthsShort: "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_"),
    monthsParseExact: true,
    weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"),
    weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"),
    weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
    longDateFormat: {},
    calendar: {},
    relativeTime: {},
    preparse(_i) {
      return _i.replace(/[१२३४५६७८९०]/g, (arg0) => closure_1[arg0]);
    },
    postformat(pastFutureResult) {
      return pastFutureResult.replace(/\d/g, (arg0) => closure_0[arg0]);
    },
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour(arg0, arg1) {
      let num = arg0;
      if (12 === arg0) {
        num = 0;
      }
      if ("\u0930\u093E\u0924" === arg1) {
        let sum = num;
        if (num >= 4) {
          sum = num + 12;
        }
        let tmp = sum;
      } else {
        tmp = num;
        if ("\u0938\u0941\u092C\u0939" !== arg1) {
          if ("\u0926\u094B\u092A\u0939\u0930" === arg1) {
            let sum1 = num;
            if (num < 10) {
              sum1 = num + 12;
            }
            let sum2 = sum1;
          } else if ("\u0936\u093E\u092E" === arg1) {
            sum2 = num + 12;
          }
        }
      }
      return tmp;
    },
    meridiem(arg0, arg1, arg2) {
      let str = "\u0930\u093E\u0924";
      let str2 = "\u0930\u093E\u0924";
      if (arg0 >= 4) {
        let str3 = "\u0938\u0941\u092C\u0939";
        if (arg0 >= 10) {
          let str4 = "\u0926\u094B\u092A\u0939\u0930";
          if (arg0 >= 17) {
            if (arg0 < 20) {
              str = "\u0936\u093E\u092E";
            }
            str4 = str;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    },
    week: {}
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
