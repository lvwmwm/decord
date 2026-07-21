// Module ID: 3720
// Function ID: 28461
// Name: n
// Dependencies: []

// Module 3720 (n)
const fn = function n(moment) {
  function translate(arg0, arg1, arg2, arg3) {
    if ("s" === arg2) {
      if (arg3) {
        let str21 = "n\u00E9h\u00E1ny m\u00E1sodperc";
      } else {
        str21 = "n\u00E9h\u00E1ny m\u00E1sodperce";
      }
      return str21;
    } else if ("ss" === arg2) {
      let tmp = arg3;
      if (!arg3) {
        tmp = arg1;
      }
      let str20 = " m\u00E1sodperce";
      if (arg0 + tmp) {
        str20 = " m\u00E1sodperc";
      }
      return str20;
    } else if ("m" === arg2) {
      if (arg3) {
        let str18 = " perc";
      } else {
        str18 = " perce";
      }
      return "egy" + str18;
    } else if ("mm" === arg2) {
      if (arg3) {
        let str17 = " perc";
      } else {
        str17 = " perce";
      }
      return arg0 + str17;
    } else if ("h" === arg2) {
      if (arg3) {
        let str15 = " \u00F3ra";
      } else {
        str15 = " \u00F3r\u00E1ja";
      }
      return "egy" + str15;
    } else if ("hh" === arg2) {
      if (arg3) {
        let str14 = " \u00F3ra";
      } else {
        str14 = " \u00F3r\u00E1ja";
      }
      return arg0 + str14;
    } else if ("d" === arg2) {
      if (arg3) {
        let str12 = " nap";
      } else {
        str12 = " napja";
      }
      return "egy" + str12;
    } else if ("dd" === arg2) {
      if (arg3) {
        let str11 = " nap";
      } else {
        str11 = " napja";
      }
      return arg0 + str11;
    } else if ("M" === arg2) {
      if (arg3) {
        let str9 = " h\u00F3nap";
      } else {
        str9 = " h\u00F3napja";
      }
      return "egy" + str9;
    } else if ("MM" === arg2) {
      if (arg3) {
        let str8 = " h\u00F3nap";
      } else {
        str8 = " h\u00F3napja";
      }
      return arg0 + str8;
    } else if ("y" === arg2) {
      if (arg3) {
        let str6 = " \u00E9v";
      } else {
        str6 = " \u00E9ve";
      }
      return "egy" + str6;
    } else if ("yy" === arg2) {
      if (arg3) {
        let str5 = " \u00E9v";
      } else {
        str5 = " \u00E9ve";
      }
      return arg0 + str5;
    } else {
      return "";
    }
  }
  function week(arg0) {
    const self = this;
    let str = "[m\u00FAlt] ";
    if (arg0) {
      str = "";
    }
    return str + "[" + closure_0[self.day(self)] + "] LT[-kor]";
  }
  let closure_0 = "vas\u00E1rnap h\u00E9tf\u0151n kedden szerd\u00E1n cs\u00FCt\u00F6rt\u00F6k\u00F6n p\u00E9nteken szombaton".split(" ");
  let obj = {
    months: "janu\u00E1r_febru\u00E1r_m\u00E1rcius_\u00E1prilis_m\u00E1jus_j\u00FAnius_j\u00FAlius_augusztus_szeptember_okt\u00F3ber_november_december".split("_"),
    monthsShort: "jan_feb_m\u00E1rc_\u00E1pr_m\u00E1j_j\u00FAn_j\u00FAl_aug_szept_okt_nov_dec".split("_"),
    weekdays: "vas\u00E1rnap_h\u00E9tf\u0151_kedd_szerda_cs\u00FCt\u00F6rt\u00F6k_p\u00E9ntek_szombat".split("_"),
    weekdaysShort: "vas_h\u00E9t_kedd_sze_cs\u00FCt_p\u00E9n_szo".split("_"),
    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
    longDateFormat: { <string:1122280543>: false, <string:3251850218>: false, <string:306010250>: false, <string:37429971>: false, <string:1812403200>: false, <string:3855182856>: false },
    meridiemParse: /de|du/i,
    isPM(str) {
      return "u" === str.charAt(1).toLowerCase();
    },
    meridiem(arg0, arg1, arg2) {
      if (arg0 < 12) {
        let str2 = "DE";
        if (true === arg2) {
          str2 = "de";
        }
        let str = str2;
      } else {
        str = "DU";
        if (true === arg2) {
          str = "du";
        }
      }
      return str;
    },
    calendar: obj,
    relativeTime: { s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: { <string:1431496722>: false, <string:1627556098>: false }
  };
  obj = {
    nextWeek() {
      return week.call(this, true);
    },
    lastWeek() {
      return week.call(this, false);
    }
  };
  return moment.defineLocale("hu", obj);
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
