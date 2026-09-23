// Module ID: 5060
// Function ID: 5061
// Name: CheckpointUtils
// Dependencies: [4856, 5061, 1115, 5062, 5063, 5064, 5065, 5066, 5067, 5068, 5069, 5070, 5071, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 5060 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4856 */;
import getTimestampString from "getTimestampString" /* 5061 */;
import _modDef5062 from "module_5062" /* 5062 */;
import _modDef5063 from "module_5063" /* 5063 */;
import _modDef5064 from "module_5064" /* 5064 */;
import _modDef5065 from "module_5065" /* 5065 */;
import _modDef5066 from "module_5066" /* 5066 */;
import _modDef5067 from "module_5067" /* 5067 */;
import _modDef5068 from "module_5068" /* 5068 */;
import _modDef5069 from "module_5069" /* 5069 */;
import _modDef5070 from "module_5070" /* 5070 */;
import _modDef5071 from "module_5071" /* 5071 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1115).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4856).TimeUnits.HOURS) {
      const intl2 = tmp(1115).intl;
      const obj3 = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1115).intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef5062;
  } else if (1 === cardId) {
    return _modDef5063;
  } else if (2 === cardId) {
    return _modDef5064;
  } else if (3 === cardId) {
    return _modDef5065;
  } else if (4 === cardId) {
    return _modDef5066;
  } else if (5 === cardId) {
    return _modDef5067;
  } else if (6 === cardId) {
    return _modDef5068;
  } else if (7 === cardId) {
    return _modDef5069;
  } else if (8 === cardId) {
    return _modDef5070;
  } else {
    return _modDef5071;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};
