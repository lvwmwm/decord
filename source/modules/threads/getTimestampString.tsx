// Module ID: 6731
// Function ID: 52435
// Name: getTimestampString
// Dependencies: [1212, 3712, 2]
// Exports: default

// Module 6731 (getTimestampString)
const result = require("set").fileFinishedImporting("modules/threads/getTimestampString.tsx");

export default function getTimestampString(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let importDefault;
  let obj;
  function formatString(minutes, diffResult) {
    let tmp2;
    if (flag) {
      tmp2 = obj;
    }
    let tmp3 = (function getString(minutes, arg1, arg2) {
      if (tmp) {
        let tmp4 = arg1[minutes];
        if (null == tmp4) {
          let tmp5;
          if (null != arg2) {
            tmp5 = arg2[minutes];
          }
          tmp4 = tmp5;
        }
        let tmp6 = null;
        if (null != tmp4) {
          tmp6 = tmp4;
        }
        let tmp3 = tmp6;
      } else {
        let tmp2;
        if (null != arg2) {
          tmp2 = arg2[minutes];
        }
        tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
      }
      return tmp3;
    })(minutes, c1, tmp2);
    let tmp4 = null;
    if (null != tmp3) {
      let formatToPlainStringResult = tmp3;
      if ("string" !== typeof tmp3) {
        const intl = flag(obj[0]).intl;
        obj = { count: diffResult };
        formatToPlainStringResult = intl.formatToPlainString(tmp3, obj);
      }
      tmp4 = formatToPlainStringResult;
    }
    return tmp4;
  }
  obj = importDefault(obj[1])();
  const diffResult = obj.diff(importDefault(obj[1])(arg0), "s");
  let tmp2;
  if (null != arg1) {
    tmp2 = arg1();
  }
  importDefault = tmp2;
  obj = { seconds: flag(obj[0]).t.sMPmtq, minutes: flag(obj[0]).t.N9M4N1, hours: flag(obj[0]).t.p0KedC, days: flag(obj[0]).t.gjK5av, months: flag(obj[0]).t.kHo4Or, years: flag(obj[0]).t.KjKr2P };
  if (diffResult < 60) {
    let seconds;
    if (null != tmp2) {
      seconds = tmp2.seconds;
    }
    if (null != seconds) {
      let formatStringResult = formatString("seconds", diffResult);
    } else {
      formatStringResult = formatString("minutes", 1);
    }
    if (null != formatStringResult) {
      return formatStringResult;
    }
  }
  if (diffResult < 3600) {
    const _Math = Math;
    const formatStringResult1 = formatString("minutes", Math.floor(diffResult / 60));
    if (null != formatStringResult1) {
      return formatStringResult1;
    }
  }
  if (diffResult < 86400) {
    const _Math2 = Math;
    const formatStringResult2 = formatString("hours", Math.floor(diffResult / 3600));
    if (null != formatStringResult2) {
      return formatStringResult2;
    }
  }
  if (diffResult < 2592000) {
    const _Math3 = Math;
    const formatStringResult3 = formatString("days", Math.floor(diffResult / 86400));
    if (null != formatStringResult3) {
      return formatStringResult3;
    }
  }
  if (diffResult < 31104000) {
    const _Math4 = Math;
    const formatStringResult4 = formatString("months", Math.floor(diffResult / 2592000));
    if (null != formatStringResult4) {
      return formatStringResult4;
    }
  }
  if (diffResult >= 31104000) {
    let years;
    if (null != tmp2) {
      years = tmp2.years;
    }
    if (null != years) {
      const _Math5 = Math;
      const formatStringResult5 = formatString("years", Math.floor(diffResult / 31104000));
      if (null != formatStringResult5) {
        return formatStringResult5;
      }
    }
  }
  return importDefault(obj[1])(arg0).format("LL");
};
