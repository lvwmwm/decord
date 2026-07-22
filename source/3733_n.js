// Module ID: 3733
// Function ID: 28532
// Name: n
// Dependencies: []

// Module 3733 (n)
const fn = function n(moment) {
  let closure_0 = { 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004218787991378474, -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004237073876634373, -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004237031436718505, 9223372036854775807: "L", 0: "row", 0: "space-between", -9223372036854775808: "center", -9223372036854775808: 8, 9223372036854775807: "%s t\u1EDBi", minimumFontScale: "%s tr\u01B0\u1EDBc", autoFocus: "v\u00E0i gi\u00E2y", placeholder: "%d gi\u00E2y", inlineImagePadding: "m\u1ED9t ph\u00FAt", contextMenuHidden: "%d ph\u00FAt", textShadowColor: "m\u1ED9t gi\u1EDD", maxLength: "%d gi\u1EDD", selectTextOnFocus: "m\u1ED9t ng\u00E0y", textShadowRadius: "%d ng\u00E0y" };
  return moment.defineLocale("tr", {
    months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
    monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays: "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
    weekdaysShort: "Paz_Pts_Sal_\u00C7ar_Per_Cum_Cts".split("_"),
    weekdaysMin: "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_"),
    longDateFormat: { "Bool(true)": 49996544, "Bool(true)": -294763776, "Bool(true)": -294715390, "Bool(true)": -1271463934, "Bool(true)": 1380450307, "Bool(true)": 1392509235 },
    calendar: { variant: "isArray", r: "radii", now: "title", Symbol: "r", Symbol: "isArray", enabled: "ip" },
    relativeTime: {},
    ordinal(arg0, arg1) {
      if ("d" !== arg1) {
        if ("D" !== arg1) {
          if ("Do" !== arg1) {
            if ("DD" !== arg1) {
              if (0 === arg0) {
                return arg0 + "'\u0131nc\u0131";
              } else {
                const result = arg0 % 10;
                let tmp3 = closure_0[result];
                if (!tmp3) {
                  tmp3 = closure_0[arg0 % 100 - result];
                }
                if (!tmp3) {
                  let num5 = null;
                  if (arg0 >= 100) {
                    num5 = 100;
                  }
                  tmp3 = closure_0[num5];
                  const tmp5 = closure_0;
                }
                return arg0 + tmp3;
              }
            }
          }
        }
      }
      return arg0;
    },
    week: { emoji: "staff", me: "message" }
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
    globalThis.define(["HHmmss.SSSS"], fn);
  }
}
fn(this.moment);
