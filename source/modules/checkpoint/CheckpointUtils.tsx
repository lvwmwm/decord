// Module ID: 7918
// Function ID: 7919
// Name: items
// Dependencies: [4265, 5926, 1236, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 7918 (items)
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let time;
  let unit;
  let obj = require(4265) /* sleep */;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const abbreviatedFormatter = require(5926) /* getDurationString */.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1236).intl;
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4265).TimeUnits.HOURS) {
      const intl2 = tmp(1236).intl;
      obj = { hours: null };
      obj[0] = rounded;
      let formatToPlainStringResult = intl2.formatToPlainString(abbreviatedFormatter.hours, obj);
    } else {
      const intl = tmp(1236).intl;
      obj = { minutes: null };
      obj[0] = rounded;
      formatToPlainStringResult = intl.formatToPlainString(abbreviatedFormatter.minutes, obj);
    }
    return formatToPlainStringResult;
  }
  const obj2 = require(5926) /* getDurationString */;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return importDefault(7919);
  } else if (1 === cardId) {
    return importDefault(7920);
  } else if (2 === cardId) {
    return importDefault(7921);
  } else if (3 === cardId) {
    return importDefault(7922);
  } else if (4 === cardId) {
    return importDefault(7923);
  } else if (5 === cardId) {
    return importDefault(7924);
  } else if (6 === cardId) {
    return importDefault(7925);
  } else if (7 === cardId) {
    return importDefault(7926);
  } else if (8 === cardId) {
    return importDefault(7927);
  } else {
    return importDefault(7928);
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
