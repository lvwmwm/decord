// Module ID: 3717
// Function ID: 28450
// Name: n
// Dependencies: []

// Module 3717 (n)
const fn = function n(moment) {
  let split;
  let split2;
  function translate(arg0, arg1, arg2, arg3) {
    if ("s" === arg2) {
      let str18 = "muutama sekunti";
      if (arg3) {
        str18 = "muutaman sekunnin";
      }
      return str18;
    } else if ("ss" === arg2) {
      let str17 = "sekuntia";
      if (arg3) {
        str17 = "sekunnin";
      }
      return str17;
    } else if ("m" === arg2) {
      let str16 = "minuutti";
      if (arg3) {
        str16 = "minuutin";
      }
      return str16;
    } else {
      if ("mm" === arg2) {
        let str14 = "minuuttia";
        if (arg3) {
          str14 = "minuutin";
        }
        let str4 = str14;
      } else if ("h" === arg2) {
        let str13 = "tunti";
        if (arg3) {
          str13 = "tunnin";
        }
        return str13;
      } else if ("hh" === arg2) {
        let str12 = "tuntia";
        if (arg3) {
          str12 = "tunnin";
        }
        str4 = str12;
      } else if ("d" === arg2) {
        let str11 = "p\u00E4iv\u00E4";
        if (arg3) {
          str11 = "p\u00E4iv\u00E4n";
        }
        return str11;
      } else if ("dd" === arg2) {
        let str10 = "p\u00E4iv\u00E4\u00E4";
        if (arg3) {
          str10 = "p\u00E4iv\u00E4n";
        }
        str4 = str10;
      } else if ("M" === arg2) {
        let str9 = "kuukausi";
        if (arg3) {
          str9 = "kuukauden";
        }
        return str9;
      } else if ("MM" === arg2) {
        let str8 = "kuukautta";
        if (arg3) {
          str8 = "kuukauden";
        }
        str4 = str8;
      } else if ("y" === arg2) {
        let str7 = "vuosi";
        if (arg3) {
          str7 = "vuoden";
        }
        return str7;
      } else {
        str4 = "";
        if ("yy" === arg2) {
          let str6 = "vuotta";
          if (arg3) {
            str6 = "vuoden";
          }
          str4 = str6;
        }
      }
      if (arg0 >= 10) {
        return arg0 + " " + str4;
      } else if (arg3) {
        let tmp3 = items[arg0];
      } else {
        tmp3 = parts[arg0];
      }
    }
  }
  const parts = "nolla yksi kaksi kolme nelj\u00E4 viisi kuusi seitsem\u00E4n kahdeksan yhdeks\u00E4n".split(" ");
  const items = ["messageRenderHasMoreAfter", "%FinalizationRegistry%", "sdh-IQ", "int64", "ERROR_SOURCE_UNKNOWN", "AUTO_ENABLED", "MUR", parts[7], parts[8], parts[9]];
  let obj = { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\u00E4kuu_hein\u00E4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kes\u00E4_hein\u00E4_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { "Bool(false)": -10387641768138236000000000000000000, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008817335156105616, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002752416255668901, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000348198836416847, "Bool(false)": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026661738909419595, "Bool(false)": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020986604827684637, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013053625278837557, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009456563898842292, "Bool(false)": 137371844608, "Bool(false)": "unique" }, calendar: { alignItems: "hours", position: "scalar", <string:1373947542>: 5, <string:2681378794>: "order", <string:1413374383>: "scalar", <string:1720105976>: 13 }, relativeTime: obj, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { "Bool(true)": false, "Bool(true)": false } };
  ({ split, split: split2 } = "su_ma_ti_ke_to_pe_la");
  obj = { "Bool(false)": null, "Bool(false)": null, s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate };
  return moment.defineLocale("fi", obj);
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
    globalThis.define([1782644737], fn);
  }
}
fn(this.moment);
