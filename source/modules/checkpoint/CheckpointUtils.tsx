// Module ID: 7913
// Function ID: 62766
// Name: items
// Dependencies: [4206, 6884, 1212, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 7913 (items)
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = require(4206) /* sleep */;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  const time = timeAndUnit.time;
  let obj1 = require(6884) /* getDurationString */;
  const abbreviatedFormatter = obj1.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { minutes: 0 };
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, obj);
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (timeAndUnit.unit === require(4206) /* sleep */.TimeUnits.HOURS) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(abbreviatedFormatter.hours, obj);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj1 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(abbreviatedFormatter.minutes, obj1);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return importDefault(7914);
  } else if (1 === cardId) {
    return importDefault(7915);
  } else if (2 === cardId) {
    return importDefault(7916);
  } else if (3 === cardId) {
    return importDefault(7917);
  } else if (4 === cardId) {
    return importDefault(7918);
  } else if (5 === cardId) {
    return importDefault(7919);
  } else if (6 === cardId) {
    return importDefault(7920);
  } else if (7 === cardId) {
    return importDefault(7921);
  } else if (8 === cardId) {
    return importDefault(7922);
  } else {
    return importDefault(7923);
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
