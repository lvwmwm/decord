// Module ID: 3713
// Function ID: 28432
// Name: n
// Dependencies: [3712]

// Module 3713 (n)
const fn = function n(moment) {
  function plural(arg0) {
    let tmp = arg0 > 1;
    if (tmp) {
      tmp = arg0 < 5;
    }
    if (tmp) {
      tmp = 1 !== ~~arg0 / 10;
    }
    return tmp;
  }
  function translate(arg0, arg1, arg2, arg3) {
    const text = `${arg0} `;
    if ("s" === arg2) {
      if (arg1) {
        let str22 = "p\u00E1r sekund";
      } else {
        str22 = "p\u00E1r sekundami";
      }
      return str22;
    } else if ("ss" === arg2) {
      if (!arg1) {
        if (!arg3) {
          let text1 = `${tmp}sekundami`;
        }
        return text1;
      }
      let str21 = "sekund";
      if (plural(arg0)) {
        str21 = "sekundy";
      }
      text1 = text + str21;
    } else if ("m" === arg2) {
      let str18 = "minuta";
      if (!arg1) {
        let str19 = "minutou";
        if (arg3) {
          str19 = "minutu";
        }
        str18 = str19;
      }
      return str18;
    } else if ("mm" === arg2) {
      if (!arg1) {
        if (!arg3) {
          let text2 = `${tmp}minutami`;
        }
        return text2;
      }
      let str17 = "minut";
      if (plural(arg0)) {
        str17 = "minuty";
      }
      text2 = text + str17;
    } else if ("h" === arg2) {
      let str14 = "hodina";
      if (!arg1) {
        let str15 = "hodinou";
        if (arg3) {
          str15 = "hodinu";
        }
        str14 = str15;
      }
      return str14;
    } else if ("hh" === arg2) {
      if (!arg1) {
        if (!arg3) {
          let text3 = `${tmp}hodinami`;
        }
        return text3;
      }
      let str13 = "hodin";
      if (plural(arg0)) {
        str13 = "hodiny";
      }
      text3 = text + str13;
    } else if ("d" === arg2) {
      if (arg1) {
        let str11 = "den";
      } else {
        str11 = "dnem";
      }
      return str11;
    } else if ("dd" === arg2) {
      if (!arg1) {
        if (!arg3) {
          let text4 = `${tmp}dny`;
        }
        return text4;
      }
      let str10 = "dn\u00ED";
      if (plural(arg0)) {
        str10 = "dny";
      }
      text4 = text + str10;
    } else if ("M" === arg2) {
      if (arg1) {
        let str8 = "m\u011Bs\u00EDc";
      } else {
        str8 = "m\u011Bs\u00EDcem";
      }
      return str8;
    } else if ("MM" === arg2) {
      if (!arg1) {
        if (!arg3) {
          let text5 = `${tmp}měsíci`;
        }
        return text5;
      }
      let str7 = "m\u011Bs\u00EDc\u016F";
      if (plural(arg0)) {
        str7 = "m\u011Bs\u00EDce";
      }
      text5 = text + str7;
    } else if ("y" === arg2) {
      if (arg1) {
        let str5 = "rok";
      } else {
        str5 = "rokem";
      }
      return str5;
    } else if ("yy" === arg2) {
      if (!arg1) {
        if (!arg3) {
          let text6 = `${tmp}lety`;
        }
        return text6;
      }
      let str4 = "let";
      if (plural(arg0)) {
        str4 = "roky";
      }
      text6 = text + str4;
    }
  }
  const parts = "leden_\u00FAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\u00E1\u0159\u00ED_\u0159\u00EDjen_listopad_prosinec".split("_");
  const parts1 = "led_\u00FAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\u00E1\u0159_\u0159\u00EDj_lis_pro".split("_");
  let obj = { months: parts, monthsShort: parts1 };
  const items = [];
  let num = 0;
  do {
    let _RegExp = RegExp;
    let tmp3 = new.target;
    let tmp4 = new.target;
    let str = "i";
    let regExp = new RegExp("^" + parts[num] + "$|^" + parts1[num] + "$", "i");
    let tmp6 = regExp;
    items[num] = regExp;
    num = num + 1;
  } while (num < 12);
  obj.monthsParse = items;
  const items1 = [];
  let num2 = 0;
  do {
    let _RegExp2 = RegExp;
    let tmp7 = new.target;
    let tmp8 = new.target;
    let str2 = "i";
    let regExp1 = new RegExp("^" + parts1[num2] + "$", "i");
    let tmp10 = regExp1;
    items1[num2] = regExp1;
    num2 = num2 + 1;
  } while (num2 < 12);
  obj.shortMonthsParse = items1;
  const items2 = [];
  let num3 = 0;
  do {
    let _RegExp3 = RegExp;
    let tmp11 = new.target;
    let tmp12 = new.target;
    let str3 = "i";
    let regExp2 = new RegExp("^" + parts[num3] + "$", "i");
    let tmp14 = regExp2;
    items2[num3] = regExp2;
    num3 = num3 + 1;
  } while (num3 < 12);
  obj.longMonthsParse = items2;
  obj.weekdays = "ned\u011Ble_pond\u011Bl\u00ED_\u00FAter\u00FD_st\u0159eda_\u010Dtvrtek_p\u00E1tek_sobota".split("_");
  obj.weekdaysShort = "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_");
  obj.weekdaysMin = "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_");
  obj.longDateFormat = { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" };
  obj = {
    sameDay: "[dnes v] LT",
    nextDay: "[z\u00EDtra v] LT",
    nextWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[v ned\u011Bli v] LT";
      } else {
        if (1 !== dayResult) {
          if (2 !== dayResult) {
            if (3 === dayResult) {
              return "[ve st\u0159edu v] LT";
            } else if (4 === dayResult) {
              return "[ve \u010Dtvrtek v] LT";
            } else if (5 === dayResult) {
              return "[v p\u00E1tek v] LT";
            } else if (6 === dayResult) {
              return "[v sobotu v] LT";
            }
          }
        }
        return "[v] dddd [v] LT";
      }
    },
    lastDay: "[v\u010Dera v] LT",
    lastWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[minulou ned\u011Bli v] LT";
      } else {
        if (1 !== dayResult) {
          if (2 !== dayResult) {
            if (3 === dayResult) {
              return "[minulou st\u0159edu v] LT";
            } else {
              if (4 !== dayResult) {
                if (5 !== dayResult) {
                  if (6 === dayResult) {
                    return "[minulou sobotu v] LT";
                  }
                }
              }
              return "[minul\u00FD] dddd [v] LT";
            }
          }
        }
        return "[minul\u00E9] dddd [v] LT";
      }
    },
    sameElse: "L"
  };
  obj.calendar = obj;
  obj = { future: "za %s", past: "p\u0159ed %s", s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate };
  obj.relativeTime = obj;
  obj.dayOfMonthOrdinalParse = /\d{1,2}\./;
  obj.ordinal = "%d.";
  obj.week = { dow: 1, doy: 4 };
  return moment.defineLocale("cs", obj);
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    if ("function" === typeof require) {
      fn(require("t"));
    }
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);
