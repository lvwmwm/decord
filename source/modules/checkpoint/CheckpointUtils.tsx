// Module ID: 7896
// Function ID: 62829
// Name: items
// Dependencies: [4241, 5909, 1212, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 7896 (items)
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = require(4241) /* sleep */;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  const time = timeAndUnit.time;
  let obj1 = require(5909) /* getDurationString */;
  const abbreviatedFormatter = obj1.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { minutes: 0 };
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, obj);
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (timeAndUnit.unit === require(4241) /* sleep */.TimeUnits.HOURS) {
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
    return importDefault(7897);
  } else if (1 === cardId) {
    return importDefault(7898);
  } else if (2 === cardId) {
    return importDefault(7899);
  } else if (3 === cardId) {
    return importDefault(7900);
  } else if (4 === cardId) {
    return importDefault(7901);
  } else if (5 === cardId) {
    return importDefault(7902);
  } else if (6 === cardId) {
    return importDefault(7903);
  } else if (7 === cardId) {
    return importDefault(7904);
  } else if (8 === cardId) {
    return importDefault(7905);
  } else {
    return importDefault(7906);
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
