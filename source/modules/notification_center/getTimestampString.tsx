// Module ID: 6884
// Function ID: 54623
// Name: getDurationString
// Dependencies: [1212, 3712, 2]
// Exports: default, getAbbreviatedFormatter, getFullFormatter

// Module 6884 (getDurationString)
function getDurationString(seconds) {
  seconds = seconds.seconds;
  const formatter = seconds.getFormatter();
  if (seconds < 60) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    let obj = { minutes: 1 };
    let formatToPlainStringResult = intl6.formatToPlainString(formatter.minutes, obj);
  } else if (seconds < 3600) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math5 = Math;
    obj.minutes = Math.floor(seconds / 60);
    formatToPlainStringResult = intl5.formatToPlainString(formatter.minutes, obj);
  } else if (seconds < 86400) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {};
    const _Math4 = Math;
    obj1.hours = Math.floor(seconds / 3600);
    formatToPlainStringResult = intl4.formatToPlainString(formatter.hours, obj1);
  } else if (seconds < c3) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj2 = {};
    const _Math3 = Math;
    obj2.days = Math.floor(seconds / 86400);
    formatToPlainStringResult = intl3.formatToPlainString(formatter.days, obj2);
  } else if (seconds < c4) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj3 = {};
    const _Math2 = Math;
    obj3.months = Math.floor(seconds / c3);
    formatToPlainStringResult = intl2.formatToPlainString(formatter.months, obj3);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math = Math;
    obj.years = Math.floor(seconds / c4);
    formatToPlainStringResult = intl.formatToPlainString(formatter.years, obj);
  }
  return formatToPlainStringResult;
}
let c3 = 2592000;
let c4 = 31104000;
const result = require("set").fileFinishedImporting("modules/notification_center/getTimestampString.tsx");

export default function getTimestampString(arg0) {
  let getFormatter;
  let since;
  const obj = {};
  ({ since, getFormatter } = arg0);
  obj.seconds = importDefault(3712)().diff(importDefault(3712)(since), "s");
  obj.getFormatter = getFormatter;
  return getDurationString(obj);
};
export const getAbbreviatedFormatter = function getAbbreviatedFormatter() {
  return { minutes: require(1212) /* getSystemLocale */.t["XIGt+W"], hours: require(1212) /* getSystemLocale */.t.rhY1Rs, days: require(1212) /* getSystemLocale */.t.GBLpQ8, months: require(1212) /* getSystemLocale */.t.XzBNbS, years: require(1212) /* getSystemLocale */.t.I1E8p6 };
};
export const getFullFormatter = function getFullFormatter() {
  return { minutes: require(1212) /* getSystemLocale */.t["GqQ/Y9"], hours: require(1212) /* getSystemLocale */.t.c5zfWZ, days: require(1212) /* getSystemLocale */.t.amjnaI, months: require(1212) /* getSystemLocale */.t.SoON3V, years: require(1212) /* getSystemLocale */.t["12B3Re"] };
};
export { getDurationString };
