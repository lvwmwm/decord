// Module ID: 3726
// Function ID: 28495
// Name: n
// Dependencies: [3712]

// Module 3726 (n)
const fn = function n(moment) {
  function translateSingular(arg0, arg1, arg2, arg3) {
    const tmp = forms(arg2);
    if (arg1) {
      let first = tmp[0];
    } else if (arg3) {
      first = tmp[1];
    } else {
      first = tmp[2];
    }
    return first;
  }
  function special(arg0) {
    let tmp = arg0 % 10 === 0;
    if (!tmp) {
      let tmp2 = arg0 > 10;
      if (tmp2) {
        tmp2 = arg0 < 20;
      }
      tmp = tmp2;
    }
    return tmp;
  }
  function forms(arg0) {
    return table[arg0].split("_");
  }
  function translate(arg0, arg1, arg2, arg3) {
    const text = `${arg0} `;
    if (1 === arg0) {
      let text1 = `${arg0} ${translateSingular(0, arg1, arg2[0], arg3)}`;
    } else if (arg1) {
      const tmp12 = forms(arg2);
      if (tmp10) {
        let first = tmp12[1];
      } else {
        first = tmp12[0];
      }
      const sum = text + first;
      tmp10 = special(arg0);
    } else if (arg3) {
      text1 = text + forms(arg2)[1];
    } else {
      const tmp5 = forms(arg2);
      if (tmp3) {
        let tmp6 = tmp5[1];
      } else {
        tmp6 = tmp5[2];
      }
      text1 = text + tmp6;
      tmp3 = special(arg0);
    }
    return text1;
  }
  let closure_0 = { ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010Di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" };
  let obj = {};
  obj = { format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ };
  obj.months = obj;
  obj.monthsShort = "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_");
  obj = { format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ };
  obj.weekdays = obj;
  obj.weekdaysShort = "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_");
  obj.weekdaysMin = "S_P_A_T_K_Pn_\u0160".split("_");
  obj.weekdaysParseExact = true;
  obj.longDateFormat = { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" };
  obj.calendar = { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012F] dddd LT", sameElse: "L" };
  const obj1 = {
    future: "po %s",
    past: "prie\u0161 %s",
    s: function translateSeconds(arg0, arg1, arg2, arg3) {
      let str = "kelios sekund\u0117s";
      if (!arg1) {
        let str2 = "kelias sekundes";
        if (arg3) {
          str2 = "keli\u0173 sekund\u017Ei\u0173";
        }
        str = str2;
      }
      return str;
    },
    ss: translate,
    m: translateSingular,
    mm: translate,
    h: translateSingular,
    hh: translate,
    d: translateSingular,
    dd: translate,
    M: translateSingular,
    MM: translate,
    y: translateSingular,
    yy: translate
  };
  obj.relativeTime = obj1;
  obj.dayOfMonthOrdinalParse = /\d{1,2}-oji/;
  obj.ordinal = function ordinal(arg0) {
    return arg0 + "-oji";
  };
  obj.week = { dow: 1, doy: 4 };
  return moment.defineLocale("lt", obj);
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
