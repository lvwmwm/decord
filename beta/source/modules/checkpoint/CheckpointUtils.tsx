// Module ID: 8444
// Function ID: 8445
// Name: CheckpointUtils
// Dependencies: [4817, 7910, 1115, 8445, 8446, 8447, 8448, 8449, 8450, 8451, 8452, 8453, 8454, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8444 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4817 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7910 */;
import _modDef8445 from "module_8445" /* 8445 */;
import _modDef8446 from "module_8446" /* 8446 */;
import _modDef8447 from "module_8447" /* 8447 */;
import _modDef8448 from "module_8448" /* 8448 */;
import _modDef8449 from "module_8449" /* 8449 */;
import _modDef8450 from "module_8450" /* 8450 */;
import _modDef8451 from "module_8451" /* 8451 */;
import _modDef8452 from "module_8452" /* 8452 */;
import _modDef8453 from "module_8453" /* 8453 */;
import _modDef8454 from "module_8454" /* 8454 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = notification_center_getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1115).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4817).TimeUnits.HOURS) {
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
    return _modDef8445;
  } else if (1 === cardId) {
    return _modDef8446;
  } else if (2 === cardId) {
    return _modDef8447;
  } else if (3 === cardId) {
    return _modDef8448;
  } else if (4 === cardId) {
    return _modDef8449;
  } else if (5 === cardId) {
    return _modDef8450;
  } else if (6 === cardId) {
    return _modDef8451;
  } else if (7 === cardId) {
    return _modDef8452;
  } else if (8 === cardId) {
    return _modDef8453;
  } else {
    return _modDef8454;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
