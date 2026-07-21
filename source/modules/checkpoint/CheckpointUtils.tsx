// Module ID: 7818
// Function ID: 62400
// Name: items
// Dependencies: []
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 7818 (items)
const items = [require(dependencyMap[0]).TimeUnits.HOURS, require(dependencyMap[0]).TimeUnits.MINUTES];
const _module = require(dependencyMap[13]);
const result = _module.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = require(dependencyMap[0]);
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  const time = timeAndUnit.time;
  let obj1 = require(dependencyMap[1]);
  const abbreviatedFormatter = obj1.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = require(dependencyMap[2]).intl;
    obj = { minutes: 0 };
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, obj);
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (timeAndUnit.unit === require(dependencyMap[0]).TimeUnits.HOURS) {
      const intl2 = require(dependencyMap[2]).intl;
      obj = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(abbreviatedFormatter.hours, obj);
    } else {
      const intl = require(dependencyMap[2]).intl;
      obj1 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(abbreviatedFormatter.minutes, obj1);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return importDefault(dependencyMap[3]);
  } else if (1 === cardId) {
    return importDefault(dependencyMap[4]);
  } else if (2 === cardId) {
    return importDefault(dependencyMap[5]);
  } else if (3 === cardId) {
    return importDefault(dependencyMap[6]);
  } else if (4 === cardId) {
    return importDefault(dependencyMap[7]);
  } else if (5 === cardId) {
    return importDefault(dependencyMap[8]);
  } else if (6 === cardId) {
    return importDefault(dependencyMap[9]);
  } else if (7 === cardId) {
    return importDefault(dependencyMap[10]);
  } else if (8 === cardId) {
    return importDefault(dependencyMap[11]);
  } else {
    return importDefault(dependencyMap[12]);
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
