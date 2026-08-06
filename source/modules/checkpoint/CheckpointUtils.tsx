// Module ID: 8168
// Function ID: 8169
// Name: items
// Dependencies: [4360, 7024, 1236, 8169, 8170, 8171, 8172, 8173, 8174, 8175, 8176, 8177, 8178, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8168 (items)
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let time;
  let unit;
  let obj = require(4360) /* sleep */;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const abbreviatedFormatter = require(7024) /* getDurationString */.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1236).intl;
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4360).TimeUnits.HOURS) {
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
  const obj2 = require(7024) /* getDurationString */;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return importDefault(8169);
  } else if (1 === cardId) {
    return importDefault(8170);
  } else if (2 === cardId) {
    return importDefault(8171);
  } else if (3 === cardId) {
    return importDefault(8172);
  } else if (4 === cardId) {
    return importDefault(8173);
  } else if (5 === cardId) {
    return importDefault(8174);
  } else if (6 === cardId) {
    return importDefault(8175);
  } else if (7 === cardId) {
    return importDefault(8176);
  } else if (8 === cardId) {
    return importDefault(8177);
  } else {
    return importDefault(8178);
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
