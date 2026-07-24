// Module ID: 3292
// Function ID: 26037
// Name: result
// Dependencies: []
// Exports: default

// Module 3292 (result)
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
  return dependencyMap[arg0].split("_");
}
let closure_0 = { xseconds_other: "sekund\u0117_sekund\u017Ei\u0173_sekundes", xminutes_one: "minut\u0117_minut\u0117s_minut\u0119", xminutes_other: "minut\u0117s_minu\u010Di\u0173_minutes", xhours_one: "valanda_valandos_valand\u0105", xhours_other: "valandos_valand\u0173_valandas", xdays_one: "diena_dienos_dien\u0105", xdays_other: "dienos_dien\u0173_dienas", xweeks_one: "savait\u0117_savait\u0117s_savait\u0119", xweeks_other: "savait\u0117s_savai\u010Di\u0173_savaites", xmonths_one: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F", xmonths_other: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", xyears_one: "metai_met\u0173_metus", xyears_other: "metai_met\u0173_metus", about: "apie", over: "daugiau nei", almost: "beveik", lessthan: "ma\u017Eiau nei" };
function translateSeconds(arg0, arg1, arg2, arg3) {
  let str = "kelios sekund\u0117s";
  if (arg1) {
    let str2 = "kelias sekundes";
    if (arg3) {
      str2 = "keli\u0173 sekund\u017Ei\u0173";
    }
    str = str2;
  }
  return str;
}
function translateSingular(arg0, arg1, arg2, arg3) {
  const tmp = forms(arg2);
  if (arg1) {
    if (arg3) {
      let tmp3 = tmp[1];
    } else {
      tmp3 = tmp[2];
    }
  } else {
    return tmp[0];
  }
}
function translate(arg0, arg1, arg2, arg3) {
  const text = `${arg0} `;
  if (1 === arg0) {
    let text1 = `${arg0} ${translateSingular(0, arg1, arg2, arg3)}`;
  } else if (arg1) {
    if (arg3) {
      let text2 = `${arg0} ${forms(arg2)[1]}`;
    } else {
      const tmp11 = forms(arg2);
      if (tmp9) {
        let tmp12 = tmp11[1];
      } else {
        tmp12 = tmp11[2];
      }
      text2 = text + tmp12;
      tmp9 = special(arg0);
    }
  } else {
    const tmp5 = forms(arg2);
    if (tmp3) {
      let first = tmp5[1];
    } else {
      first = tmp5[0];
    }
    text1 = text + first;
    tmp3 = special(arg0);
  }
  return text1;
}
let closure_2 = { lessThanXSeconds: { one: translateSeconds, other: translate }, xSeconds: { one: translateSeconds, other: translate }, halfAMinute: "pus\u0117 minut\u0117s", lessThanXMinutes: { one: translateSingular, other: translate }, xMinutes: { one: translateSingular, other: translate }, aboutXHours: { one: translateSingular, other: translate }, xHours: { one: translateSingular, other: translate }, xDays: { one: translateSingular, other: translate }, aboutXWeeks: { one: translateSingular, other: translate }, xWeeks: { one: translateSingular, other: translate }, aboutXMonths: { one: translateSingular, other: translate }, xMonths: { one: translateSingular, other: translate }, aboutXYears: { one: translateSingular, other: translate }, xYears: { one: translateSingular, other: translate }, overXYears: { one: translateSingular, other: translate }, almostXYears: { one: translateSingular, other: translate } };

export default function formatDistance(str, arg1, comparison) {
  const match = str.match(/about|over|almost|lessthan/i);
  if (match) {
    str = str.replace(match[0], "");
  }
  comparison = undefined;
  if (null != comparison) {
    comparison = comparison.comparison;
  }
  let tmp3 = undefined !== comparison;
  if (tmp3) {
    tmp3 = comparison.comparison > 0;
  }
  if ("string" === typeof table[str]) {
    let text = obj;
    if (match) {
      text = `${closure_0[str5.toLowerCase(str5)]} ${obj}`;
    }
    let tmp16 = text;
    if (null != comparison) {
      tmp16 = text;
      if (comparison.addSuffix) {
        if (!comparison.comparison) {
          let text1 = `prieš ${tmp14}`;
        }
        text1 = `po ${tmp14}`;
      }
    }
    return tmp16;
  } else if (1 === arg1) {
    let addSuffix;
    if (null != comparison) {
      addSuffix = comparison.addSuffix;
    }
    str = str.toLowerCase();
    let oneResult = obj.one(arg1, true === addSuffix, `${str}_one`, tmp3);
  } else {
    let addSuffix1;
    if (null != comparison) {
      addSuffix1 = comparison.addSuffix;
    }
    oneResult = obj.other(arg1, true === addSuffix1, `${str.toLowerCase()}_other`, tmp3);
  }
};
export default exports.default;
