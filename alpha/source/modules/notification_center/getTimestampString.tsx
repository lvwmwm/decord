// Module ID: 6076
// Function ID: 6077
// Name: getTimestampString
// Dependencies: [1113, 2042, 2]
// Exports: default, getAbbreviatedFormatter, getFullFormatter

// Module 6076 (getTimestampString)
import intl8 from "intl" /* 1113 */;
import _modDef2042 from "module_2042" /* 2042 */;
import size from "module_2" /* 2 */;

function getDurationString(getFormatter) {
  let formatToPlainStringResult;
  let includeWeeks;
  let seconds;
  let weeks;
  ({ seconds, includeWeeks } = getFormatter);
  getFormatter = getFormatter.getFormatter;
  if (includeWeeks === undefined) {
    includeWeeks = false;
  }
  const time = getFormatter();
  if (includeWeeks) {
    weeks = time.weeks;
  }
  if (seconds < 60) {
    const intl7 = intl8.intl;
    formatToPlainStringResult = intl7.formatToPlainString(time.minutes, { minutes: 1 });
  } else if (seconds < 3600) {
    const intl6 = intl8.intl;
    const _Math6 = Math;
    const formatToPlainString6 = intl6.formatToPlainString;
    const minutes = time.minutes;
    const obj2 = { minutes: Math.floor(seconds / 60) };
    formatToPlainStringResult = formatToPlainString6(minutes, obj2);
  } else if (seconds < 86400) {
    const intl5 = intl8.intl;
    const _Math5 = Math;
    const formatToPlainString5 = intl5.formatToPlainString;
    const hours = time.hours;
    const obj3 = { hours: Math.floor(seconds / 3600) };
    formatToPlainStringResult = formatToPlainString5(hours, obj3);
  } else {
    if (null != weeks) {
      if (seconds >= c3) {
        if (seconds < c4) {
          const intl4 = intl8.intl;
          const _Math4 = Math;
          const formatToPlainString4 = intl4.formatToPlainString;
          const obj4 = { weeks: Math.floor(seconds / tmp) };
          formatToPlainStringResult = formatToPlainString4(weeks, obj4);
        }
      }
    }
    if (seconds < c4) {
      const intl3 = intl8.intl;
      const _Math3 = Math;
      const formatToPlainString3 = intl3.formatToPlainString;
      const days = time.days;
      const obj5 = { days: Math.floor(seconds / 86400) };
      formatToPlainStringResult = formatToPlainString3(days, obj5);
    } else if (seconds < c5) {
      const intl2 = intl8.intl;
      const _Math2 = Math;
      const formatToPlainString2 = intl2.formatToPlainString;
      const months = time.months;
      const obj6 = { months: Math.floor(seconds / tmp3) };
      formatToPlainStringResult = formatToPlainString2(months, obj6);
    } else {
      const intl = intl8.intl;
      const _Math = Math;
      const formatToPlainString = intl.formatToPlainString;
      const years = time.years;
      const obj = { years: Math.floor(seconds / tmp26) };
      formatToPlainStringResult = formatToPlainString(years, obj);
    }
  }
  return formatToPlainStringResult;
}
let c3 = 604800;
let c4 = 2592000;
let c5 = 31104000;
const result = size.fileFinishedImporting("modules/notification_center/getTimestampString.tsx");

export default function getTimestampString(arg0) {
  let getFormatter;
  let includeWeeks;
  let obj2;
  let since;
  const obj = { seconds: obj2.diff(_modDef2042(since), "s"), getFormatter, includeWeeks };
  ({ since, getFormatter, includeWeeks } = arg0);
  obj2 = _modDef2042();
  return getDurationString(obj);
};
export function getAbbreviatedFormatter() {
  const time = { minutes: intl8.t["XIGt+W"], hours: intl8.t.rhY1Rs, days: intl8.t.GBLpQ8, weeks: intl8.t.veX7G1, months: intl8.t.XzBNbS, years: intl8.t.I1E8p6 };
  return time;
}
export function getFullFormatter() {
  const time = { minutes: intl8.t["GqQ/Y9"], hours: intl8.t.c5zfWZ, days: intl8.t.amjnaI, months: intl8.t.SoON3V, years: intl8.t["12B3Re"] };
  return time;
}
export { getDurationString };
