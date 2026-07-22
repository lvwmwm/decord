// Module ID: 3727
// Function ID: 28504
// Name: n
// Dependencies: []

// Module 3727 (n)
const fn = function n(moment) {
  function plural(arg0) {
    let tmp = arg0 % 10 < 5;
    if (tmp) {
      tmp = arg0 % 10 > 1;
    }
    if (tmp) {
      tmp = ~~arg0 / 10 % 10 !== 1;
    }
    return tmp;
  }
  function translate(arg0, arg1, arg2) {
    const text = `${arg0} `;
    if ("ss" === arg2) {
      let str9 = "sekund";
      if (plural(arg0)) {
        str9 = "sekundy";
      }
      return text + str9;
    } else if ("m" === arg2) {
      let str8 = "minut\u0119";
      if (arg1) {
        str8 = "minuta";
      }
      return str8;
    } else if ("mm" === arg2) {
      let str7 = "minut";
      if (plural(arg0)) {
        str7 = "minuty";
      }
      return text + str7;
    } else if ("h" === arg2) {
      let str6 = "godzin\u0119";
      if (arg1) {
        str6 = "godzina";
      }
      return str6;
    } else if ("hh" === arg2) {
      let str5 = "godzin";
      if (plural(arg0)) {
        str5 = "godziny";
      }
      return text + str5;
    } else if ("MM" === arg2) {
      let str4 = "miesi\u0119cy";
      if (plural(arg0)) {
        str4 = "miesi\u0105ce";
      }
      return text + str4;
    } else if ("yy" === arg2) {
      let str3 = "lat";
      if (plural(arg0)) {
        str3 = "lata";
      }
      return text + str3;
    }
  }
  let closure_0 = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_");
  let closure_1 = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");
  let obj = {
    months(arg0, arg1) {
      if (arg0) {
        if ("" === arg1) {
          const text = `(${closure_1[arg0.month(arg0)]}`;
          let text1 = `${`(${closure_1[arg0.month(arg0)]}` + "|" + closure_0[arg0.month(arg0)]})`;
        } else {
          if (obj.test(arg1)) {
            text1 = closure_1[arg0.month(arg0)];
          } else {
            text1 = closure_0[arg0.month(arg0)];
          }
          const obj = /D MMMM/;
        }
      } else {
        return closure_0;
      }
    },
    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
    weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
    weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
    weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
    longDateFormat: { "Bool(true)": 49996544, "Bool(true)": -294763776, "Bool(true)": -294715390, "Bool(true)": -1271463934, "Bool(true)": 1380450307, "Bool(true)": 1392509235 },
    calendar: obj,
    relativeTime: obj,
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: { emoji: false, me: false }
  };
  obj = {
    nextWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[W niedziel\u0119 o] LT";
      } else if (2 === dayResult) {
        return "[We wtorek o] LT";
      } else if (3 === dayResult) {
        return "[W \u015Brod\u0119 o] LT";
      } else if (6 === dayResult) {
        return "[W sobot\u0119 o] LT";
      } else {
        return "[W] dddd [o] LT";
      }
    },
    lastWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
      } else if (3 === dayResult) {
        return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
      } else if (6 === dayResult) {
        return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
      } else {
        return "[W zesz\u0142y] dddd [o] LT";
      }
    }
  };
  obj = { COZY_DRAWER: "BigUint64Array", rootContainer: "telemetry", imgWumpus: "encodeURI", ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: translate, y: "rok", yy: translate };
  return moment.defineLocale("pl", obj);
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
    globalThis.define(["HHmmss.SSSS"], fn);
  }
}
fn(this.moment);
