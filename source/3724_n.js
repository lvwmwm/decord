// Module ID: 3724
// Function ID: 28485
// Name: n
// Dependencies: []

// Module 3724 (n)
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
    return closure_0[arg0].split("_");
  }
  function translate(arg0, arg1, arg2, arg3) {
    const text = `${arg0} `;
    if (1 === arg0) {
      let text1 = `${arg0} ${closure_1(0, arg1, arg2[0], arg3)}`;
    } else if (arg1) {
      const tmp12 = forms(arg2);
      if (tmp10) {
        let first = tmp12[1];
      } else {
        first = tmp12[0];
      }
      const sum = text + first;
      const tmp10 = special(arg0);
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
      const tmp3 = special(arg0);
    }
    return text1;
  }
  let closure_0 = { left: 0.000000000000000000000000000000000000000000000000000000000000000000000001215228005639001, sa: 0.6, fileFinishedImporting: 0.000000000000000000000000000000000000000000000000000000000000046672533157896935, application: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008658659363906192, ref: -72460078556573560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, key: 0.00000000000000000000000000000000000000000000000000000000000004665176951331446, "Null": 0.0000000000000000000000000000000000000010706816310228384, "Null": 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, "Null": 0.00000000000000000000000000000000000000000000000000000000000004133627722352434, "Null": -11676595157524995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000004667261458271609 };
  let obj = {};
  obj = { format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ };
  obj.months = obj;
  obj.monthsShort = "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_");
  obj = { format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ };
  obj.weekdays = obj;
  obj.weekdaysShort = "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_");
  obj.weekdaysMin = "S_P_A_T_K_Pn_\u0160".split("_");
  obj.weekdaysParseExact = true;
  obj.longDateFormat = {};
  obj.calendar = { alignItems: "is", position: "SECTION_INDEX_FIRST_NAMED_CATEGORY", <string:1373947542>: "is", <string:2681378794>: "advanceAnimationByFrame", <string:1413374383>: "Uint8Array", <string:1720105976>: "setAnimatedNodeValue" };
  obj.relativeTime = {
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
  obj.dayOfMonthOrdinalParse = /\d{1,2}-oji/;
  obj.ordinal = function ordinal(arg0) {
    return arg0 + "-oji";
  };
  obj.week = { "Bool(true)": false, "Bool(true)": false };
  return moment.defineLocale("lt", obj);
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
