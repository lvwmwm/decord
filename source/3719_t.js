// Module ID: 3719
// Function ID: 28461
// Name: t
// Dependencies: []

// Module 3719 (t)
const fn = function t(moment) {
  function translate(arg0, arg1, arg2) {
    const text = `${arg0} `;
    if ("ss" === arg2) {
      let str13 = "sekunda";
      if (1 !== arg0) {
        if (2 !== arg0) {
          if (3 !== arg0) {
            let str14 = "sekundi";
          }
          str13 = str14;
        }
        str14 = "sekunde";
      }
      return text + str13;
    } else if ("m" === arg2) {
      let str12 = "jedne minute";
      if (arg1) {
        str12 = "jedna minuta";
      }
      return str12;
    } else if ("mm" === arg2) {
      let str10 = "minuta";
      let str11 = "minuta";
      if (1 !== arg0) {
        if (2 !== arg0) {
          str11 = str10;
        }
        str10 = "minute";
      }
      return text + str11;
    } else if ("h" === arg2) {
      let str9 = "jednog sata";
      if (arg1) {
        str9 = "jedan sat";
      }
      return str9;
    } else if ("hh" === arg2) {
      let str7 = "sat";
      if (1 !== arg0) {
        if (2 !== arg0) {
          if (3 !== arg0) {
            let str8 = "sati";
          }
          str7 = str8;
        }
        str8 = "sata";
      }
      return text + str7;
    } else if ("dd" === arg2) {
      let str6 = "dana";
      if (1 === arg0) {
        str6 = "dan";
      }
      return text + str6;
    } else if ("MM" === arg2) {
      let str4 = "mjesec";
      if (1 !== arg0) {
        if (2 !== arg0) {
          if (3 !== arg0) {
            let str5 = "mjeseci";
          }
          str4 = str5;
        }
        str5 = "mjeseca";
      }
      return text + str4;
    } else if ("yy" === arg2) {
      let str2 = "godina";
      let str3 = "godina";
      if (1 !== arg0) {
        if (2 !== arg0) {
          str3 = str2;
        }
        str2 = "godine";
      }
      return text + str3;
    }
  }
  let obj = {};
  obj = { format: "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") };
  obj.months = obj;
  obj.monthsShort = "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_");
  obj.monthsParseExact = true;
  obj.weekdays = "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_");
  obj.weekdaysShort = "ned._pon._uto._sri._\u010Det._pet._sub.".split("_");
  obj.weekdaysMin = "ne_po_ut_sr_\u010De_pe_su".split("_");
  obj.weekdaysParseExact = true;
  obj.longDateFormat = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
  obj = {
    intl: "<string:386400258>",
    flex: "<string:4274520065>",
    getChannel: "<string:4274585602>",
    PX_8: "<string:191889410>",
    textAlign: "<string:3947757571>",
    unicodeVersion: "<string:3892314863>",
    nextWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[u] [nedjelju] [u] LT";
      } else if (3 === dayResult) {
        return "[u] [srijedu] [u] LT";
      } else if (6 === dayResult) {
        return "[u] [subotu] [u] LT";
      } else {
        return "[u] dddd [u] LT";
      }
    },
    lastWeek() {
      const dayResult = this.day();
      if (0 !== dayResult) {
        if (3 !== dayResult) {
          if (6 === dayResult) {
            return "[pro\u0161le] [subote] [u] LT";
          } else {
            return "[pro\u0161li] dddd [u] LT";
          }
        }
      }
      return "[pro\u0161lu] dddd [u] LT";
    }
  };
  obj.calendar = obj;
  obj.relativeTime = { ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: "dan", dd: translate, M: "mjesec", MM: translate, y: "godinu", yy: translate };
  obj.dayOfMonthOrdinalParse = /\d{1,2}\./;
  obj.ordinal = "%d.";
  obj.week = { "Bool(true)": null, "Bool(true)": null };
  return moment.defineLocale("hr", obj);
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
