// Module ID: 8074
// Function ID: 8075
// Name: items
// Dependencies: [4561, 7575, 1233, 8075, 8076, 8077, 8078, 8079, 8080, 8081, 8082, 8083, 8084, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8074 (items)
import set from "set" /* 2 */;
import sleep from "sleep" /* 4561 */;
import getDurationString from "getDurationString" /* 7575 */;
import metadataDefault from "metadata" /* 8075 */;
import metadataDefault2 from "metadata" /* 8076 */;
import metadataDefault3 from "metadata" /* 8077 */;
import metadataDefault4 from "metadata" /* 8078 */;
import metadataDefault5 from "metadata" /* 8079 */;
import metadataDefault6 from "metadata" /* 8080 */;
import metadataDefault7 from "metadata" /* 8081 */;
import metadataDefault8 from "metadata" /* 8082 */;
import metadataDefault9 from "metadata" /* 8083 */;
import metadataDefault10 from "metadata" /* 8084 */;

const items = [sleep.TimeUnits.HOURS, sleep.TimeUnits.MINUTES];
const result = set.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = sleep;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const abbreviatedFormatter = getDurationString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1233).intl;
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4561).TimeUnits.HOURS) {
      const intl2 = tmp(1233).intl;
      obj = { hours: null };
      obj[0] = rounded;
      let formatToPlainStringResult = intl2.formatToPlainString(abbreviatedFormatter.hours, obj);
    } else {
      const intl = tmp(1233).intl;
      obj = { minutes: null };
      obj[0] = rounded;
      formatToPlainStringResult = intl.formatToPlainString(abbreviatedFormatter.minutes, obj);
    }
    return formatToPlainStringResult;
  }
  const obj2 = getDurationString;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return metadataDefault;
  } else if (1 === cardId) {
    return metadataDefault2;
  } else if (2 === cardId) {
    return metadataDefault3;
  } else if (3 === cardId) {
    return metadataDefault4;
  } else if (4 === cardId) {
    return metadataDefault5;
  } else if (5 === cardId) {
    return metadataDefault6;
  } else if (6 === cardId) {
    return metadataDefault7;
  } else if (7 === cardId) {
    return metadataDefault8;
  } else if (8 === cardId) {
    return metadataDefault9;
  } else {
    return metadataDefault10;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
