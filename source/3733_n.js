// Module ID: 3733
// Function ID: 28527
// Name: n
// Dependencies: []

// Module 3733 (n)
const fn = function n(moment) {
  let closure_0 = { soundshare_first_session: 49972480, soundshare_last_session: 49971968, localizedPrice: 32555776, paymentMode: 25165568, subscriptionPeriod: 25165824, price: 37343232, numberOfPeriods: 373772544, type: 1652, identifier: 2560, "Bool(true)": 5120, "Bool(true)": 5120, "Bool(true)": -1924005632, "Bool(true)": 1917160773, "Bool(true)": 100, "Bool(true)": 100, "Bool(true)": 1166889730, "Bool(true)": 1166886285, "Bool(true)": 198700 };
  return moment.defineLocale("tr", {
    months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
    monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays: "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
    weekdaysShort: "Paz_Pts_Sal_\u00C7ar_Per_Cum_Cts".split("_"),
    weekdaysMin: "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_"),
    longDateFormat: { <string:1122280543>: null, <string:3251850218>: null, <string:306010250>: null, <string:37429971>: null, <string:1812403200>: null, <string:3855182856>: "isArray" },
    calendar: {},
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
