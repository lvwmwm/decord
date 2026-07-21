// Module ID: 6880
// Function ID: 54570
// Name: getDurationString
// Dependencies: []
// Exports: default, getAbbreviatedFormatter, getFullFormatter

// Module 6880 (getDurationString)
function getDurationString(seconds) {
  seconds = seconds.seconds;
  const formatter = seconds.getFormatter();
  if (seconds < 60) {
    const intl6 = require(dependencyMap[0]).intl;
    let obj = { minutes: 1 };
    let formatToPlainStringResult = intl6.formatToPlainString(formatter.minutes, obj);
  } else if (seconds < 3600) {
    const intl5 = require(dependencyMap[0]).intl;
    obj = {};
    const _Math5 = Math;
    obj.minutes = Math.floor(seconds / 60);
    formatToPlainStringResult = intl5.formatToPlainString(formatter.minutes, obj);
  } else if (seconds < 86400) {
    const intl4 = require(dependencyMap[0]).intl;
    const obj1 = {};
    const _Math4 = Math;
    obj1.hours = Math.floor(seconds / 3600);
    formatToPlainStringResult = intl4.formatToPlainString(formatter.hours, obj1);
  } else if (seconds < closure_3) {
    const intl3 = require(dependencyMap[0]).intl;
    const obj2 = {};
    const _Math3 = Math;
    obj2.days = Math.floor(seconds / 86400);
    formatToPlainStringResult = intl3.formatToPlainString(formatter.days, obj2);
  } else if (seconds < closure_4) {
    const intl2 = require(dependencyMap[0]).intl;
    const obj3 = {};
    const _Math2 = Math;
    obj3.months = Math.floor(seconds / closure_3);
    formatToPlainStringResult = intl2.formatToPlainString(formatter.months, obj3);
  } else {
    const intl = require(dependencyMap[0]).intl;
    obj = {};
    const _Math = Math;
    obj.years = Math.floor(seconds / closure_4);
    formatToPlainStringResult = intl.formatToPlainString(formatter.years, obj);
  }
  return formatToPlainStringResult;
}
let closure_3 = 2592000;
let closure_4 = 31104000;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/notification_center/getTimestampString.tsx");

export default function getTimestampString(arg0) {
  let getFormatter;
  let since;
  const obj = {};
  ({ since, getFormatter } = arg0);
  obj.seconds = importDefault(dependencyMap[1])().diff(importDefault(dependencyMap[1])(since), "s");
  obj.getFormatter = getFormatter;
  return getDurationString(obj);
};
export const getAbbreviatedFormatter = function getAbbreviatedFormatter() {
  return { minutes: require(dependencyMap[0]).t.XIGt+W, hours: require(dependencyMap[0]).t.rhY1Rs, days: require(dependencyMap[0]).t.GBLpQ8, months: require(dependencyMap[0]).t.XzBNbS, years: require(dependencyMap[0]).t.I1E8p6 };
};
export const getFullFormatter = function getFullFormatter() {
  return { minutes: require(dependencyMap[0]).t.GqQ/Y9, hours: require(dependencyMap[0]).t.c5zfWZ, days: require(dependencyMap[0]).t.amjnaI, months: require(dependencyMap[0]).t.SoON3V, years: require(dependencyMap[0]).t.12B3Re };
};
export { getDurationString };
