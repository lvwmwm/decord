// Module ID: 3714
// Function ID: 28432
// Name: n
// Dependencies: []

// Module 3714 (n)
const fn = function n(moment) {
  let obj = {
    monthsNominativeEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2_\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2_\u039C\u03AC\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2_\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2_\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2_\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2".split("_"),
    monthsGenitiveEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5_\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5_\u039C\u03B1\u0390\u03BF\u03C5_\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5_\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5_\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5_\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5_\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5".split("_"),
    months(month, str) {
      let self = this;
      if (month) {
        if ("string" !== typeof str) {
          self._monthsNominativeEl[month.month(month)];
        } else {
          const obj = /D/;
        }
        self = month.month();
      } else {
        return self._monthsNominativeEl;
      }
    },
    monthsShort: "\u0399\u03B1\u03BD_\u03A6\u03B5\u03B2_\u039C\u03B1\u03C1_\u0391\u03C0\u03C1_\u039C\u03B1\u03CA_\u0399\u03BF\u03C5\u03BD_\u0399\u03BF\u03C5\u03BB_\u0391\u03C5\u03B3_\u03A3\u03B5\u03C0_\u039F\u03BA\u03C4_\u039D\u03BF\u03B5_\u0394\u03B5\u03BA".split("_"),
    weekdays: "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE_\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1_\u03A4\u03C1\u03AF\u03C4\u03B7_\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7_\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7_\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE_\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF".split("_"),
    weekdaysShort: "\u039A\u03C5\u03C1_\u0394\u03B5\u03C5_\u03A4\u03C1\u03B9_\u03A4\u03B5\u03C4_\u03A0\u03B5\u03BC_\u03A0\u03B1\u03C1_\u03A3\u03B1\u03B2".split("_"),
    weekdaysMin: "\u039A\u03C5_\u0394\u03B5_\u03A4\u03C1_\u03A4\u03B5_\u03A0\u03B5_\u03A0\u03B1_\u03A3\u03B1".split("_"),
    meridiem(arg0, arg1, arg2) {
      if (arg0 > 11) {
        let str2 = "\u039C\u039C";
        if (arg2) {
          str2 = "\u03BC\u03BC";
        }
        let str = str2;
      } else {
        str = "\u03A0\u039C";
        if (arg2) {
          str = "\u03C0\u03BC";
        }
      }
      return str;
    },
    isPM(arg0) {
      return "\u03BC" === `${arg0}`.toLowerCase()[0];
    },
    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat: {},
    calendarEl: obj,
    calendar(arg0, hours) {
      const obj = this._calendarEl[arg0];
      let hoursResult = hours;
      if (hours) {
        hoursResult = hours.hours();
      }
      let tmp2 = obj instanceof Function;
      if (!tmp2) {
        const _Object = Object;
        tmp2 = "[object Function]" === toString.call(obj);
      }
      let str2 = obj;
      if (tmp2) {
        str2 = obj.apply(hours);
      }
      let str3 = "\u03C3\u03C4\u03B9\u03C2";
      if (hoursResult % 12 === 1) {
        str3 = "\u03C3\u03C4\u03B7";
      }
      return str2.replace("{}", str3);
    },
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}η/,
    ordinal: "%d\u03B7",
    week: { <string:1431496722>: false, <string:1627556098>: false }
  };
  obj = {
    lastWeek() {
      let str = "[\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7] dddd [{}] LT";
      if (6 === this.day()) {
        str = "[\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF] dddd [{}] LT";
      }
      return str;
    }
  };
  return moment.defineLocale("el", obj);
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
