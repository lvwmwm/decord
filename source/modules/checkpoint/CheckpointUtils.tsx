// Module ID: 8288
// Function ID: 8289
// Name: items
// Dependencies: [4419, 7143, 1236, 8289, 8290, 8291, 8292, 8293, 8294, 8295, 8296, 8297, 8298, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8288 (items)
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let time;
  let unit;
  let obj = require(4419) /* sleep */;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const abbreviatedFormatter = require(7143) /* getDurationString */.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1236).intl;
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4419).TimeUnits.HOURS) {
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
  const obj2 = require(7143) /* getDurationString */;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return importDefault(8289);
  } else if (1 === cardId) {
    return importDefault(8290);
  } else if (2 === cardId) {
    return importDefault(8291);
  } else if (3 === cardId) {
    return importDefault(8292);
  } else if (4 === cardId) {
    return importDefault(8293);
  } else if (5 === cardId) {
    return importDefault(8294);
  } else if (6 === cardId) {
    return importDefault(8295);
  } else if (7 === cardId) {
    return importDefault(8296);
  } else if (8 === cardId) {
    return importDefault(8297);
  } else {
    return importDefault(8298);
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
