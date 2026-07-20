// Module ID: 3290
// Function ID: 26026
// Name: special
// Dependencies: []
// Exports: default

// Module 3290 (special)
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
let closure_0 = {};
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
    let text1 = `${arg0} ${closure_1(0, arg1, arg2, arg3)}`;
  } else if (arg1) {
    if (arg3) {
      let text2 = `${arg0} ${closure_4(arg2)[1]}`;
    } else {
      const tmp11 = forms(arg2);
      if (tmp9) {
        let tmp12 = tmp11[1];
      } else {
        tmp12 = tmp11[2];
      }
      text2 = text + tmp12;
      const tmp9 = special(arg0);
    }
  } else {
    const tmp5 = forms(arg2);
    if (tmp3) {
      let first = tmp5[1];
    } else {
      first = tmp5[0];
    }
    text1 = text + first;
    const tmp3 = special(arg0);
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
  if ("string" === typeof closure_2[str]) {
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
