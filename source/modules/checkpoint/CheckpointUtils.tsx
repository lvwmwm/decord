// Module ID: 7860
// Function ID: 62739
// Name: items
// Dependencies: [4207, 5875, 1212, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 7860 (items)
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = require(4207) /* sleep */;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  const time = timeAndUnit.time;
  let obj1 = require(5875) /* getDurationString */;
  const abbreviatedFormatter = obj1.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { minutes: 0 };
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, obj);
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (timeAndUnit.unit === require(4207) /* sleep */.TimeUnits.HOURS) {
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
    return importDefault(7861);
  } else if (1 === cardId) {
    return importDefault(7862);
  } else if (2 === cardId) {
    return importDefault(7863);
  } else if (3 === cardId) {
    return importDefault(7864);
  } else if (4 === cardId) {
    return importDefault(7865);
  } else if (5 === cardId) {
    return importDefault(7866);
  } else if (6 === cardId) {
    return importDefault(7867);
  } else if (7 === cardId) {
    return importDefault(7868);
  } else if (8 === cardId) {
    return importDefault(7869);
  } else {
    return importDefault(7870);
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
